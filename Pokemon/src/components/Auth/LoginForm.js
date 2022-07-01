import { View, Text, StyleSheet, TextInput, Button, Keyboard } from 'react-native'
import React from 'react'
import {useFormik} from 'formik'
import * as Yup from "yup"

export default function LoginForm() {


    //formik es para controlar los datos del formulario de
    const formik = useFormik({
        initialValues : initialValues(),
        //Yup es para hacer la validaciones de campos
        validationSchema : Yup.object(validationSchema()),
        validateOnChange : false,
        onSubmit : (data) =>{
            console.log("Formulario enviado...")
            console.log(data)
        }
    })
    return (
        <View >
            <Text style={styles.title}>Iniciar Sesion</Text>
            <TextInput
                placeholder='Nombre de usuario'
                style={styles.input}
                autoCapitalize='none'
                value={formik.values.username}
                onChangeText={(text)=> formik.setFieldValue('username', text)}
            />
            <TextInput
                placeholder='Contraseña'
                style={styles.input}
                autoCapitalize='none'
                secureTextEntry={true}
                value={formik.values.password}
                onChangeText={(password) => formik.setFieldValue('password',password)}
            />
            <Button title="Entrar"  onPress={formik.handleSubmit}/>
            
            <Text style={styles.error}>{formik.errors.username}</Text>
            <Text style={styles.error}>{formik.errors.password}</Text>
        </View>
    )
}

//Inicializar los valores de los input
function initialValues(){
    return{
        username : "", 
        password : ""
    }
}


function validationSchema(){
    return {
        username : Yup.string().required("El usuario es obligatorio"),
        password : Yup.string().required("La contraseña es obligatoria").min(6)
    }
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 50,
        marginBottom: 15
    },
    input: {
        height: 40,        
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10
    },
    buttonInput : {
        height: 20,        
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10
    },
    error : {
        textAlign: 'center',
        color: '#f00',
        marginTop:20
    }

})