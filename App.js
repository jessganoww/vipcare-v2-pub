import React from "react";
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import LoginScreen from './screens/LoginScreen';
import ManagerTabMain from "./screens/ManagerTabMain";

const Stack = createNativeStackNavigator();

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        // primary: '#79d9d2',
        "primary": '#4790eb',
        // "background": "#d2d6d9",
        "background": "#daddde",
        "surface": "#f7fcff",
        "onSurfaceVariant": "#525657" // to change color of placeholder
    },
};

const App = () => {
    return (
        <PaperProvider theme={theme}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown: false}}>
                    <Stack.Screen name='Login' component={LoginScreen}/>
                    {/*<Stack.Screen name='Caregiver' component={CaregiverTabMain}/>*/}
                    <Stack.Screen name='Manager' component={ManagerTabMain} />
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    )
}

export default App