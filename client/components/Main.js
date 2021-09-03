import React from 'react'
import { StyleSheet, Button, View, TextInput, ImageBackground, Text } from 'react-native'

import image from '../assets/img/pexels-jose-vega-3801030.jpg'

import MyButton from './MyButton'

const Main = (props) => {
    const [username, onChangeUsername] = React.useState('')
    const [password, onChangePassword] = React.useState('')

    onRegister = () => {
        fetch('https://native-register-server.herokuapp.com/save-user', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
        })
        .then(res => res.json())
        .then(res => {
            onChangeUsername('')
            onChangePassword('')

            if(res != "User exists") props.navigation.navigate("Users", {data: res})
            else Alert.alert(
                "Warning",
                "User exists",
                [
                  { text: "OK" }
                ],
                { cancelable: false }
              )
        })
        .catch(err => console.log(err))
    }

    return(
        <View style={styles.mainContainer}>
            <ImageBackground source={image} style={styles.image}>
                <View style={styles.textContainer}>
                    <Text style={styles.registerText}>
                        Register
                    </Text>
                </View>
                <View style={styles.inputsContainer}>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={text => onChangeUsername(text)}
                        value={username}
                        placeholder="Username"
                        placeholderTextColor="#d8f3dc"
                    />
                    <TextInput
                        style={styles.textInput}
                        onChangeText={text => onChangePassword(text)}
                        value={password}
                        placeholder="Password"
                        placeholderTextColor="#d8f3dc"
                        secureTextEntry={true}
                    />
                    <MyButton textStyle={styles.buttonTextStyle} callback={onRegister} boxStyle={styles.buttonBoxStyle}>
                        CONTINUE
                    </MyButton>
                </View>
                <View style={{flex: 1}}></View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    textContainer:{
        flex:2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    registerText:{
        fontSize: 55,
        color: '#74c69d'
    },
    inputsContainer:{
        flex:2.5,
        alignItems: 'center',
    },
    textInput: {
        height: 40,
        width: 250, 
        borderBottomColor: '#2d6a4f',
        borderBottomWidth: 3,
        color: '#d8f3dc',
        fontSize: 20,
        margin: 30
    },
    buttonBoxStyle: {
        backgroundColor: '#2d6a4f',
        borderRadius: 3,
        padding: 10,
        marginTop: 15
    },
    buttonTextStyle: {
        color: '#d8f3dc'
    }
  });

export default Main