import { Pressable, StyleSheet, Text, View, ViewStyle } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../../theme/Colors";

type Props = {
    icon: keyof typeof Ionicons.glyphMap;
    style?: ViewStyle;
    size?: number;
    color?: string;
    backgroundColor?: string;
    rounded?: number;
    onPress: () => void;
};

export default function IconButton(props: Props) {
    return (
        <Pressable
        onPress={props.onPress}
            style={({ pressed }) => [
                styles.rootContainer,
                {
                    backgroundColor: props.backgroundColor ?? Colors.primary500,
                    borderRadius: props.rounded,
                    opacity: pressed ? 0.8 : 1,
                },
            ]}
        >
            <Ionicons
                name={props.icon}
                size={props.size ?? 18}
                color={props.color ?? "black"}
            />
        </Pressable>
    );
}
const styles = StyleSheet.create({
    rootContainer: {
        padding: 12,
        alignItems: "center",
        justifyContent: "center",
    },
});
