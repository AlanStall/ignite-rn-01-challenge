import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

type Props = {
  texto: string;
  isDone: boolean;
  onPress: () => void;
}

export default function CardTask({texto, isDone, onPress}: Props) {
  const [check, setCheck] = useState(false);
  const [concluido, setConcluido] = useState(false);  
 
  /* if (check === true) {
    isDone = true
  } else {
    isDone = false
  } */

  useEffect(() => {
    setCheck(isDone);
  }, [isDone]);

  return (
    <View style={styles.wrapTexts}>
      <TouchableOpacity onPress={() => setCheck(!check)} style={styles.button}>
        {!check ? (
          <View style={styles.checkField}></View>
        ) : (
          <View style={styles.checkedField}>
            <Image
              source={require("../../assets/Vector.png")}
              style={{ width: 7.5, height: 4.5 }}
            />
          </View>
        )}
      </TouchableOpacity>
      {!check ? (
        <Text style={styles.textCard}>
          {texto /* + isDone */}
        </Text>
      ) : (
        <Text style={styles.textCardChecked}>
          {texto /* + isDone */}
        </Text>
      )}
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Image
          source={require("../../assets/trash.png")}
          style={styles.ImageNoTasks}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapTexts: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "gray",
    borderStyle: "solid",
    borderRadius: 8,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 21,
    marginLeft: 24,
    marginRight: 24,
    marginBotton: 8,
  },
  checkField: {
    width: 17.45,
    height: 17.45,
    borderWidth: 2,
    borderColor: "#4EA8DE",
    borderStyle: "solid",
    borderRadius: 30,
  },
  checkedField: {
    width: 17.45,
    height: 17.45,
    borderWidth: 2,
    borderColor: "#5E60CE",
    borderStyle: "solid",
    borderRadius: 30,
    backgroundColor: "#5E60CE",
    justifyContent: "center",
    alignItems: "center",
  },
  textCard: {
    flex: 1,
    fontSize: 14,
    color: "#D9D9D9",
    fontWeight: "500",
    textAlign: "justify",
    textDecorationLine: "none",
  },
  textCardChecked: {
    flex: 1,
    fontSize: 14,
    color: "#808080",
    fontWeight: "500",
    textAlign: "justify",
    textDecorationLine: "line-through",
  },
  ImageNoTasks: {
    height: 40,
  },
  button: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
