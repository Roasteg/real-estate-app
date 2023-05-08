import { Pressable, StyleSheet, View } from "react-native";
import Colors from "../../theme/Colors";
import LinkButton from "../atoms/buttons/LinkButton";
import Subtitle from "../atoms/typography/Subtitle";
import Title from "../atoms/typography/Title";
import Card from "../organisms/Card";
import EstateFinder from "../organisms/EstateFinder";

type Props = {
    onPopularPress: () => void;
};

export default function HomeTemplate(props: Props) {
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
                <View style={styles.popularEstatesListContainer}>
                    <Pressable
                        style={[
                            styles.popularEstateContainer,
                            { marginRight: 6 },
                        ]}
                        onPress={props.onPopularPress}
                    >
                        <Card />
                    </Pressable>
                    <View style={styles.popularEstateContainer}>
                        <Card />
                    </View>
                </View>
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
        marginBottom: 12,
    },
    estateFinderContainer: {
        flex: 4,
        marginBottom: 28,
    },
    popularEstatesContainer: {
        flex: 4,
    },
    popularEstatesTitleAndButtonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 18,
    },
    popularEstatesListContainer: {
        flex: 1,
        marginBottom: 8,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    popularEstateContainer: {
        flex: 1,
    },
});
