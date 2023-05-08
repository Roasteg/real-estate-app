import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {DrawerNavigationProp} from "@react-navigation/drawer"
import { DrawerRoutes } from "../../navigation/routes/DrawerRoutes";
import { useNavigation } from "@react-navigation/native";
import UserAvatar from "../atoms/misc/UserAvatar";

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
            <Pressable style={styles.userContainer}>
                <UserAvatar avatarIcon="https://randomuser.me/api/portraits/men/96.jpg" />
            </Pressable>
        </View>
    );
}
const styles = StyleSheet.create({
    rootContainer: {
        paddingTop: 48,
        padding: 12,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    menuButton: {
    },
    userContainer: {
        width: 40,
    }
});
