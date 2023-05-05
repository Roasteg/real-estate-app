import { StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";
import Colors from "../../../utils/Colors";
import { BadgeType } from "../../../types/Badge";

type Props = {
    children: React.ReactNode;
    type?: BadgeType;
};

export default function Badge(props: Props) {
    const types: { [key: string]: { [key: string]: ViewStyle | TextStyle } } = {
        primary: {
            badgeStyle: {
                backgroundColor: Colors.primary300,
            },
            textStyle: {
                color: Colors.primary500,
            },
        },
        rent: {
            badgeStyle: {
                backgroundColor: Colors.orange300,
            },
            textStyle: {
                color: Colors.orange500,
            },
        },
        buy: {
            badgeStyle: {
                backgroundColor: Colors.green300,
            },
            textStyle: {
                color: Colors.green500,
            },
        },
    };

    return (
        <View
            style={[
                styles.rootContainer,
                types[props.type ?? "primary"].badgeStyle,
            ]}
        >
            <Text
                style={[
                    styles.badgeText,
                    types[props.type ?? "primary"].textStyle,
                ]}
            >
                {props.children}
            </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    rootContainer: {
        padding: 8,
        borderRadius: 10,
    },
    badgeText: {
        fontSize: 10,
        fontWeight: "500",
    },
});
