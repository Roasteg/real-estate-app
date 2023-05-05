import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {DrawerNavigationProp} from "@react-navigation/drawer"
import { DrawerRoutes } from "../../navigation/routes/DrawerRoutes";
import { useNavigation } from "@react-navigation/native";

type NavigationProp = DrawerNavigationProp<DrawerRoutes, "Home">;

export default function AppBar() {
  const navigation = useNavigation<NavigationProp>();

    return (
        <View style={styles.rootContainer}>
            <Pressable style={styles.menuButton} onPress={() => {
              navigation.openDrawer();
            }}>
                <Ionicons name="menu" size={36} />
            </Pressable>
            <View style={styles.userContainer}>
                <Text>User</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    rootContainer: {
        paddingTop: 54,
        padding: 12,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    menuButton: {
    },
    userContainer: {
    }
});
