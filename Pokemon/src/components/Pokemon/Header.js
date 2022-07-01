import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { capitalize } from "lodash"
import getColorByPokemonType from "../../utils/getColorByPokemonType"


export default function Header(props) {
    const { name, order, image, type } = props;

    const color = getColorByPokemonType(type)

    const bgStyle = [{ backgroundColor: color, ...styles.bg }]



    return (
        <>
            <View style={bgStyle} />
            <SafeAreaView style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.name}>{capitalize(name)}</Text>
                    <Text style={styles.order}>#{`${order}`.padStart(3, 0)}</Text>
                </View>
                <View style={styles.contentImg}>
                    <Image source={{ uri: image }} style={styles.imagen} />
                </View>
            </SafeAreaView>

        </>
    )
}

const styles = StyleSheet.create({
    imagen: {
        width: 250,
        height: 300,
        resizeMode: 'contain',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 40

    },
    name: {
        color: "#fff",
        fontWeight: 'bold',
        fontSize: 27,

    },
    order: {
        color: "#fff",
        fontWeight: 'bold',

    },
    contentImg: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        top: -20
    },
    content: {
        marginHorizontal: 20,
        marginTop: 30,
    },
    bg: {
        width: '100%',
        height: 400,
        position: 'absolute',
        borderBottomEndRadius: 300,
        borderBottomLeftRadius: 300,
        transform: [{ scaleX: 2 }]
    }
})