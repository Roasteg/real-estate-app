import { StyleSheet, View } from "react-native";

import { useState } from "react";
import ActionButton from "../atoms/buttons/ActionButton";
import { EstateType } from "../../types/EstateType";
import ButtonSwitch from "../atoms/buttons/ButtonSwitch";
import SegmentedButtons from "../molecules/SegmentedButtons";
import IconInput from "../atoms/inputs/IconInput";

const segments = ["Rent", "Buy"];

export default function EstateFinder() {
    const [selectedSegment, setSelectedSegment] = useState<string>(segments[0]);
    const [selectedEstateType, setSelectedEstateType] =
        useState<EstateType>("apartment");

    return (
        <View style={styles.rootContainer}>
            <View>
                <SegmentedButtons
                    segments={segments}
                    onSegmentPress={setSelectedSegment}
                    selected={selectedSegment}
                />
            </View>
            <View>
                <IconInput
                    iconColor="red"
                    iconSize={24}
                    editable={false}
                    style={{ borderRadius: 10 }}
                    textStyle={{ paddingVertical: 18 }}
                    icon="location"
                    value="Tallinn"
                />
            </View>
            <View>
                <ButtonSwitch items={["Apartment", "House"]} />
            </View>
            <View>
                <ActionButton onPress={() => {}}>Find</ActionButton>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    rootContainer: {
        backgroundColor: "white",
        height: "100%",
        padding: 12,
        borderRadius: 10,
        elevation: 4,
        shadowColor: "black",
        shadowOffset: { height: 2, width: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        justifyContent: "space-between",
    },
    locationAndTypeContainer: {},
    estateTypeContainer: {
        flexDirection: "row",
    },
});
