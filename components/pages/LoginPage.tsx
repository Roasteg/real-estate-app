import { NativeStackScreenProps } from "@react-navigation/native-stack";
import LoginTemplate from "../templates/LoginTemplate";
import { StackRoutes } from "../../navigation/routes/StackRoutes";
import { useState } from "react";

type NavigationProp = NativeStackScreenProps<StackRoutes, "Login">;

export default function LoginPage({ navigation }: NavigationProp) {
    const [loginLoading, setLoginLoading] = useState(false);
    return (
        <LoginTemplate
            loading={loginLoading}
            onLoginPress={() => {
                setLoginLoading(true);
                setTimeout(() => {
                    setLoginLoading(false);
                    navigation.navigate("Main", {
                        screen: "Home",
                    });
                }, 2000);
            }}
        />
    );
}
