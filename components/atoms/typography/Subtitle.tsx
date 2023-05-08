import { StyleSheet, Text, TextStyle, View } from "react-native";
import Colors from "../../../theme/Colors";
import Fonts from "../../../theme/Fonts";

type Props = {
    children: React.ReactNode;
    color?: string;
    size?: "xl" | "lg" | "md" | "sm";
    bold?: boolean;
    semibold?: boolean;
    align?: "auto" | "left" | "right" | "center" | "justify";
    transform?: "none" | "capitalize" | "uppercase" | "lowercase";
};

export default function Subtitle(props: Props) {
    const fontSizes = {
        xl: Fonts.size.font24,
        lg: Fonts.size.font18,
        md: Fonts.size.font16,
        sm: Fonts.size.font14,
    };

    const subtitleStyle: TextStyle = {
        fontSize: fontSizes[props.size ?? "md"],
        color: props.color ?? Colors.subtitleDefault,
        fontWeight: props.bold
            ? Fonts.weight.bold
            : props.semibold
            ? Fonts.weight.semibold
            : Fonts.weight.normal,
        textAlign: props.align,
        textTransform: props.transform,
    };

    return (
        <View>
            <Text style={subtitleStyle}>{props.children}</Text>
        </View>
    );
}
const styles = StyleSheet.create({});
