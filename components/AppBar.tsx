import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { DrawerRoutes } from "../navigation/routes/DrawerRoutes";
import { useNavigation } from "@react-navigation/native";

type NavigationProp = DrawerNavigationProp<DrawerRoutes, "Home">;

export default function AppBar() {
    const navigation = useNavigation<NavigationProp>();

    return (
        <SafeAreaView style={styles.rootContainer}>
            <View style={styles.appBarContainer}>
                <Pressable
                    style={styles.menuButton}
                    onPress={() => {
                        navigation.openDrawer();
                    }}
                >
                    <Ionicons name="menu" size={36} />
                </Pressable>
                <View style={styles.userContainer}>
                    <Text>User</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    rootContainer: {},
    appBarContainer: {
        paddingHorizontal: 12,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    menuButton: {},
    userContainer: {},
});
