import React,{useState} from 'react'
import {ImageBackground,TextInput,Button} from 'react-native'
const Background = require('../../../assets/ramadan-app.jpg')
import {style} from '../../style/style'
import BackButton from '../../shared/components/BackButton'
import {useHistory} from 'react-router-native'
import Btn from '../../shared/components/Button';
import {Assistance} from '../../shared/models/assistance.model'
import {AssistanceController} from '../controllers/assistance.controller'

export default function addAssistance({history}:any) {
    // const history = useHistory()
    // console.log(history);
    let assistanceController = new AssistanceController();
    const [city, setCity] = useState("");
    const [nbPlaces, setNbPlaces] = useState("");
    const [description, setDescription] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    function add() {
        let assistance = new Assistance();
    
        assistance.city = city;
        assistance.nbPlaces = Number(nbPlaces);
        assistance.description = description;
        assistance.latitude = Number(latitude);
        assistance.longitude = Number(longitude);
        
        assistanceController.Add(assistance);
    
        history.push("/");
      }
    return (
        <ImageBackground
            source={Background}
            style={style.imageBackground}
        >

<TextInput
        style={style.input}
        onChangeText={setCity}
        value={city}
        placeholder="City"
      />

      <TextInput
        style={style.input}
        onChangeText={setNbPlaces}
        value={nbPlaces}
        placeholder="Places Number"
        keyboardType="numeric"
      />

      <TextInput
        style={style.input}
        onChangeText={setLatitude}
        value={latitude}
        placeholder="Latitude"
        keyboardType="numeric"
      />

      <TextInput
        style={style.input}
        onChangeText={setLongitude}
        value={longitude}
        placeholder="Longtitude"
        keyboardType="numeric"
      />
      <TextInput
        multiline
        numberOfLines={3}
        style={style.input}
        onChangeText={setDescription}
        value={description}
        placeholder="Description"
      />
      <Btn
        title="Add"
        onPress={() => {
          add();
        }}
      />

            <BackButton 
            onPress={() => {
                history.push("/");
            }}
            ></BackButton>


        </ImageBackground>
    )
}
// const style
