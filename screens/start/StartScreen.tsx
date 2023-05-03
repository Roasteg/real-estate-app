import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../utils/Colors";
import Title from "../../components/ui/Title";
import Subtitle from "../../components/ui/Subtitle";
import ActionButton from "../../components/ui/ActionButton";
export default function StartScreen() {
    return (
        <View style={styles.rootContainer}>
            <ImageBackground
                source={require("../../assets/real-estate.jpg")}
                resizeMode="cover"
                style={{ flex: 1 }}
                imageStyle={styles.imageBackground}
            >
                <LinearGradient
                    style={styles.linearGradient}
                    colors={["transparent", Colors.gradientColor]}
                    start={{x: 0, y: 0}}
                    end={{x: 0, y: 0.8}}
                >
                    <View style={styles.startContainer}>
                        <View style={styles.titleContainer}>
                            <Title bold size="sm" transform="capitalize">
                                Find your dream home today
                            </Title>
                        </View>
                        <View style={styles.subtitleContainer}>
                            <Subtitle size="lg" transform="capitalize">
                                Find your dream home: rent or buy with ease on
                                our mobile app!
                            </Subtitle>
                        </View>
                        <View style={styles.buttonContainer}>
                            <ActionButton onPress={()=>{}} bold>Lets go!</ActionButton>
                        </View>
                    </View>
                </LinearGradient>
            </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
    },
    linearGradient: {
        flex: 1,
        justifyContent: "flex-end",
    },
    imageBackground: {
        width: "100%",
        height: "100%",
        opacity: 0.2,
    },
    startContainer: {
        padding: 16,
    },
    titleContainer: {
        marginBottom: 12,
    },
    subtitleContainer: {
        marginBottom: 22,
    },
    buttonContainer: {
        marginBottom: 42,
    }
});