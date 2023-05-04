import { StyleSheet, Text, View, Image } from "react-native";
import Badge from "./Badge";
import Subtitle from "./Subtitle";
import { Ionicons } from "@expo/vector-icons";
export default function Card() {
    return (
        <View style={styles.rootContainer}>
            <View style={styles.headImageContainer}>
                <Image
                    resizeMode="cover"
                    style={{
                        width: "100%",
                        height: "100%",
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                    }}
                    source={require("../../assets/estates/apartment-1.jpg")}
                />
            </View>
            <View style={styles.badgesContainer}>
                <View style={styles.badgeContainer}>
                    <Badge>Apartment</Badge>
                </View>
                <View style={styles.badgeContainer}>
                    <Badge type="rent">Rent</Badge>
                </View>
            </View>
            <View style={styles.infoContainer}>
                <View style={styles.estateNameContainer}>
                    <Subtitle semibold size="lg" color="black">
                        Südalinna korter
                    </Subtitle>
                </View>
                <View style={styles.locationContainer}>
                    <Ionicons name="location" color="red" size={18}/>
                    <Subtitle size="sm">Tallinn, Estonia</Subtitle>
                </View>
                <View style={styles.priceContainer}>
                    <Subtitle semibold size="sm" color="black">€ 700</Subtitle>
                    <Subtitle>/ Month</Subtitle>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        height: 80,
        backgroundColor: "white",
        borderRadius: 10,
        shadowColor: "black",
        shadowOffset: { height: 1, width: 3 },
        shadowRadius: 10,
        shadowOpacity: 0.2,
    },
    headImageContainer: {
        flex: 4,
    },
    headImage: {},
    badgesContainer: {
        flex: 1.4,
        flexDirection: "row",
        alignItems: "center",
        marginTop: 8,
    },
    badgeContainer: {
        marginLeft: 8,
    },
    infoContainer: {
        flex: 3,
        padding: 8,
        justifyContent: "space-between"
    },
    estateNameContainer: {
        marginBottom: 4,
    },
    locationContainer: {
        marginBottom: 4,
        flexDirection: "row",
        alignItems: "center"
    },
    priceContainer: {
        flexDirection: "row",
        alignItems: "center"
    }
});
