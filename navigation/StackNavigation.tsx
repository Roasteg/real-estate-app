import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackRoutes } from "./routes/StackRoutes";
import StartScreen from "../screens/start/StartScreen";
import HomeScreen from "../screens/main/HomeScreen";

const Stack = createNativeStackNavigator<StackRoutes>();

export default function StackNavigation() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false, gestureEnabled: true }}
        >
            <Stack.Screen name="Start" component={StartScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    );
}
const styles = StyleSheet.create({});
