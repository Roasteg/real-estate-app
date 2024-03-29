import { StyleSheet, TextStyle, View, ViewStyle } from "react-native";
import LinkButton from "../atoms/buttons/LinkButton";
import Colors from "../../theme/Colors";
import Fonts from "../../theme/Fonts";

type Props = {
    segments: string[];
    selected: string;
    onSegmentPress: (segment: string) => void;
};

export default function SegmentedButtons(
    this: typeof SegmentedButtons,
    props: Props
) {
    const activeButtonStyle: ViewStyle = {
        borderBottomColor: Colors.primary500,
    };
    const activeButtonTextStyle: TextStyle = {
        color: Colors.primary500,
    };
    return (
        <View style={styles.rootContainer}>
            {props.segments.map((segment) => {
                return (
                    <LinkButton
                        key={segment}
                        style={[
                            styles.linkButton,
                            props.selected === segment ? activeButtonStyle : {},
                        ]}
                        textStyle={[
                            styles.linkButtonText,
                            props.selected === segment
                                ? activeButtonTextStyle
                                : {},
                        ]}
                        onPress={props.onSegmentPress.bind(this, segment)}
                    >
                        {segment}
                    </LinkButton>
                );
            })}
        </View>
    );
}
const styles = StyleSheet.create({
    rootContainer: {
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
        fontSize: Fonts.size.font18,
        fontWeight: Fonts.weight.semibold,
    },
});
