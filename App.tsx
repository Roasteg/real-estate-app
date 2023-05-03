import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./navigation/StackNavigation";
export default function App() {
    return (
        <View style={styles.rootContainer}>
            <StatusBar style="auto" />
            <NavigationContainer>
                <StackNavigation />
            </NavigationContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
    },
});
