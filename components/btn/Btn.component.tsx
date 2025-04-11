import { TouchableOpacity } from "react-native";
import { TextView } from "../textView/TextView.component";
import { styles } from "./Btn.styles";

interface IBtn {
  text: string;
}

export const Btn = ({ text }: IBtn) => {
  return (
    <TouchableOpacity style={styles.container}>
      <TextView textStyles={styles.text}>{text}</TextView>
    </TouchableOpacity>
  );
};
