import React, { useState } from 'react'
import { StyleSheet, Button, View, FlatList, ImageBackground } from 'react-native'

import ListItem from './ListItem'
import MyButton from './MyButton'

import image from '../assets/img/pexels-jose-vega-3801030.jpg'

const Users = props => {
    const [data, onSetData] = useState(props.route.params.data)

    const onDeleteElems = id => {
        fetch('https://native-register-server.herokuapp.com/delete-user', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: id
        })
        })
        .then(res => res.json())
        .then(res => onSetData(res))
        .catch(err => console.log(err))
    }

    return(
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <View style={styles.textContainer}>
                    <MyButton textStyle={styles.buttonTextStyle} callback={() => props.navigation.navigate("Main")} boxStyle={styles.buttonBoxStyle}>Back to register</MyButton>
                </View>
                <View style={styles.listContainer}>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => <ListItem data={item} onDelete={onDeleteElems} navigation={props.navigation}/>}
                        keyExtractor={item => item.id.toString()}
                    />
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1985a1',
    },
    image: {
        flex: 1,
        resizeMode: 'cover'
    },
    buttonBoxStyle: {
        backgroundColor: '#2d6a4f',
        borderRadius: 3,
        padding: 7,
        marginTop: 15
    },
    textContainer: {
        flex: 1.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    listContainer : {
        flex: 7
    },
    buttonTextStyle: {
        color: '#d8f3dc'
    }
  });

export default Users