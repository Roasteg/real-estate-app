import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
const { width } = Dimensions.get("window");

export default function SlideItem() {
    return (
        <View style={styles.rootContainer}>
            <Image
                source={require("../../../assets/estates/apartment-1.jpg")}
                resizeMode="cover"
                style={{ width: "100%", height: "100%" }}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    rootContainer: {
        width: width,
        alignItems: "center",
    },
});
