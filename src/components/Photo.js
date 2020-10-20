import React from 'react'
import { View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'

const Photo = ({photo, ondeDeletePhoto, onClosePicture}) => {
    return (
        <ImageBackground source={{uri: photo} } style={styles.imagePreview} >
            <View style={styles.actionButtons} >
                <Icon name='delete' size={50} color='#FFF' onPress={() => {ondeDeletePhoto(null)}} />
                <Icon name="check" size={50} color="#FFF" onPress={onClosePicture } />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    imagePreview:{
        width: "100%",
        height: "100%",
    },
    actionButtons:{
        justifyContent: "space-between",
        flexDirection: 'row',
        marginRight: 5,
        marginLeft: 5,

    },
})

export default Photo;