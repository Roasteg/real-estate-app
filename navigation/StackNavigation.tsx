import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackRoutes } from "./routes/StackRoutes";
import StartScreen from "../screens/start/StartScreen";
import HomeScreen from "../screens/main/HomeScreen";
import DrawerNavigation from "./DrawerNavigation";
import EstateOverview from "../screens/main/EstateOverview";

const Stack = createNativeStackNavigator<StackRoutes>();

export default function StackNavigation() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false, gestureEnabled: true }}
        >
            <Stack.Screen name="Start" component={StartScreen} />
            <Stack.Screen
                name="Main"
                component={DrawerNavigation}
                options={{
                    gestureEnabled: false,
                }}
            />
            <Stack.Screen name="Overview" component={EstateOverview} />
        </Stack.Navigator>
    );
}
const styles = StyleSheet.create({});
