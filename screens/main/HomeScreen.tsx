import { StyleSheet, Text, View } from "react-native";
import Title from "../../components/ui/Title";
import EstateFinder from "../../components/main/EstateFinder";
export default function HomeScreen() {
    return (
        <View style={styles.rootContainer}>
            <Title color="black" size="xs" bold>
                Get the best deals on your dream home today
            </Title>
            <EstateFinder />
        </View>
    );
}
const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 18,
    },
});
