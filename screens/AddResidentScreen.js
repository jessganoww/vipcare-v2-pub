import React, { useState } from "react";
import { View, StyleSheet, KeyboardAvoidingView } from "react-native";
import { Button, TextInput, Text, useTheme } from "react-native-paper";
import { PaperSelect } from "react-native-paper-select";
import { useForm, Controller } from "react-hook-form";

import { collection, addDoc } from "firebase/firestore"
import { db } from "../firebase"

import ImageUpload from '../components/ImageUpload';

const AddResidentScreen = ({navigation}) => {
    // const [firstName, setFirstName] = useState("")
    // const [lastName, setLastName] = useState("")
    // const [nickname, setNickname] = useState("")

    const theme = useTheme()

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            nickname: '',
            roomNum: '',
            gender: '',

        }
    });

    const saveHandler = async (data) => {
        try {
            await addDoc(collection(db, "residents"), {
                firstName: data.firstName,
                lastName: data.lastName,
                nickname: data.nickname,
                room: data.room
            });
            alert("Successfully added!") // pop-up from top, then slight delay to navigation
            navigation.navigate("ResidentList")
        } catch (e) {
            console.error("Error adding document: ", e); // how to handle error on app
        }
    }

    return (
        <KeyboardAvoidingView style={styles.mainContainer}>
            <ImageUpload/>
            <View style={styles.inputContainer}>
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, value } }) => (
                        <TextInput
                            mode="outlined"
                            placeholder="First Name"
                            onChangeText={onChange}
                            value={value}
                            style={{ height: 40, fontSize: 14, justifyContent: "center"}}
                            outlineStyle={{borderColor: "#ebebeb", borderRadius: 7}}
                        />
                    )}
                    name="firstName"
                />
                {/*{errors.firstName && <Text>This is required.</Text>}*/}

                <Controller
                    control={control}
                    // rules={{
                    //     required: true,
                    // }}
                    render={({ field: { onChange, value } }) => (
                        <TextInput
                            mode="outlined"
                            placeholder="Last Name"
                            onChangeText={onChange}
                            value={value}
                            style={{height: 40, fontSize: 14, justifyContent: "center"}}
                            outlineStyle={{borderColor: "#ebebeb", borderRadius: 7}}
                        />
                    )}
                    name="lastName"
                />

                <View style={styles.twoColContainer}>
                    <View style={styles.twoColInputContainer}>
                        <Controller
                            control={control}
                            // rules={{
                            //     required: true,
                            // }}
                            render={({ field: { onChange, value } }) => (
                                <TextInput
                                    mode="outlined"
                                    placeholder="Nickname"
                                    onChangeText={onChange}
                                    value={value}
                                    style={{height: 40, fontSize: 14, justifyContent: "center"}}
                                    outlineStyle={{borderColor: "#ebebeb", borderRadius: 7}}
                                />
                            )}
                            name="nickname"
                        />

                    </View>

                    <View style={styles.twoColInputContainer}>
                        <Controller
                            control={control}
                            // rules={{
                            //     required: true,
                            // }}
                            render={({ field: { onChange, value } }) => (
                                <TextInput
                                    mode="outlined"
                                    placeholder="Room #"
                                    onChangeText={onChange}
                                    value={value}
                                    style={{height: 40, fontSize: 14, justifyContent: "center"}}
                                    outlineStyle={{borderColor: "#ebebeb", borderRadius: 7}}
                                />
                            )}
                            name="room"
                        />
                    </View>
                </View>

                {/*<TextInput*/}
                {/*    mode="outlined"*/}
                {/*    label="First Name"*/}
                {/*    value={firstName}*/}
                {/*    onChangeText={(text) => setFirstName(text)}*/}
                {/*/>*/}
                {/*<TextInput*/}
                {/*    mode="outlined"*/}
                {/*    label="Last Name"*/}
                {/*/>*/}
                {/*<View style={styles.twoColContainer}>*/}
                {/*    <View style={styles.twoColInputContainer}>*/}
                {/*        <TextInput*/}
                {/*            mode="outlined"*/}
                {/*            label="Nickname"*/}
                {/*        />*/}
                {/*    </View>*/}
                {/*    <View style={styles.twoColInputContainer}>*/}
                {/*        <TextInput*/}
                {/*            mode="outlined"*/}
                {/*            label="Room number"*/}
                {/*        />*/}
                {/*    </View>*/}
                {/*</View>*/}
                <Text variant="bodyMedium" style={{fontWeight: "600", color: theme.colors.primary, marginTop: 18}}>Background</Text>
                <TextInput
                    multiline="True"
                    mode="outlined"
                    placeholder=""
                    // onChangeText={onChange}
                    // value={value}
                    style={{height: 65, fontSize: 14, justifyContent: "center"}}
                    outlineStyle={{borderColor: "#ebebeb", borderRadius: 7}}
                />

            </View>


            <Button mode="contained" onPress={handleSubmit(saveHandler)}>Save</Button>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        width: "100%",
        padding: 30,
        backgroundColor: "#f7fcff"
        // alignItems: "center",
        // justifyContent: "center",
    },
    inputContainer: {
        marginBottom: 15
    },
    twoColContainer: {
        flexDirection: "row",
        columnGap: 10,
        margin: 0
    },
    twoColInputContainer: {
        flex: 1
    }
})

export default AddResidentScreen