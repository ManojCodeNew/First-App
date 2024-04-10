{/* This should be make full screen of display  */ }

// import { StatusBar } from 'expo-status-bar';

import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import Home from "./Components/Calculator.js";

export default function App() {
  const [action, setAction] = useState();



  const [firstin, setFirstin] = useState();
  const FirstText = (FirstValue) => {
    setFirstin(FirstValue);
  }
  const [Secin, setSecin] = useState();
  const SecText = (SecondValue) => {
    setSecin(SecondValue);
  }

  const onclick_handle = () => {
    const value = firstin + "+" + Secin;
    const Calculated_value = eval(value);
    setAction(Calculated_value);
  }
  return (
    <>
      <View style={styles.container}>

        <Text style={styles.text}>Manoj</Text>

        {/* <Text style={styles.text}>This is my first React Native Project</Text> */}
        {/* This should be make full screen of display  */}
        {/* <StatusBar style="auto" /> */}
      </View>
      <View style={styles.body}>
        <Text style={styles.heading}>App.js // Sample Adding Practice </Text>
        <Text>Welcome to my new journey in React Native</Text>

        <Text>First Input</Text>
        <TextInput
          keyboardType='numeric'
          value={firstin}
          style={styles.firstin}
          onChangeText={FirstText}
        ></TextInput>

        <Text>Second Input</Text>
        <TextInput
          keyboardType='numeric'
          value={Secin}
          style={styles.Secin}
          onChangeText={SecText}
        ></TextInput>


        <TouchableOpacity onPress={onclick_handle} style={styles.btn}>
          <Text style={styles.btnText}>Click Me </Text>
        </TouchableOpacity>
        <Text>Strength : {action}</Text>
      </View>
      <Home />

    </>

  );
}

const styles = StyleSheet.create({
  heading: {
    fontWeight: 'bold'
  },
  container: {
    backgroundColor: 'black',
    alignItems: 'center',
    margin: 0,
    padding: 30,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
  body: {
    padding: 10,
    fontStyle: 'Times new roman',
    backgroundColor: 'lightgray',

  },
  firstin: {
    borderColor: 'black',
    borderWidth: 1,
  },
  Secin: {
    borderColor: 'black',
    borderWidth: 1,
  },
  btnheader: {
    marginTop: 15,
  },
  btn: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
    minWidth: '40%',
    alignItems: 'center'
  },
  btnText: {
    color: 'white',
    fontSize: 18,
  }
});
