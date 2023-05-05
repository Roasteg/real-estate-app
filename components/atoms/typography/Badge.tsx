import { StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";
import Colors from "../../../utils/Colors";
import { BadgeType } from "../../../types/Badge";

type Props = {
    children: React.ReactNode;
    type?: BadgeType;
    size?: "lg" | "md" | "sm";
};

type StyleObject = { [key: string]: { [key: string]: ViewStyle | TextStyle } };

const sizes: StyleObject = {
    lg: {
        badgeStyle: {
            padding: 18,
        },
        textStyle: {
            fontSize: 20,
        },
    },
    md: {
        badgeStyle: {
            padding: 14,
        },
        textStyle: {
            fontSize: 16,
        },
    },
    sm: {
        badgeStyle: {
            padding: 8,
        },
        textStyle: {
            fontSize: 10,
        },
    },
};

const types: StyleObject = {
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

export default function Badge(props: Props) {
    return (
        <View
            style={[
                styles.rootContainer,
                types[props.type ?? "primary"].badgeStyle,
                sizes[props.size ?? "md"].badgeStyle,
            ]}
        >
            <Text
                style={[
                    styles.badgeText,
                    types[props.type ?? "primary"].textStyle,
                    sizes[props.size ?? "md"].textStyle,
                ]}
            >
                {props.children}
            </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    rootContainer: {
        borderRadius: 10,
    },
    badgeText: {
        fontWeight: "500",
    },
});
