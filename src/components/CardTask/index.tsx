import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function CardTask() {
  return (
    <View style={styles.wrapTexts}>
      <TouchableOpacity>
        <View style={styles.checkField}>
          <Text>{""}</Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.textCard}>
        {
          "Você ainda não tem tarefas cadastradas Você ainda não tem tarefas cadastradas Você ainda não tem."
        }
      </Text>
      <TouchableOpacity>
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
    padding: 15,
    marginTop: 21,
    marginLeft: 24,
    marginRight: 24,
    marginBotton: 8,
  },
  checkField: {
    width: 17.45,
    borderWidth: 2,
    borderColor: "#4EA8DE",
    borderStyle: "solid",
    borderRadius: 30,
  },
  textCard: {
    flex: 1,
    fontSize: 14,
    color: "#D9D9D9",
    fontWeight: "500",
    paddingLeft: 15,
    paddingRight: 10,
    textAlign: "justify",
  },
  ImageNoTasks: {
    height: 40,
  },
});
