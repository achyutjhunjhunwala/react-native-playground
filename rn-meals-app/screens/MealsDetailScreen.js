import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const MealsDetailScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text> The Meals Detail Screen!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default MealsDetailScreen
