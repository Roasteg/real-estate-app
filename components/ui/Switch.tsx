import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
    items: [string, string] | undefined;
    activeColor?: string;
};

export default function Switch(props: Props) {
    const [active, setActive] = useState<number>(0);

    return <View></View>;
}
const styles = StyleSheet.create({});
