import { View, Text, ViewStyle, TextStyle, TextProps } from "react-native";
import { styles } from "./TextView.styles";

type alignContentType = "center" | "flex-start" | "flex-end";

interface ITextView extends TextProps {
  children: React.ReactNode;
  contentStyles?: ViewStyle | ViewStyle[];
  textStyles?: TextStyle;
  align?: alignContentType;
}

export const TextView = ({
  children,
  contentStyles,
  textStyles,
  align,
  ...textProps
}: ITextView) => {
  return (
    <View style={[contentStyles, { alignSelf: align }]}>
      <Text style={[styles.defaultText, textStyles]} {...textProps}>
        {children}
      </Text>
    </View>
  );
};
