import React, {useEffect, useState} from "react";
import { TextInput, Button, useTheme } from "react-native-paper"

import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase"

// ***********************

import {FlatList, SafeAreaView, StyleSheet, TouchableOpacity, View, Text} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import {Avatar} from "@rneui/themed";

const ResidentListScreen = ({navigation}) => {
    const theme = useTheme()

    const [residents, setResidents] = useState([])

    const fetchResidents = async () => {
        await getDocs(collection(db, "residents"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id: doc.id}));
                setResidents(newData)
                console.log(residents, newData)
            })
    }

    const renderItem = ({item}) => {
        return (
            <TouchableOpacity
                activeOpacity={1.0}
                onPress={() => {
                    navigation.navigate("ResidentItem", {residentData: item})
                }}>
                <View style={styles.residentItemComponent}>
                    <View style={styles.avatarContainer}>
                        <Avatar
                            size={75}
                            rounded
                            title={item.avatar}
                            containerStyle={{ backgroundColor: item.color }}
                            source={{
                                uri:
                                   item.photo,
                            }}
                        />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.room}>Room #{item.room}</Text>
                        <Text style={styles.name}>{item.firstName} {item.lastName}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    const addResidentHandler = () => {
        navigation.navigate("AddResident")
    }

    useEffect(() => {
        fetchResidents()
    }, [])

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <View style={styles.mainContainer}>
                <View style={styles.searchContainer}>
                    <Ionicons name={"search-outline"} style={styles.icon}/>
                    <TextInput
                        mode="outlined"
                        placeholder="Search resident"
                        style={styles.searchInput}
                        autoCapitalize={"none"}
                        outlineStyle={{borderColor: theme.colors.background, borderRadius: 8}}
                    />
                </View>

                <Button mode="contained" style={styles.button} onPress={addResidentHandler}>Add resident</Button>

                <FlatList
                    data={residents}
                    renderItem={renderItem}
                />

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        backgroundColor: "#f7fcff"
    },
    mainContainer: {
        paddingHorizontal: 20,
    },
    searchContainer: {
        alignItems: "center",
        flexDirection: "row",
    },
    searchInput: {
        flex: 1,
        alignSelf: "center",
        height: 35,
        fontSize: 14,
        paddingHorizontal: 18,
        marginVertical: 7,
    },
    icon: {
        position: "absolute",
        bottom: 16,
        left: 12,
        zIndex: 100,
        fontSize: 16,
        color: "#525657"
    },
    button: {
        marginBottom: 5,
    },
    residentItemComponent: {
        flexDirection: "row",
        // backgroundColor: "gainsboro",
        marginVertical: 5,
        alignItems: "center", // center vertically
        // justifyContent: "center" // center horizontally
    },
    avatarContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    textContainer: {
        flexDirection: "column"
    },
    room: {
        fontSize: 14,
        fontWeight: "400",
        marginLeft: 14,
        color: "#525657"
    },
    name: {
        fontSize: 20,
        fontWeight: "600",
        marginLeft: 14,
        color: "#525657"
    },
})

export default ResidentListScreen