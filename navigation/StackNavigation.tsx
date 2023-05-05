import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackRoutes } from "./routes/StackRoutes";
import DrawerNavigation from "./DrawerNavigation";
import StartPage from "../components/pages/StartPage";

const Stack = createNativeStackNavigator<StackRoutes>();

export default function StackNavigation() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false, gestureEnabled: true }}
        >
            <Stack.Screen name="Start" component={StartPage} />
            <Stack.Screen
                name="Main"
                component={DrawerNavigation}
                options={{
                    gestureEnabled: false,
                }}
            />
        </Stack.Navigator>
    );
}
const styles = StyleSheet.create({});
