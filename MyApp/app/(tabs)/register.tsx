import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'

const explore = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View >
        <Text style={styles.text}>TODO: Log in here</Text>
      </View>
    </SafeAreaView>
  )
}

export default explore

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#FFF1D5',
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});