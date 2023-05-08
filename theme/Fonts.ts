import { PixelRatio } from "react-native";

const fontScale = PixelRatio.getFontScale();

const getFontScale = (size: number) => size / fontScale;

const size = {
    font72: getFontScale(72),
    font60: getFontScale(60),
    font48: getFontScale(48),
    font42: getFontScale(42),
    font26: getFontScale(26),
    font24: getFontScale(24),
    font22: getFontScale(22),
    font20: getFontScale(20),
    font18: getFontScale(18),
    font16: getFontScale(16),
    font14: getFontScale(14),
    font12: getFontScale(12),
    font10: getFontScale(10),
};

const weight = {
    full: "900" as "900" ,
    bold: "bold" as "bold",
    semibold: "500" as "500",
    normal: "normal" as "normal",
    thin: "300" as "300"
};

export default {
    size,
    weight
};
