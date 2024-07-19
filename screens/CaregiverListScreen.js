import React from "react";
import {StyleSheet, Text, View} from "react-native";

const CaregiverListScreen = () => {
    return (
        <View style={styles.mainContainer}>
            <Text>This is Caregiver List Screen.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F7F7F7"
    }
})

export default CaregiverListScreen