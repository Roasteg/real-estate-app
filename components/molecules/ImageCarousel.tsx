import { StyleSheet, View, FlatList } from "react-native";
import SlideItem from "../atoms/misc/SlideItem";

export default function ImageCarousel() {
    const images = [
        "../../../assets/estates/apartment-1.jpg",
        "../../../assets/estates/apartment-outside.jpg",
    ];
    return (
        <View style={styles.rootContainer}>
            <FlatList
                data={images}
                keyExtractor={(item) => item}
                horizontal
                snapToAlignment="center"
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                renderItem={() => <SlideItem />}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
    },
   
});
