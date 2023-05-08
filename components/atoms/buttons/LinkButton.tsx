import {
    Pressable,
    StyleSheet,
    Text,
    TextStyle,
    View,
    ViewStyle,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Fonts from "../../../theme/Fonts";
type Props = {
    children: React.ReactNode;
    style?: ViewStyle | ViewStyle[];
    textStyle?: TextStyle | TextStyle[];
    size?: "lg" | "md" | "sm";
    iconLeft?: keyof typeof Ionicons.glyphMap;
    iconLeftStyle?: TextStyle | TextStyle[];
    iconRight?: keyof typeof Ionicons.glyphMap;
    iconRightStyle?: TextStyle | TextStyle[];
    onPress: () => void;
};

export default function LinkButton(props: Props) {
    const sizes = {
        lg: Fonts.size.font18,
        md: Fonts.size.font16,
        sm: Fonts.size.font12,
    };

    return (
        <Pressable
            onPress={props.onPress}
            style={[styles.tabButtonContainer, props.style]}
        >
            <View style={styles.textAndIconContainer}>
                {props.iconLeft && (
                    <Ionicons
                        size={sizes[props.size ?? "md"]}
                        style={props.iconLeftStyle}
                        name={props.iconLeft}
                    />
                )}
                <Text style={[props.textStyle]}>{props.children}</Text>
                {props.iconRight && (
                    <Ionicons
                        size={sizes[props.size ?? "md"]}
                        style={props.iconRightStyle}
                        name={props.iconRight}
                    />
                )}
            </View>
        </Pressable>
    );
}
const styles = StyleSheet.create({
    tabButtonContainer: {
        flex: 1,
    },
    textAndIconContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
});
