import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import CaregiverListScreen from "./CaregiverListScreen";

const Stack = createNativeStackNavigator()

const CaregiverStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerBackTitleVisible: false, headerTitle: ""}}>
            <Stack.Screen name="CaregiverList" component={CaregiverListScreen} />
        </Stack.Navigator>
    )
}

export default CaregiverStack