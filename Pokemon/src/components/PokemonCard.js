import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import getColorByPokemonType from "../utils/getColorByPokemonType";
import {capitalize} from "lodash"
import { useNavigation } from '@react-navigation/native'

export default function PokemonCard(props) {

    const { pokemon } = props;
    const pokemonColor = getColorByPokemonType(pokemon.type);
    const bgStyles = { backgroundColor : pokemonColor,...styles.bgStyle}

    const navigation = useNavigation();

    
    const goToPokemon = () => {
        console.log(`Vamos al pokemon: ${pokemon.id}`)
        //MANDAMOS EL ID POR NAVIGATE PARA QUE NOS LLEVE A LA PAGINA DE POKEMON
        navigation.navigate('Pokemon',{id:pokemon.id})
    }

    return (
        <TouchableWithoutFeedback onPress={goToPokemon}>
            <View style={styles.card}>
                <View style={styles.spacing}>
                    <View style={bgStyles}>
                        <Text style={styles.number}>#{`${pokemon.order}`.padStart(3, 0)}</Text>
                        <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
                        <Image source={{ uri: pokemon.imagen }} style={styles.image} />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        height: 130
    },
    spacing: {
        flex: 1,
        padding: 5,
    },
    bgStyles: {
        backgroundColor: 'grey',
    },
    image: {
        position: 'absolute',
        bottom: 2,
        right: 2,
        width: 80,
        height: 80
    },
    name: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 20,
        paddingTop: 10,
    },
    number: {
        position: 'absolute',
        right: 10,
        top: 10,
        color: "#fff",
        fontSize: 11
    },
    bgStyle:{
        flex:1,
        borderRadius:15,
        padding:10
    }
})