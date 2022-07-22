import AsyncStorage from "@react-native-async-storage/async-storage"
import { includes, pull } from "lodash"
import { FAVORITE_STORAGE } from "../utils/constants"

//Añadiendo pokemons a la lista de favoritos de
export async function AddPokemonFavoriteApi(id) {
    try {
        const favorites = await GetPokemonFavoriteApi()
        favorites.push(id)
        //Pasamos el array a string ya que en la storage solo se puede guardad texto plano
        await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites))
    } catch (error) {
        throw error
    }
}

//Obtener favoritos
export async function GetPokemonFavoriteApi() {
    try {
        const response = await AsyncStorage.getItem(FAVORITE_STORAGE)
        //retornamos los pokemones y si no tiene favoritos se retornara un array vacio
        return JSON.parse(response || '[]')

    } catch (error) {
        throw error
    }
}

//Funcion que comprueba si el pokemon ya esta añadido
export async function isPokemonFavoriteApi(id) {
    try {
        const response = await GetPokemonFavoriteApi()
        //includes nos busca si el data que le pasamos (id) existe en el response
        return includes(response, id)
    } catch (error) {
        throw error

    }
}

//funcion que elimina el pokemon de favoritos
export async function removePokemonFavoriteApi(id) {
    try {
        const favorites = await GetPokemonFavoriteApi();
        //con pull nos elimina el id que encontro en el arreglo favorites 
        const newFavorites = pull(favorites,id);

        await AsyncStorage.setItem(FAVORITE_STORAGE,JSON.stringify(newFavorites));
    } catch (error) {
        throw error
    }

}