import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";

import { styles } from "./styles";

type Props = {
  text: string;
  isDone: boolean;
  onPressToDelete: () => void;
  onPressToComplete: () => void;
};

export default function CardTask({
  text,
  isDone,
  onPressToComplete,
  onPressToDelete,
}: Props) {
  return (
    <View style={styles.wrapTexts}>
      <TouchableOpacity onPress={onPressToComplete} style={styles.button}>
        {!isDone ? (
          <View style={styles.checkField}></View>
        ) : (
          <View style={styles.checkedField}>
            <Image
              source={require("../../assets/Vector.png")}
              style={styles.ImageCheck}
            />
          </View>
        )}
      </TouchableOpacity>
      {!isDone ? (
        <Text style={styles.textCard}>{text}</Text>
      ) : (
        <Text style={styles.textCardChecked}>{text}</Text>
      )}
      <TouchableOpacity style={styles.button} onPress={onPressToDelete}>
        <Image
          source={require("../../assets/trash.png")}
          style={styles.ImageTrash}
        />
      </TouchableOpacity>
    </View>
  );
}
