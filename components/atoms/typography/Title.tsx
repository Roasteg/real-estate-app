import { StyleSheet, Text, TextStyle, View } from "react-native";
import Colors from "../../../theme/Colors";
import Fonts from "../../../theme/Fonts";

type Props = {
    children: React.ReactNode;
    size?: "xl" | "lg" | "md" | "sm" | "xs";
    color?: string;
    bold?: boolean;
    semibold?: boolean;
    align?: "auto" | "left" | "right" | "center" | "justify";
    transform?: "none" | "capitalize" | "uppercase" | "lowercase";
};

const fontSizes = {
    xl: Fonts.size.font72,
    lg: Fonts.size.font60,
    md: Fonts.size.font48,
    sm: Fonts.size.font42,
    xs: Fonts.size.font26,
};

export default function Title(props: Props) {
    const titleStyle: TextStyle = {
        fontSize: fontSizes[props.size ?? "lg"],
        color: props.color ?? Colors.textDefault,
        fontWeight: props.bold
            ? Fonts.weight.bold
            : props.semibold
            ? Fonts.weight.semibold
            : Fonts.weight.normal,
        textAlign: props.align,
        textTransform: props.transform,
    };

    return (
        <View style={styles.rootContainer}>
            <Text style={titleStyle}>{props.children}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    rootContainer: {},
});
