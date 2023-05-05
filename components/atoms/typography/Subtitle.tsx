import { StyleSheet, Text, TextStyle, View } from 'react-native'
import Colors from '../../../utils/Colors';

type Props = {
    children: React.ReactNode;
    color?: string;
    size?: "xl" | "lg" | "md" | "sm";
    bold?: boolean;
    semibold?: boolean;
    align?: "auto" | "left" | "right" | "center" | "justify";
    transform?: "none" | "capitalize" | "uppercase" | "lowercase";
}

export default function Subtitle(props: Props) {

    const fontSizes = {
        xl: 24,
        lg: 18,
        md: 16,
        sm: 14,
    };

    const subtitleStyle: TextStyle = {
        fontSize: fontSizes[props.size ?? "md"],
        color: props.color ?? Colors.subtitleDefault,
        fontWeight: props.bold ? "bold" : props.semibold ? "500" : "400",
        textAlign: props.align,
        textTransform: props.transform
    }

  return (
    <View>
      <Text style={subtitleStyle}>{props.children}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
})