import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Keyboard,
} from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";
import { user, userDetails } from "../../utils/userDB";
import useAuth from "../../hooks/useAuth";

export default function LoginForm() {
    const [error, setError] = useState("");

    // traemos el hooks y su variable login
    const { login } = useAuth();
    

    //formik es para controlar los datos del formulario de
    const formik = useFormik({
        initialValues: initialValues(),
        //Yup es para hacer la validaciones de campos
        validationSchema: Yup.object(validationSchema()),

        validateOnChange: false,

        onSubmit: (formValue) => {
            setError("")
            const { username, password } = formValue;
            //Validamos los datos
            if (username != user.username || password != user.password) {
                setError("El usuario o la contraseña no son correctos");
            } else {
                //userDetails son los detalles del usuario traidos 
                login(userDetails);       
                

            }
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
                onChangeText={(text) => formik.setFieldValue('username', text)}
            />
            <TextInput
                placeholder='Contraseña'
                style={styles.input}
                autoCapitalize='none'
                secureTextEntry={true}
                value={formik.values.password}
                onChangeText={(password) => formik.setFieldValue('password', password)}
            />
            <Button title="Entrar" onPress={formik.handleSubmit} />

            <Text style={styles.error}>{formik.errors.username}</Text>
            <Text style={styles.error}>{formik.errors.password}</Text>

            <Text style={styles.error}>{error}</Text>

        </View>
    )
}

//Inicializar los valores de los input
function initialValues() {
    return {
        username: "",
        password: ""
    }
}

//Validacion de campos
function validationSchema() {
    return {
        username: Yup.string().required("El usuario es obligatorio"),
        password: Yup.string().required("La contraseña es obligatoria").min(6)
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
    buttonInput: {
        height: 20,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10
    },
    error: {
        textAlign: 'center',
        color: '#f00',
        marginTop: 20
    }

})