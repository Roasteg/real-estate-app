import { StyleSheet, Text, Pressable, TextStyle } from "react-native";
import  Colors from "../../../theme/Colors";
import Fonts from "../../../theme/Fonts";

type Props = {
    children: React.ReactNode;
    onPress: () => void;
    bold?: boolean;
    color?: string;
};

export default function ActionButton(props: Props) {
    const actionButtonTextStyle: TextStyle = {
        fontSize: Fonts.size.font16,
        fontWeight: props.bold ? Fonts.weight.bold : Fonts.weight.normal,
        color: Colors.textDefault,
        textTransform: "capitalize",
    };
    return (
        <Pressable
        onPress={props.onPress}
            style={({pressed}) => [
                styles.rootContainer,
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
        padding: 24,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
    },
});
