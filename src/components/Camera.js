import React, {useEffect, useState} from 'react'
import { View, StyleSheet, Alert, TouchableOpacity, Text } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'
import { Camera as ExpoCamera } from 'expo-camera'

const Camera = ({onCloseCamera, onTakePicture}) => {

    const [hasPermission, setHasPermission] = useState(null)
    const [type, setType] = useState(ExpoCamera.Constants.Type.back);
    const [camera, setCamera] = useState();

    useEffect(() => {
        (async () =>{
            const { status } = await ExpoCamera.requestPermissionsAsync();
            setHasPermission(status === "grated");
        })();
    }, []);
    const onFlipPress = () => {
        setType(
            type === ExpoCamera.Constants.Type.back ? ExpoCamera.Constants.Type.front : ExpoCamera.Constants.Type.back
        )
    }

    const onTakePicturePress = async () => {
        try {
            const {uri} = await camera.takePictureAsync({
                quality: 0.5,
            });
            onTakePicture(uri)

        } catch(e){
            Alert.alert("Erro", "Houve um erro ao tirar uma foto.")
        }
    }

    return (
        <ExpoCamera 
            style={{flex: 1}}
            type={type}
            ref={ref => setCamera(ref)}
        >
           <View style={styles.actionButtons} >
            <TouchableOpacity onPress={onFlipPress} >
                <Text style={styles.flipText} >Flip</Text>
            </TouchableOpacity>

            <Icon name="close" size={50} color="#FFF" onPress={onCloseCamera} />
           </View>

           <TouchableOpacity 
            style={styles.takePictureButton}
            onPress={onTakePicturePress} >
            <Icon name="photo-camera" size={50} color='#FFF' />
           </TouchableOpacity>
        </ExpoCamera>
    )
}

const styles = StyleSheet.create({
    actionButtons:{
        justifyContent: "space-between",
        flexDirection: 'row',
        marginTop: 5,
        marginRight: 5,
        marginLeft: 5,

    },
    flipText:{
        fontSize: 18,
        color: '#FFF',
    },
    takePictureButton:{
        flex: 1,
        justifyContent: "flex-end",
        alignItems :'center',
        marginBottom: 5,
    }
})

export default Camera;