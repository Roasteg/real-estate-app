import {
    StyleSheet,
    TextInput,
    TextStyle,
    View,
    ViewStyle,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../../theme/Colors";

type Props = {
    icon: keyof typeof Ionicons.glyphMap;
    iconColor: string;
    iconSize: number;
    value?: string;
    editable?: boolean;
    style?: ViewStyle;
    textStyle?: TextStyle;
    backgroundColor?: string;
    hideText?: boolean;
};

export default function IconInput(props: Props) {
    return (
        <View
            style={[
                styles.rootContainer,
                props.style,
                { backgroundColor: props.backgroundColor ?? Colors.grey300 },
            ]}
        >
            <Ionicons
                style={styles.inputIcon}
                name={props.icon}
                color={props.iconColor}
                size={props.iconSize}
            />
            <TextInput
                style={[styles.input, props.textStyle]}
                editable={props.editable}
                value={props.value}
                secureTextEntry={props.hideText}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    rootContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    input: {
        width: "100%",
    },
    inputIcon: {
        marginHorizontal: 8,
    },
});
