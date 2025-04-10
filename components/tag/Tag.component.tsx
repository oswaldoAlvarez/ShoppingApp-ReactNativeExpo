import { TouchableOpacity } from "react-native";
import { TextView } from "../textView/TextView.component";
import { styles } from "./Tag.styles";

interface ITag {
  item: string;
  onPress: () => void;
}

export const Tag = ({ item, onPress }: ITag) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.6}>
      <TextView textStyles={styles.text} contentStyles={styles.textContainer}>
        {item}
      </TextView>
    </TouchableOpacity>
  );
};
