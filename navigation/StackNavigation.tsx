import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackRoutes } from "./routes/StackRoutes";
import DrawerNavigation from "./DrawerNavigation";
import StartPage from "../components/pages/StartPage";
import EstateOverviewPage from "../components/pages/EstateOverviewPage";
import LoginPage from "../components/pages/LoginPage";

const Stack = createNativeStackNavigator<StackRoutes>();

export default function StackNavigation() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false, gestureEnabled: true }}
        >
            <Stack.Screen name="Start" component={StartPage} />
            <Stack.Screen name="Login" component={LoginPage} />
            <Stack.Screen
                name="Main"
                component={DrawerNavigation}
                options={{
                    gestureEnabled: false,
                }}
            />
            <Stack.Screen
                name="Overview"
                component={EstateOverviewPage}
                options={{ contentStyle: { backgroundColor: "white" } }}
            />
        </Stack.Navigator>
    );
}
const styles = StyleSheet.create({});
