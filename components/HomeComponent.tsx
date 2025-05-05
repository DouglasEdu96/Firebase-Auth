import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';

import { firebase } from '@react-native-firebase/auth';
import { GoogleSignin } from 'react-native-google-signin';
interface HomeProps {
  navigation: any; // Replace 'any' with the actual type of your navigation object
}
GoogleSignin.configure({
  webClientId: '595173636764-f0o827g6m35os0jpjt1652pj8n7lsqsr.apps.googleusercontent.com',
});
const HomeComponent: React.FC<HomeProps>  = ({ navigation }) => {
  const Signout = () => {
    const currentUser = firebase.auth().currentUser;
  
    if (currentUser) {
       GoogleSignin.signOut();
      firebase.auth().signOut().then(
        function() {
          console.log('Signed Out');
          navigation.navigate('login')
        },
        function(error) {
          console.error('Sign Out Error', error);
        }
      );
    } else {
      console.log('No user is currently signed in');
      navigation.navigate('login')
    }

  }
  return (
    <SafeAreaView style={{flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
      <Text>HomeComponent</Text>
      <Button textColor='white' mode='contained' onPress={Signout} >SignOut</Button>
    </SafeAreaView>
  )
}

export default HomeComponent

const styles = StyleSheet.create({})