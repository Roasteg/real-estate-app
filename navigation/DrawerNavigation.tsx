import { StyleSheet } from "react-native";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerRoutes } from "./routes/DrawerRoutes";
import AppBar from "../components/organisms/AppBar";
import HomePage from "../components/pages/HomePage";

const Drawer = createDrawerNavigator<DrawerRoutes>();

export default function DrawerNavigation() {
    return (
        <Drawer.Navigator
            screenOptions={{
                sceneContainerStyle: { backgroundColor: "#ffffff" },
                header: () => <AppBar />,
            }}
        >
            <Drawer.Screen name="Home" component={HomePage} />
        </Drawer.Navigator>
    );
}
const styles = StyleSheet.create({});
