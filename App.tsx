import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React,{FC} from 'react';
import { StyleSheet, Text, View,SafeAreaView,ScrollView ,Button } from 'react-native';
import {NativeRouter, Switch, Route, Redirect} from 'react-router-native'
import { RamadanHome } from './app/ramadan/screens/ramadan-home';
import { RamadanMap } from './app/ramadan/screens/ramadan-map';
import  Home  from './app/shared/components/Home';
// import { SignUp } from './app/ramadan/screens/signUp';
import  Nav  from './app/ramadan/screens/Nav';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator  } from '@react-navigation/stack';
// import './firebase/firebase'
const {Navigator, Screen} = createStackNavigator();
import Constants from 'expo-constants';
import AddAssistance from './app/assistances/screens/addAssistance'
import FindAssistance from './app/assistances/screens/find-assistance'
import AddFtour from './app/breakfasts/screens/add-breakfast'
import FindFtour from './app/breakfasts/screens/find-breakfast'

const AppStack : FC = () => {
    return (

        <NativeRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/addAssistance' component={AddAssistance} />
                <Route exact path='/findAssistance' component={FindAssistance} />
                <Route exact path='/addFtour' component={AddFtour} />
                <Route exact path='/findFtour' component={FindFtour} />
            </Switch>
        </NativeRouter>
        
    )
} 
{/* const style = StyleSheet.create({
    container:{
        marginTop:Constants.statusBarHeight,
    }
}) */}
export default AppStack;
