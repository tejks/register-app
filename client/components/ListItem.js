import React, { useState } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

import MyButton from './MyButton'

import image from '../assets/img/user.png'

const ListItem = props => {
    const {id, username, password} = props.data

    return(
        <View style={styles.container}>
            <Image style={styles.icon} source={image}/>
            <Text style={styles.text}>{id}:{username}:{password}</Text>
            <MyButton textStyle={styles.buttonTextStyle} callback={() => props.navigation.navigate("Details", {data: props.data})} boxStyle={styles.buttonBoxStyle}>Details</MyButton>
            <MyButton textStyle={styles.buttonTextStyle} callback={() => props.onDelete(id)} boxStyle={styles.buttonBoxStyle}>Delete</MyButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 10
    },
    icon: {
        width: 50,
        height: 50
    },
    text: {
        width: 160,
        padding: 15,
        color: '#d8f3dc'
    },
    buttonBoxStyle: {
        backgroundColor: '#2d6a4f',
        borderRadius: 3,
        padding: 7,
        marginTop: 15
    },
    buttonTextStyle: {
        color: '#d8f3dc'
    }
  });

export default ListItem