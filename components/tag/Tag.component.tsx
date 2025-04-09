import { TouchableOpacity } from "react-native";
import { TextView } from "../textView/TextView.component";
import { styles } from "./Tag.styles";

interface ITag {
  item: string;
}

export const Tag = ({ item }: ITag) => {
  return (
    <TouchableOpacity activeOpacity={0.6}>
      <TextView textStyles={styles.text} contentStyles={styles.textContainer}>
        {item}
      </TextView>
    </TouchableOpacity>
  );
};
