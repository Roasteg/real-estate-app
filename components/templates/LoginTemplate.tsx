import {
    ActivityIndicator,
    ImageBackground,
    Keyboard,
    Pressable,
    StyleSheet,
    View,
} from "react-native";
import Colors from "../../theme/Colors";
import IconInput from "../atoms/inputs/IconInput";
import { LinearGradient } from "expo-linear-gradient";
import ActionButton from "../atoms/buttons/ActionButton";
import Fonts from "../../theme/Fonts";

type Props = {
    onLoginPress: () => void;
    loading?: boolean;
}

export default function LoginTemplate(props: Props) {
    return (
        <Pressable
            style={styles.rootContainer}
            onPress={() => Keyboard.dismiss()}
        >
            <ImageBackground
                style={{ flex: 1 }}
                resizeMode="cover"
                imageStyle={{ width: "100%", height: "100%", opacity: 0.2 }}
                source={require("../../assets/estates/apartment-outside.jpg")}
            >
                <LinearGradient
                    style={styles.formContainer}
                    colors={["transparent", Colors.gradientColor]}
                >
                    <View>
                        <IconInput
                            icon={"person"}
                            iconColor={"black"}
                            iconSize={24}
                            backgroundColor={Colors.grey300}
                            editable={false}
                            style={styles.inputContainer}
                            value="estate.enjoyer@gmail.com"
                            textStyle={{
                                fontSize: Fonts.size.font14,
                            }}
                        />
                    </View>
                    <View>
                        <IconInput
                            icon={"key"}
                            iconColor={"black"}
                            iconSize={24}
                            value="ilovehouses2023"
                            editable={false}
                            style={styles.inputContainer}
                            backgroundColor={Colors.grey300}
                            hideText
                        />
                    </View>

                    <ActionButton onPress={props.onLoginPress}>
                        {props.loading ? <ActivityIndicator /> : "Log in"}
                    </ActionButton>
                </LinearGradient>
            </ImageBackground>
        </Pressable>
    );
}
const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
    },
    formContainer: {
        flex: 1,
        justifyContent: "center",
        padding: 36,
    },
    inputContainer: {
        padding: 12,
        width: "100%",
        marginBottom: 24,
        borderRadius: 10,
    },
});
