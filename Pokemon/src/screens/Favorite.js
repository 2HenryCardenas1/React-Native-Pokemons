import { Text } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import React, { useState,  useCallback } from 'react'
import useAuth from '../hooks/useAuth'
import { GetPokemonFavoriteApi } from '../api/favorite'
import { getPokemonDetailsApi } from '../api/pokemon'
import PokemonList from "../components/PokemonList"
import NoLogged from '../components/NoLogged'

export default function Favorite() {
  const [pokemons, setPokemons ]= useState([]);
  const { auth } = useAuth()


//el useFocusEffect nos recargara el componente si ha encontrado algun cambio en el
  useFocusEffect(
    //El useCallback nos llamara a el componente si ha encontrado algun cambio en el
    //se ejecuatara siempre que este logeado el usuario 
    useCallback(() => {
      if (auth) {
        (async () => {
          const response = await GetPokemonFavoriteApi();
          const pokemonsArray = [];
          for await (const id of response) {
            const pokemonDetails = await getPokemonDetailsApi(id);
            //Le agregamos los datos que queremos capturar
            pokemonsArray.push({
              id: pokemonDetails.id,
              name: pokemonDetails.name,
              type: pokemonDetails.types[0].type.name,
              order: pokemonDetails.order,
              imagen: pokemonDetails.sprites.other["official-artwork"].front_default,
            });
          }

          setPokemons(pokemonsArray)
        })()
      }
    }, [auth]))



  return (
    !auth ? <NoLogged/> : (<PokemonList pokemons={pokemons} />)
  )
}