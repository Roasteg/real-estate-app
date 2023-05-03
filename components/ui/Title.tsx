import { StyleSheet, Text, TextStyle, View } from "react-native";
import { Colors } from "../../utils/Colors";

type Props = {
    children: React.ReactNode;
    size?: "xl" | "lg" | "md" | "sm" | "xs";
    color?: string;
    bold?: boolean;
    align?: "auto" | "left" | "right" | "center" | "justify";
    transform?: "none" | "capitalize" | "uppercase" | "lowercase";
};

export default function Title(props: Props) {
    const fontSizes = {
        xl: 72,
        lg: 60,
        md: 48,
        sm: 42,
        xs: 26,
    };

    const titleStyle: TextStyle = {
        fontSize: fontSizes[props.size ?? "lg"],
        color: props.color ?? Colors.textDefault,
        fontWeight: props.bold ? "bold" : "400",
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
