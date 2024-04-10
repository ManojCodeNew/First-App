import React, { useState } from 'react';
// import { StatusBar } from 'react-native';
// import { StatusBar } from 'expo-status-bar';
import { Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';

export default function Home() {
    const [isPressed, setisPressed] = useState(false);
    const [cal_value, setCal_value] = useState('');
    const [final_ans,setFinal_ans]=useState();
    const submit_btnBgColor = isPressed ? "blue" : "white";
    const submit_btnTextColor = isPressed ? "white" : "black";

    const AccessValue = (props) => {
        setCal_value(cal_value + props);
    }

    const Submit = () => {
        // color Changing option
        isPressed ? setisPressed(false) : setisPressed(true);
        if (cal_value!=='') {
            const answer = eval(cal_value);
            setCal_value(answer.toString());
            
        }
        else{
            alert("Invalid Digit")
        }
    }

    const Clear=()=>{
        setCal_value('');
    }
    return (
        <>
            <Text style={styles.hometext}>Home.js //Calculator</Text>
            <View >
                <View style={styles.Container}>
                    <TextInput
                        value={cal_value}
                        style={styles.displayText}
                    />
                    {/* Clear button */}
                    <TouchableOpacity
                        onPress={Clear}
                        activeOpacity={0.5}
                        style={styles.clearbtn}>
                        <Text style={styles.cleartxt}>Clear</Text>
                    </TouchableOpacity>



                    {/* <StatusBar style='auto'/> */}
                </View>

                {/* digits Section */}
                <View style={styles.digitbtn_container}>
                    <View style={styles.digits}>
                        <TouchableOpacity onPress={() => AccessValue('7')} style={styles.singleDigit}>
                            <Text>7</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => AccessValue('8')} style={styles.singleDigit}>
                            <Text>8</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => AccessValue('9')} style={styles.singleDigit}>
                            <Text>9</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => AccessValue('0')} style={styles.singleDigit}>
                            <Text>0</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.digits}>

                        <TouchableOpacity onPress={() => AccessValue('4')} style={styles.singleDigit}>
                            <Text>4</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => AccessValue('5')} style={styles.singleDigit}>
                            <Text>5</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => AccessValue('6')} style={styles.singleDigit}>
                            <Text>6</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => AccessValue('.')} style={styles.singleDigit}>
                            <Text>.</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.digits}>

                        <TouchableOpacity onPress={() => AccessValue('1')} style={styles.singleDigit}>
                            <Text>1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => AccessValue('2')} style={styles.singleDigit}>
                            <Text>2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => AccessValue('3')} style={styles.singleDigit}>
                            <Text>3</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => AccessValue('/')} style={styles.singleDigit}>
                            <Text>/</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.digits}>

                        <TouchableOpacity onPress={() => AccessValue('+')} style={styles.singleDigit}>
                            <Text>+</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => AccessValue('-')} style={styles.singleDigit}>
                            <Text>-</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => AccessValue('*')} style={styles.singleDigit}>
                            <Text>x</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => AccessValue('%')} style={styles.singleDigit}>
                            <Text>%</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* Submit button */}
                <TouchableOpacity
                    onPress={Submit}
                    activeOpacity={0.5}
                    style={[styles.submitbtn, { backgroundColor: submit_btnBgColor }, { borderColor: submit_btnTextColor }]}>
                    <Text style={[styles.submittxt,{ color: submit_btnTextColor }]}>=</Text>
                </TouchableOpacity>


            </View>
        </>
    )
}
const styles = StyleSheet.create({
    hometext: {
        color: 'black',
        fontWeight: 'bold',
        marginTop: 5,
    },
    displayText: {
        borderColor: 'black',
        borderWidth: 1,
        marginLeft: 50,
        width: 200,
        padding: 5,
        marginTop: 40,
        borderRadius: 5,
    },
    Container: {
        flex: 0,
        flexDirection: 'row',
    },
    submitbtn: {
        marginTop: 5,
        // Below two codes is work as a same 
        // paddingHorizontal:20,
        // paddingStart:20,
        alignItems: 'center',
        marginLeft: 40,
        marginRight: 40,
        // paddingVertical: 15,
        padding: 8,
        borderColor: 'gray',
        borderRadius: 5,
        borderWidth: 1,
        // backgroundColor:{cal_value},
    },
    submittxt:{
        fontWeight:'bold',
        fontSize: 20
    },
    digitbtn_container: {
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 30

    },
    digits: {
        padding: 12,

    },
    singleDigit: {
        marginTop: 10,
        borderWidth: 1,
        borderColor: 'lightgray',
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderRadius: 5
    },
    clearbtn:{
        borderWidth:1,
        borderColor:'white',
        width:50,
        marginTop:40,
        marginLeft:10,
        padding:7,
        alignItems:'center',
        borderRadius:5,
        backgroundColor:'red',
    },
    cleartxt:{
        color:'white'
    }
});
