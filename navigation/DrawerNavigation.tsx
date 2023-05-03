import { StyleSheet, Text, View } from "react-native";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerRoutes } from "./routes/DrawerRoutes";
import HomeScreen from "../screens/main/HomeScreen";
import AppBar from "../components/AppBar";

const Drawer = createDrawerNavigator<DrawerRoutes>();

export default function DrawerNavigation() {
    return (
        <Drawer.Navigator
            screenOptions={{
                sceneContainerStyle: { backgroundColor: "#ffffff" },
                header: () => <AppBar />,
            }}
        >
            <Drawer.Screen name="Home" component={HomeScreen} />
        </Drawer.Navigator>
    );
}
const styles = StyleSheet.create({});
