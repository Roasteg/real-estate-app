import { StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";
import { BadgeType } from "../../../types/Badge";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../../theme/Colors";
import Fonts from "../../../theme/Fonts";
type Props = {
    icon: keyof typeof Ionicons.glyphMap;
    type?: BadgeType;
    size?: "lg" | "md" | "sm";
};

type StyleObject = { [key: string]: { [key: string]: ViewStyle | TextStyle } };

const sizes: StyleObject = {
    lg: {
        badgeStyle: {
            padding: 12,
        },
        iconStyle: {
            fontSize: Fonts.size.font26,
        },
    },
    md: {
        badgeStyle: {
            padding: 10,
        },
        iconStyle: {
            fontSize: Fonts.size.font22,
        },
    },
    sm: {
        badgeStyle: {
            padding: 8,
        },
        iconStyle: {
            fontSize: Fonts.size.font14,
        },
    },
};

const types: StyleObject = {
    primary: {
        badgeStyle: {
            backgroundColor: Colors.primary300,
        },
        iconStyle: {
            color: Colors.primary500,
        },
    },
    rent: {
        badgeStyle: {
            backgroundColor: Colors.orange300,
        },
        iconStyle: {
            color: Colors.orange500,
        },
    },
    buy: {
        badgeStyle: {
            backgroundColor: Colors.green300,
        },
        iconStyle: {
            color: Colors.green500,
        },
    },
};
export default function IconBadge(props: Props) {
    return (
        <View
            style={[
                styles.rootContainer,
                types[props.type ?? "primary"].badgeStyle,
                sizes[props.size ?? "md"].badgeStyle,
            ]}
        >
            <Ionicons
                name={props.icon}
                style={[
                    types[props.type ?? "primary"].iconStyle,
                    sizes[props.size ?? "md"].iconStyle,
                ]}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    rootContainer: {
        borderRadius: 10,
    },
    badgeText: {
        fontWeight: Fonts.weight.semibold,
    },
});
