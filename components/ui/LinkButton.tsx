import {
    Pressable,
    StyleSheet,
    Text,
    TextStyle,
    View,
    ViewStyle,
} from "react-native";
import { Colors } from "../../utils/Colors";
type Props = {
    children: React.ReactNode;
    style?: ViewStyle | ViewStyle[];
    textStyle?: TextStyle | TextStyle[];
    size?: "lg" | "md" | "sm";
    onPress: () => void;
};

export default function LinkButton(props: Props) {
    return (
        <Pressable
            onPress={props.onPress}
            style={[styles.tabButtonContainer, props.style]}
        >
            <Text style={[props.textStyle]}>
                {props.children}
            </Text>
        </Pressable>
    );
}
const styles = StyleSheet.create({
    tabButtonContainer: {
        flex: 1,
    },
});
