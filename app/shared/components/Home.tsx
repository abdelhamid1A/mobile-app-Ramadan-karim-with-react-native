import React from 'react'
import {ImageBackground,StyleSheet,Text,Button} from 'react-native';
import Btn from './Button'
import {style} from '../../style/style'
const Background = require('../../../assets/ramadan-app.jpg')
export default function Home({ history }: any) {
    return (
        <ImageBackground
        style={style.imageBackground}
        source={Background}
        >
            {/* <Text>dhsbdh</Text> */}
           <Btn 
                title="ajoute une assistance" 
                onPress={() => {
                history.push("/addAssistance");
            }}
            >
            </Btn> 

           <Btn title="ajouter ftour" onPress={() => {
                history.push("/addFtour");
            }}     
           ></Btn> 
           <Btn title="trouvez ftour" onPress={() => {
                history.push("/findFtour");
            }}>
            </Btn> 
           <Btn title="trouvez une assistance" onPress={() => {
                history.push("/findAssistance");
            }}>
            </Btn> 
        </ImageBackground>
    )
}

// const styles = StyleSheet.create({
//     imageBackground: {
//       flex: 1,
//       flexDirection: "column",
//       alignItems: "center",
//       justifyContent: "space-around",
//       paddingVertical: 100,
//     },
//   });