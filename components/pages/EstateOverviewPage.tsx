import { StyleSheet, Text, View } from "react-native";
import EstateOverviewTemplate from "../templates/EstateOverviewTemplate";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { DrawerRoutes } from "../../navigation/routes/DrawerRoutes";
import { StackRoutes } from "../../navigation/routes/StackRoutes";

type NavigationProps = NativeStackScreenProps<StackRoutes, "Overview">;

export default function EstateOverviewPage({ navigation }: NavigationProps) {
    return (
        <EstateOverviewTemplate
            onBackButtonPress={() => {
                navigation.goBack();
            }}
        />
    );
}
