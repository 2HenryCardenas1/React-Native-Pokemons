import React from 'react'
import {createStackNavigator} from "@react-navigation/stack"
import FavoriteScreen from "../screens/Favorite"
import PokemonScreen from "../screens/Pokemon"
const Stack = createStackNavigator()

export default function FavoriteNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Favorite' component={FavoriteScreen} options={{
            title: 'Favoritos',
        }
        } />
        {/*Este stack soluciona el problema de que se volvia hacia atras hacia la pantalla pokedex y no a mi */}
         {/*/pantalla de favoritos*/}
        <Stack.Screen name='Pokemon' component={PokemonScreen} options={{
          title: '',
          headerTransparent : true,
        }}/>
    </Stack.Navigator>

  )
}