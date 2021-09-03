import React from 'react'
import { StyleSheet, View, Image, ImageBackground, Text } from 'react-native'

import logo from '../assets/img/user.png'
import image from '../assets/img/pexels-jose-vega-3801030.jpg'


const ListItem = props => {
    const { username, password, registered} = props.route.params.data

    return(
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <Image style={styles.icon} source={logo}/>
                <Text style={styles.text}>Username: {username}</Text>
                <Text style={styles.text}>Password: {password}</Text>
                <Text style={styles.text}>Registered: {registered}</Text>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        width: 150,
        height: 150
    },
    text: {
        padding: 15,
        color: '#d8f3dc',
        fontSize: 20
    }
  });

export default ListItem