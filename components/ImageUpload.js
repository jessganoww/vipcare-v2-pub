import React, { useState, useEffect } from 'react';
import { Image, View, Platform, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { Button, useTheme } from "react-native-paper";

// https://www.waldo.com/blog/add-an-image-picker-react-native-app

export default function ImageUpload() {
    const theme = useTheme()

    const [image, setImage] = useState(null);
    const addImage=()=>{};
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Ionicons name="person-circle" size={162} color={theme.colors.background} style={{marginVertical: -21, marginHorizontal: -11}} />
            </View>
            {/*<TouchableOpacity onPress={addImage}>*/}
            {/*    <Text>{image ? 'Edit' : 'Upload'} image</Text>*/}
            {/*</TouchableOpacity>*/}
            <Button mode="text" onPress={addImage}>{image ? 'Edit' : 'Upload'} image</Button>

        </View>

        // <View style={styles.container}>
        //     {
        //         image  && <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />
        //     }
        //     {/*<View style={styles.uploadBtnContainer}>*/}
        //     {/*    <FontAwesome name="user-circle" size={150} color="gainsboro" />*/}
        //     {/*</View>*/}
        //     <FontAwesome name="user-circle" size={150} color="gainsboro" />
        //     <TouchableOpacity onPress={addImage} style={styles.upload}>
        //         <Text>{image ? 'Edit' : 'Upload'} Image</Text>
        //     </TouchableOpacity>
        // </View>
    );
}
const styles=StyleSheet.create({
    container: {
        // justifyContent: "center"
        alignItems: "center"
    },
    imageContainer: {
        height: 130,
        width: 130,
        borderRadius: 999,
        overflow: 'hidden',
        // backgroundColor: 'pink',
    }
    // container:{
    //     // elevation: 2,
    //     height: 150,
    //     width: 150,
    //     backgroundColor:'#ECECEC',
    //     position: 'relative',
    //     borderRadius: 999,
    //     overflow: 'hidden',
    // },
    // uploadBtnContainer:{
    //     opacity:0.7,
    //     position:'absolute',
    //     // right:0,
    //     // bottom:0,
    //     backgroundColor: 'snow',
    //     width:'100%'
    // },
    // upload:{
    //     display:'flex',
    //     alignItems:"center",
    //     justifyContent:'center'
    // }
})