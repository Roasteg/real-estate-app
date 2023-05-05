import { StyleSheet, Text, View, FlatList } from 'react-native'
import Card from '../organisms/Card'
export default function PopularEstates() {
  return (
    <View style={styles.rootContainer}>
      <FlatList data={[1, 2]} initialNumToRender={1} horizontal keyExtractor={(item) => item.toString()} renderItem={(item) => {
        return (
            <View style={styles.itemContainer}>
                <Card />
            </View>
        )
      }}/>
    </View>
  )
}
const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
    },
    itemContainer: {
        flex: 1
    }
})