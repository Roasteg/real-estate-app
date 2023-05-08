import { StyleSheet, Text, View, Image } from "react-native";
import Colors from "../../theme/Colors";
import IconButton from "../atoms/buttons/IconButton";
import Fonts from "../../theme/Fonts";

export default function EstateOwner() {
    return (
        <View style={styles.rootContainer}>
            <View style={styles.ownerPhotoAndNameContainer}>
                <View style={styles.ownerPhotoContainer}>
                    <Image
                        resizeMode="contain"
                        source={{
                            uri: "https://randomuser.me/api/portraits/men/96.jpg",
                        }}
                        style={{ width: "100%", height: "100%", borderRadius: 10 }}
                    />
                </View>
                <View style={styles.ownerNameContainer}>
                    <Text style={styles.ownerName}>Toomas</Text>
                </View>
            </View>
            <View>
                <IconButton size={18} color="white" rounded={10} onPress={() => {}} icon="call" />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    rootContainer: {
        backgroundColor: Colors.grey300,
        padding: 12,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    ownerPhotoAndNameContainer: {
      flexDirection: "row",
    },
    ownerPhotoContainer: {
      width: 50,
      height: 50
    },
    ownerNameContainer: {
      justifyContent: "center",
      marginLeft: 12,
    },
    ownerName: {
      fontWeight: Fonts.weight.semibold
    }
});
