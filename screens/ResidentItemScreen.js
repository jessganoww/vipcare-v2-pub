import React from "react";
import {StyleSheet, Text, View, useWindowDimensions, Pressable} from "react-native";
import {SceneMap, TabBar, TabView} from "react-native-tab-view";
import {Avatar} from "@rneui/themed";

const TasksScreen = () => {
    return (
        <View style={styles.tabScreen}>
            <View style={styles.taskContainer}>
                <Pressable style={styles.taskButton}><Text style={styles.taskButtonText}>Eating</Text></Pressable>
                <Pressable style={styles.taskButton}><Text style={styles.taskButtonText}>Sleeping</Text></Pressable>
            </View>
        </View>
    )
}
const InfoScreen = () => {
    return (
        <View style={styles.tabScreen}>
            <Text style={styles.h1Style}>Background</Text>
        </View>
    )
}
const renderScene = SceneMap({
    tasks: TasksScreen,
    info: InfoScreen
});
const renderTabBar = props => {
    return (
        <TabBar
            {...props}
            indicatorContainerStyle={{backgroundColor: "#F7F7F7"}}
            indicatorStyle={{backgroundColor: "dodgerblue"}}
            tabStyle={{minHeight: 10}}
            renderLabel={({route, focused, color}) => {
                return (
                    <Text style={{color: "black", margin: 0, fontWeight: "400", fontSize: 16}}>{route.title}</Text>
                )
            }}
        />
    )
}
const ResidentItemScreen = ({route}) => {
        const residentData = route.params.residentData

        const layout = useWindowDimensions()
        const [index, setIndex] = React.useState(0);
        const [routes] = React.useState([
            {key: 'tasks', title: 'Tasks'},
            {key: 'info', title: 'Info'},
        ]);
    return (
        <View style={styles.mainContainer}>
            <View style={styles.residentContainer}>
                <View style={styles.avatarContainer}>
                    <Avatar
                        size={75}
                        rounded
                        title={residentData.avatar}
                        containerStyle={{ backgroundColor: residentData.color }}
                        source={{
                            uri:
                            residentData.photo,
                        }}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.room}>Room #{residentData.room}</Text>
                    <Text style={styles.name}>{residentData.firstName} {residentData.lastName}</Text>
                </View>
            </View>

            <TabView
                navigationState={{index, routes}}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{width: layout.width}}
                renderTabBar={renderTabBar}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#F7F7F7"
    },
    residentContainer: {
        width: "90%",
        flexDirection: "row",
        marginHorizontal: 15,
        marginTop: 25,
        marginBottom: 15
    },
    avatarContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    textContainer: {
        flexDirection: "column"
    },
    room: {
        fontSize: 16,
        fontWeight: "400",
        marginLeft: 14
    },
    name: {
        fontSize: 24,
        fontWeight: "600",
        marginLeft: 14
    },
    tabScreen: {
        margin: 20,
    },
    h1Style: {
        fontSize: 16,
        fontWeight: "500",
    },
    taskContainer: {
        flexDirection: "row",
        justifyContent: "center"
    },
    taskButton: {
        backgroundColor: "dodgerblue",
        paddingHorizontal: 50,
        paddingVertical: 30,
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 3
    },
    taskButtonText: {
        color: "white",
        fontWeight: "500",
        fontSize: 18
    }
})

export default ResidentItemScreen