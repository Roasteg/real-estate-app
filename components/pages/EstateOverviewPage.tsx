import EstateOverviewTemplate from "../templates/EstateOverviewTemplate";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
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
