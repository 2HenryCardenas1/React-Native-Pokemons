import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import {capitalize} from "lodash"
import getColorByPokemonType from "../../utils/getColorByPokemonType"
export default function Type(props) {
  const { types } = props;

  return (
    <View style={styles.content}>
      {types.map(item => (
        <View key={item.type.name} style={{...styles.pill,backgroundColor: getColorByPokemonType(item.type.name)}}>
          <Text>{capitalize(item.type.name)}</Text>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  content :{
    marginTop:20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pill: {
    paddingHorizontal:30,
    paddingVertical:5,
    borderRadius:20,
    marginHorizontal:10,
    backgroundColor: '#f2f2f2',
    overflow : 'hidden',
  }
})