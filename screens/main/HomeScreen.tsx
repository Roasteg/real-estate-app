import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Title from "../../components/ui/Title";
import EstateFinder from "../../components/main/EstateFinder";
import Subtitle from "../../components/ui/Subtitle";
import LinkButton from "../../components/ui/LinkButton";
import { Colors } from "../../utils/Colors";
import { Ionicons } from "@expo/vector-icons";
import Card from "../../components/ui/Card";
import PopularEstates from "../../components/main/PopularEstates";

export default function HomeScreen() {
    return (
        <View style={styles.rootContainer}>
            <View style={styles.titleContainer}>
                <Title color="black" size="xs" bold>
                    Get the best deals on your dream home today
                </Title>
            </View>
            <View style={styles.estateFinderContainer}>
                <EstateFinder />
            </View>
            <View style={styles.popularEstatesContainer}>
                <View style={styles.popularEstatesTitleAndButtonContainer}>
                    <View>
                        <Subtitle bold color="black">
                            Popular
                        </Subtitle>
                    </View>
                    <View>
                        <LinkButton
                            onPress={() => {}}
                            textStyle={{ color: Colors.primary500 }}
                            iconRight="chevron-forward"
                            iconRightStyle={{ color: Colors.primary500 }}
                        >
                            See all
                        </LinkButton>
                    </View>
                </View>
                <SafeAreaView style={styles.popularEstatesListContainer}>
                    <View style={[styles.popularEstateContainer, {marginRight: 6}]}>
                        <Card />
                    </View>
                    <View style={styles.popularEstateContainer}>
                        <Card />
                    </View>
                </SafeAreaView>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 18,
    },
    titleContainer: {
        flex: 1,
    },
    estateFinderContainer: {
        flex: 3,
        marginBottom: 36,
    },
    popularEstatesContainer: {
        flex: 4,
    },
    popularEstatesTitleAndButtonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 12
    },
    popularEstatesListContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    popularEstateContainer: {
        flex: 1,
    }
});
