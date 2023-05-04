import { StyleSheet, Text, Pressable, View, TextStyle, ViewStyle } from "react-native";
import { Colors } from "../../utils/Colors";

type Props = {
    children: React.ReactNode;
    onPress: () => void;
    bold?: boolean;
    color?: string;
    style?: ViewStyle | ViewStyle[];
};

export default function ActionButton(props: Props) {
    const actionButtonTextStyle: TextStyle = {
        fontSize: 16,
        fontWeight: props.bold ? "bold" : "400",
        color: Colors.textDefault,
        textTransform: "capitalize",
    };
    return (
        <Pressable
        onPress={props.onPress}
            style={({pressed}) => [
                styles.rootContainer,
                props.style,
                {
                    backgroundColor: props.color ?? Colors.primary500,
                    opacity: pressed ? 0.7 : 1,
                },
            ]}
        >
            <Text style={actionButtonTextStyle}>{props.children}</Text>
        </Pressable>
    );
}
const styles = StyleSheet.create({
    rootContainer: {
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
    },
});
