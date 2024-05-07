import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Platform,
    StatusBar,
} from "react-native";

const isAndroid = Platform.OS === "android";

export default function App() {
    return (
        <>
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.searchBox}>
                    <Text style={styles.text}>search</Text>
                </View>
                <View style={styles.list}>
                    <Text style={styles.text}>list</Text>
                </View>
            </SafeAreaView>
            <ExpoStatusBar style="auto" />
        </>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        marginTop: isAndroid ? StatusBar.currentHeight : 0,
    },
    searchBox: {
        backgroundColor: "green",
        padding: 16,
        justifyContent: "center",
    },
    list: {
        backgroundColor: "blue",
        flex: 1,
        padding: 16,
    },
    text: {
        color: "white",
    },
});
