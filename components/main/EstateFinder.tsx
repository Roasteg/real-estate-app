import {
    Pressable,
    StyleSheet,
    Text,
    TextStyle,
    View,
    ViewStyle,
} from "react-native";

import { Colors } from "../../utils/Colors";
import LinkButton from "../ui/LinkButton";
import { useState } from "react";
import ActionButton from "../ui/ActionButton";
import { Action } from "../../types/Action";
import { EstateType } from "../../types/EstateType";
import ButtonSwitch from "../ui/ButtonSwitch";
export default function EstateFinder() {
    const [selectedAction, setSelectedAction] = useState<Action>(
        "rent"
    );
    const [selectedEstateType, setSelectedEstateType] = useState<EstateType>("apartment");

    const activeButtonStyle: ViewStyle = {
        borderBottomColor: Colors.primary500,
    };
    const activeButtonTextStyle: TextStyle = {
        color: Colors.primary500,
    };

    return (
        <View style={styles.rootContainer}>
            <View style={styles.linkButtonsContainer}>
                <LinkButton
                    style={[
                        styles.linkButton,
                        selectedAction === "rent" ? activeButtonStyle : {},
                    ]}
                    textStyle={[
                        styles.linkButtonText,
                        selectedAction === "rent" ? activeButtonTextStyle : {},
                    ]}
                    onPress={() => {
                        setSelectedAction("rent");
                    }}
                >
                    Rent
                </LinkButton>
                <LinkButton
                    style={[
                        styles.linkButton,
                        selectedAction === "buy" ? activeButtonStyle : {},
                    ]}
                    textStyle={[
                        styles.linkButtonText,
                        selectedAction === "buy" ? activeButtonTextStyle : {},
                    ]}
                    onPress={() => {
                        setSelectedAction("buy");
                    }}
                >
                    Buy
                </LinkButton>
            </View>
            <View style={styles.locationAndTypeContainer}>
                <View>
                    <Text>Location</Text>
                </View>
                <View style={styles.estateTypeContainer}>
                    <ButtonSwitch items={["Apartment", "House"]} />
                </View>
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
        height: 260,
        padding: 12,
        borderRadius: 10,
        elevation: 4,
        shadowColor: "black",
        shadowOffset: { height: 2, width: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        justifyContent: "space-between",
    },
    linkButtonsContainer: {
        flexDirection: "row",
    },
    linkButton: {
        borderBottomColor: Colors.grey500,
        borderBottomWidth: 3,
        paddingBottom: 6,
        alignItems: "center",
    },
    linkButtonText: {
        color: Colors.grey500,
        fontSize: 18,
        fontWeight: "500",
    },
    locationAndTypeContainer:{ 
    },
    estateTypeContainer: {
        flexDirection: "row",
    },
});
