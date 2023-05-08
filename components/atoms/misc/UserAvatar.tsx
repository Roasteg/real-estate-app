import { Image, StyleSheet, Text, View } from "react-native";

type Props = {
    avatarIcon?: string;
};

export default function UserAvatar(props: Props) {
    return (
        <View style={styles.rootContainer}>
            {props.avatarIcon && <Image source={{ uri: props.avatarIcon }} resizeMode="cover" style={{width: "100%", height: "100%", borderRadius: 40}}/>}
        </View>
    );
}
const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
    },
});
