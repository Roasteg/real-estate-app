import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import IconBadge from "../atoms/typography/IconBadge";
import Fonts from "../../theme/Fonts";

type Props = {
    icon?: keyof typeof Ionicons.glyphMap;
    value: string;
};

export default function ConvenienceItem(props: Props) {
    return (
        <View style={styles.rootContainer}>
            {props.icon && <IconBadge size="sm" icon={props.icon} />}
            <Text style={styles.convenienceText}>{props.value}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    rootContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    convenienceText: {
        fontWeight: Fonts.weight.thin,
        marginLeft: 6,
    },
});
