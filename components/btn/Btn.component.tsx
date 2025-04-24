import { TouchableOpacity } from "react-native";
import { TextView } from "../textView/TextView.component";
import { styles } from "./Btn.styles";

interface IBtn {
  text: string;
  onPress: () => void;
}

export const Btn = ({ text, onPress }: IBtn) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <TextView textStyles={styles.text}>{text}</TextView>
    </TouchableOpacity>
  );
};
