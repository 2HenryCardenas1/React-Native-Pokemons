import { View, Text,StyleSheet, Button } from 'react-native'
import React from 'react'
import {useNavigation} from "@react-navigation/native"

export default function NoLogged() {
    const navigation = useNavigation();

  return (
    <View style={styles.content}>
      <Text style={styles.text}>Para ver esta pantalla debes de iniciar sesion</Text>
      <Button style={styles.button} title="Ir al login" onPress={() => navigation.navigate("Account")}/>
    </View>
  )
}

const styles = StyleSheet.create({
    content: {
        marginVertical:50,
        marginHorizontal:50,

    },
    text: {
        textAlign: 'center',
        marginBottom:10,
    },
   
})