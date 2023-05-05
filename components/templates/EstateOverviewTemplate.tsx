import { StyleSheet, Text, ScrollView, View } from "react-native";
import ImageCarousel from "../molecules/ImageCarousel";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import IconButton from "../atoms/buttons/IconButton";
import Colors from "../../utils/Colors";
import Badge from "../atoms/typography/Badge";
import Title from "../atoms/typography/Title";
import Subtitle from "../atoms/typography/Subtitle";
import IconBadge from "../atoms/typography/IconBadge";
import EstateOwner from "../molecules/EstateOwner";
import ConvenienceItem from "../molecules/ConvenienceItem";
import { LinearGradient } from "expo-linear-gradient";
export default function EstateOverviewTemplate() {
    return (
        <View style={styles.rootContainer}>
            <SafeAreaView style={styles.backButtonContainer}>
                <IconButton
                    onPress={() => {}}
                    icon="chevron-back"
                    color="white"
                    backgroundColor={Colors.black200}
                    rounded={10}
                />
            </SafeAreaView>
            <ScrollView>
                <View style={styles.carouselContainer}>
                    <ImageCarousel />
                </View>
                <View style={styles.infoContainer}>
                    <View style={styles.badgesContainer}>
                        <View style={styles.badgeContainer}>
                            <Badge>Apartment</Badge>
                        </View>
                        <View style={styles.badgeContainer}>
                            <Badge type="rent">Rent</Badge>
                        </View>
                    </View>
                    <View style={styles.titleContainer}>
                        <Title color="black" size="xs" bold>
                            Korter südalinnas
                        </Title>
                    </View>
                    <View style={styles.subtitleAndLocationContainer}>
                        <Ionicons name="location" color="red" size={20} />
                        <Subtitle size="lg">Tallinn, Estonia</Subtitle>
                    </View>
                    <View style={styles.estateParameter}>
                        <IconBadge size="md" icon="bed" />
                        <Text style={styles.estateParameterText}>
                            2 Room(s)
                        </Text>
                    </View>
                    <View style={styles.estateOwnerContainer}>
                        <View style={styles.estateOwnerTitleContainer}>
                            <Subtitle bold color="black" size="lg">
                                Apartment owner
                            </Subtitle>
                        </View>
                        <EstateOwner />
                    </View>
                    <View style={styles.estateDetailsContainer}>
                        <View style={styles.estateDetailsTitleContainer}>
                            <Subtitle bold color="black" size="lg">
                                Apartment details
                            </Subtitle>
                        </View>
                        <Text style={styles.estateDetails}>
                            Apartments are located in the center of Tallinn
                        </Text>
                        <View style={styles.estateConveniencesContainer}>
                            <View
                                style={styles.estateConveniencesTitleContainer}
                            >
                                <Subtitle bold color="black" size="lg">
                                    Conveniences
                                </Subtitle>
                            </View>
                            <View style={styles.estateConvenienceItemContainer}>
                                <ConvenienceItem
                                    value="2 km from Hospital"
                                    icon="bandage"
                                />
                            </View>
                            <View style={styles.estateConvenienceItemContainer}>
                                <ConvenienceItem
                                    value="free parking garage"
                                    icon="car"
                                />
                            </View>
                            <View style={styles.estateConvenienceItemContainer}>
                                <ConvenienceItem
                                    value="1 km from Mall"
                                    icon="wallet"
                                />
                            </View>
                            <View style={styles.estateConvenienceItemContainer}>
                                <ConvenienceItem
                                    value="Good public transportation"
                                    icon="bus"
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <LinearGradient
                style={{position:'absolute', bottom:0, width:"100%", height:40}}
                colors={['rgba(255, 255, 255, 0.1)', 'rgba(255, 255, 255, 0.8)']}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        flexGrow: 1,
    },
    carouselContainer: {
        height: 400,
    },
    backButtonContainer: {
        position: "absolute",
        zIndex: 5,
        marginLeft: 12,
    },
    infoContainer: {
        padding: 24,
    },
    badgesContainer: {
        flexDirection: "row",
        marginBottom: 12,
    },
    badgeContainer: {
        marginRight: 12,
    },
    titleContainer: {
        marginBottom: 12,
    },
    subtitleAndLocationContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 12,
    },
    estateParameter: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 8,
        marginBottom: 24,
    },
    estateParameterText: {
        fontSize: 16,
        fontWeight: "500",
        marginLeft: 8,
    },
    estateOwnerContainer: {
        marginBottom: 24,
    },
    estateOwnerTitleContainer: {
        marginBottom: 12,
    },
    estateDetailsContainer: {},
    estateDetailsTitleContainer: {
        marginBottom: 12,
    },
    estateDetails: {
        fontWeight: "300",
        marginBottom: 12,
    },
    estateConveniencesContainer: {},
    estateConveniencesTitleContainer: {
        marginBottom: 12,
    },
    estateConvenienceItemContainer: {
        marginVertical: 6,
    },
});
