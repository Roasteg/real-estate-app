import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../../../utils/Colors";

type Props = {
    items: string[];
    activeColor?: string;
    onChange?:(item: string) => void;
};

export default function ButtonSwitch(props: Props) {
    const [active, setActive] = useState<string>(props.items[0]);

    return (
        <View style={styles.rootContainer}>
            {props.items.map((item) => {
                return (
                    <Pressable
                        key={item}
                        style={[
                            styles.switchItem,
                            active === item ? styles.activeItem : {},
                        ]}
                        onPress={() => {
                            setActive(item);
                            props.onChange && props.onChange(item);
                        }}
                    >
                        <Text style={styles.itemText}>{item}</Text>
                    </Pressable>
                );
            })}
        </View>
    );
}
const styles = StyleSheet.create({
    rootContainer: {
        borderRadius: 12,
        padding: 6,
        backgroundColor: Colors.grey600,
        height: 60,
        flexDirection: "row",
    },
    switchItem: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    itemText: {
        fontWeight: "500",
    },
    activeItem: {
        backgroundColor: "#ffffff",
    },
});
