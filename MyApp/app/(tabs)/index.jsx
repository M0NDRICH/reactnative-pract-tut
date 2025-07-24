import { View, Text, StyleSheet, ImageBackground, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router';
import React from 'react'
import icedCoffeeImg from "@/assets/images/iced-coffee.png"
import manImg from "@/assets/images/man.png"

const CustomButton = ({ title, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const app = () => {
  const router = useRouter();
  
  return (
    <SafeAreaView style={styles.safeContainer} >
      <View style={styles.container}>
       <View style={styles.topPart}>
        <Image
          style={styles.image}
         source={manImg}/>
       </View>
       <View style={styles.buttonPart}>
        <CustomButton
        title='Get Started'
        onPress={() => router.push('/explore')}
        />
       </View>
      </View>
    </SafeAreaView>

  )
}

export default app

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    width: '100%',
    paddingTop: 60,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFF1D5'
  },
  topPart: {
    width: '100%',
    height: '50%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '50%',
    height: '50%'
  },
  buttonPart: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  button: {
    backgroundColor: '#9EC6F3',
    padding: 10,
    borderRadius: 5,
    width: '80%',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
  },
  
});