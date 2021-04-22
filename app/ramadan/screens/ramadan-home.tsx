import React,{useEffect} from 'react';
import { StyleSheet, Text, View,TextInput,Button,Alert ,Dimensions} from 'react-native';
import { RamadanController } from './controllers/ramadan-controller';
import { Ramadan } from '../../shared/models/ramadan.model'
import {RamadanEnum} from '../../shared/enums/ramadan.enum';
import { TouchableOpacity } from 'react-native-gesture-handler';
const {height, width} = Dimensions.get('screen');
import Constants from 'expo-constants';
// import firebase from 'firebase'
import BackButton from '../../shared/components/BackButton'



export function RamadanHome(props:any,{history}:any) {
    let ramadanController = new  RamadanController();
    let ramadanEnum = RamadanEnum;
    
    const [username, onChangeUsername] = React.useState(""); 
    const [message, onChangeMessage] = React.useState("");
    const [latitude, onChangeLatitude] = React.useState("");
    const [longitude, onChangeLongitude] = React.useState(""); 

    function add(){
        console.log('add pressed')
        let ramadan = new Ramadan();

        // ramadan.username=username;
        // ramadan.message=message;
        // ramadan.latitude=Number(latitude);
        // ramadan.longitude=Number(longitude);

        ramadanController.Add(ramadan);
    }
  return (
    <View style={styles.container}>
        <Text> Test Booked : {ramadanEnum.BOOKED} & Test Free : {ramadanEnum.FREE}</Text>
      <Text> {(username === '') ? '' : 'Bonjour, Je suis : '+ username} </Text>

      <Text> {(message === '') ? '' : 'Mon message est : '+ message} </Text>
      <Text> {(latitude === '' && longitude === '') ? '' : 'Ma position est : '+ '('+latitude+','+longitude+')'} </Text>
      <TextInput
        style={styles.input}
        placeholder={'entrer username'}
        onChangeText={onChangeUsername}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder={'entrer message'}
        onChangeText={onChangeMessage}
        value={message}
      />
      <TextInput
        style={styles.input}
        placeholder={'entrer latitude'}
        onChangeText={onChangeLatitude}
        value={latitude}
      />
      <TextInput
        style={styles.input}
        placeholder={'entrer longitude'}
        onChangeText={onChangeLongitude}
        value={longitude}
      />

      <Button
        title="Tester"
        onPress={() => {
            Alert.alert('Simple Button pressed');
            add()
        }}
      />
      <TouchableOpacity onPress={() => props.navigation.navigate('RamadanMap')} style={{marginHorizontal: 5}}>
                    <Text style={{color: 'rgba(81,135,200,1)'}}>Sign Up Here</Text>
      </TouchableOpacity>
      <BackButton onPress={()=>{history.push("/")}}></BackButton>
    </View>
  );
}

export function Test(){
    console.log('hola')
}

const styles = StyleSheet.create({
  container: {
      width: width ,
      alignSelf: 'center',
      backgroundColor: '#e3e3e3',
      borderRadius: 5,
      marginVertical: 10,
      marginTop:Constants.statusBarHeight,

  },  
  input: {
      padding: 15,
      marginVertical:5,
      borderBottomColor:'#000',
      
  }
})

