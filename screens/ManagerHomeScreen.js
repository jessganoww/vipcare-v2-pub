import React from "react";
import {StyleSheet, Text, View} from "react-native";

const ManagerHomeScreen = () => {
    return (
        <View style={styles.mainContainer}>
            <Text>This is Manager Home Screen.</Text>
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
export default ManagerHomeScreen