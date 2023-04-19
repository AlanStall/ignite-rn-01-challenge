import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function NoTasks() {
  return (
    <View style={styles.wrapTexts}>
      <Image
        source={require("../../assets/Clipboard.png")}
        style={styles.ImageNoTasks}
      />
      <Text style={styles.textTitle}>
        {"Você ainda não tem tarefas cadastradas"}
      </Text>
      <Text style={styles.textDescription}>
        {"Crie tarefas e organize seus itens a fazer"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  ImageNoTasks: {
    marginBottom: 10,
  },
  wrapTexts: {
    alignItems: "center",
    justifyContent: "center",
    top: -48,
    borderTopWidth: 1,
    borderColor: "#808080",
    borderStyle: "solid",
    margin: 24,
    paddingTop: 48,
  },
  textTitle: {
    /* fontFamily: 'Inter', */
    fontSize: 14,
    color: "#808080",
    fontWeight: "700",
    padding: 10,
  },
  textDescription: {
    fontSize: 14,
    color: "#808080",
    alignItems: "center",
  },
});
