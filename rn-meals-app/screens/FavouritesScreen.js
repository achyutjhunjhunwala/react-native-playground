import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const FavouritesScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text> The Favourites Screen!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
  },
})

export default FavouritesScreen
