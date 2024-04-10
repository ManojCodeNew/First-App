import React from 'react';
import { StatusBar } from 'react-native';
// import { StatusBar } from 'expo-status-bar';
import {Text,StyleSheet} from 'react-native';

export default function Home() {
    return (
        <>
        <Text style={styles.hometext}>
            hai
            kbhj
            kjb
        </Text>
        <StatusBar style='auto'/>
        </>
    )
}
const styles=StyleSheet.create({
    hometext:{
        color:'red',
    }
});