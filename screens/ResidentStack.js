import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "react-native-paper";

import ResidentListScreen from "./ResidentListScreen";
import ResidentItemScreen from "./ResidentItemScreen";
import AddResidentScreen from "./AddResidentScreen";

const Stack = createNativeStackNavigator()

const ResidentStack = () => {
    const theme = useTheme()

    return (
        <Stack.Navigator initialRouteName="ResidentList" screenOptions={{headerBackTitleVisible: false}}>
            <Stack.Screen
                name="ResidentList"
                component={ResidentListScreen}
                options={{
                    title:"Residents",
                    headerStyle: {
                        backgroundColor: theme.colors.surface
                    },
                    headerTintColor: theme.colors.onSurfaceVariant
                }}
                 />
            <Stack.Screen
                name="ResidentItem"
                component={ResidentItemScreen}
                options={{
                    title:"View",
                    headerStyle: {
                        backgroundColor: theme.colors.surface
                    },
                    headerTintColor: theme.colors.onSurfaceVariant
                }}
            />
            <Stack.Screen
                name="AddResident"
                component={AddResidentScreen}
                options={{
                    title:"Add Resident",
                    headerStyle: {
                        backgroundColor: theme.colors.surface
                    },
                    headerTintColor: theme.colors.onSurfaceVariant
                }}
            />
        </Stack.Navigator>
    )
}
export default ResidentStack