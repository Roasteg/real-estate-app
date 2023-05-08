import { DrawerScreenProps } from "@react-navigation/drawer";
import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { DrawerRoutes } from "../../navigation/routes/DrawerRoutes";
import { StackRoutes } from "../../navigation/routes/StackRoutes";
import HomeTemplate from "../templates/HomeTemplate";
type NavigationProps = CompositeScreenProps<
    DrawerScreenProps<DrawerRoutes, "Home">,
    NativeStackScreenProps<StackRoutes>
>;
export default function HomePage({ navigation }: NavigationProps) {
    return <HomeTemplate onPopularPress={() => {
        navigation.navigate("Overview", {
            estateId: 1
        })
    }} />;
}
