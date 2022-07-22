import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { AddPokemonFavoriteApi, isPokemonFavoriteApi,removePokemonFavoriteApi } from "../../api/favorite.js"
export default function Favorite(props) {

    const { id } = props
    //Set para agregar a favoritos
    const [ isFavorite, setIsFavorite ] = useState(undefined)
    //Si esta en favoritos usar un componente si no el otro
    const Icon = isFavorite ? FontAwesome : FontAwesome5
    //Set que manejara la recarga cuando se agrege a favoritos (funciona como un interruptor)
    const [reloadCheck, setReloadCheck] = useState(false)


    //Recargar la vista al agregar a favoritos
    const onRelaodCheckFavorite = () => {
        //obtenemos el estado previo y se lo cambiamos 
        setReloadCheck((prev) => !prev)
    }

    //Cada vez que encuentre el id y verifique el estado de si esta en favoritos o no
    //me añadira o no el pokemon
    useEffect(() => {
        (async () => {
            try {
                const response = await isPokemonFavoriteApi(id)
                setIsFavorite(response)
            } catch (error) {
                setIsFavorite(false)
            }
        })()
    }, [id,reloadCheck])//aca va el dato el cual le indicamos que cada vez que cambie realice la logica

    const addFavorite = async () => {
       
        try {
            await AddPokemonFavoriteApi(id)
            onRelaodCheckFavorite()    
        } catch (error) {
            console.log(error)
            
        }
    }

    const removeFavorite = async () => {
        try {
            await removePokemonFavoriteApi(id)
            //aca recargamos de nuevo el componente
            onRelaodCheckFavorite()    
        } catch (error) {
            console.log(error)
            
        }
    }

    // si esta en favoritos me llama a la funcion removeFavorite y si no es asi me llame a addFavorite
    //isFavorite ? removeFavorite : addFavorite

    return (
        <Icon name="heart" color="#fff" size={20} onPress={isFavorite ? removeFavorite : addFavorite} style={{ marginRight: 20 }} />
    )
}