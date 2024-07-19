import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { useTheme } from "react-native-paper";

import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import ManagerHomeScreen from "./ManagerHomeScreen";
import CaregiverStack from "./CaregiverStack";
import ResidentStack from "./ResidentStack";

const Tab = createBottomTabNavigator()

const ManagerTabMain = ({navigation}) => {
    const theme = useTheme()

    return (
        <Tab.Navigator screenOptions={{headerShown: false, tabBarStyle: {backgroundColor: theme.colors.surface}}}>
            <Tab.Screen
                name="Home"
                component={ManagerHomeScreen}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="home-sharp" color={color} size={size} />
                    ),
                    tabBarActiveTintColor: theme.colors.primary,
                    headerTintColor: theme.colors.surface
                }}
            />
            <Tab.Screen
                name="Caregiver"
                component={CaregiverStack}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="doctor" color={color} size={size}/>
                    ),
                    tabBarActiveTintColor: theme.colors.primary
                }}
            />
            <Tab.Screen
                name="Resident"
                component={ResidentStack}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="people-sharp" color={color} size={size}/>
                    ),
                    tabBarActiveTintColor: theme.colors.primary,
                    headerStyle: {
                        backgroundColor: "black"
                    }
                }}
            />
        </Tab.Navigator>
    )
}

export default ManagerTabMain