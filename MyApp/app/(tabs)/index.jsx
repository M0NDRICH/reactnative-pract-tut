import { View, Text, StyleSheet, ImageBackground, Image, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native'
import { useRouter } from 'expo-router';
import React from 'react'
import icedCoffeeImg from "@/assets/images/iced-coffee.png"
import manImg from "@/assets/images/man.png"

const CustomButton = ({ title, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const app = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeContainer} >
      <View style={styles.container}>
       <View style={styles.topPart}>
          <Image
          style={styles.image}
          source={manImg}/>
         <Text style={styles.textTop}>
          Welcome to Application - Your Gateway to Simplicity and Efficiency!
         </Text>
         <Text style={styles.textBottom}>
          Join us today and take the first step towards a smarter, more organized future. Let's make every moment count!
         </Text>
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
    width: windowWidth * 0.7,
    height: windowHeight * 0.3,
    resizeMode: 'contain'
  },
  textTop: {
    color: '#3C2F60',
    fontWeight: 'bold',
    marginTop: '50px',
    width: '60%',
    textAlign: 'center'
  },
  textBottom: {
    color: '#3C2F60',
    fontWeight: 'bold',
    marginTop: '20px',
    width: '60%',
    textAlign: 'center'
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
    fontWeight: 'bold',
  },
  
});