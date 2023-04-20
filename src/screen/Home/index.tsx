import React from "react";
import { StatusBar } from "expo-status-bar";

import NoTasks from "../../components/NoTasks";
import CardTask from "../../components/CardTask";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function Home() {
  return (
    <>
      <View style={styles.headerLogo}>
        <StatusBar style="auto" />
        <Image
          source={require("../../assets/logo.png")}
          style={{ margin: 10 }}
        />
      </View>
      <View style={styles.container}>
        <View style={styles.wrapInput}>
          <TextInput
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            style={styles.input}
          />

          <View>
            <TouchableOpacity style={styles.buttonBehind}></TouchableOpacity>
            <TouchableOpacity style={styles.buttonAdd}>
              <Image
                source={require("../../assets/plus.png")}
                style={{ width: 16, height: 16 }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.followUpActions}>
          <View style={styles.wrapCreatedTasks}>
            <Text style={styles.createdTasksTexts}>{"Criadas"}</Text>
            <View style={styles.wrapNumberTasksCreated}>
              <Text style={styles.numberTasksCreated}>{0}</Text>
            </View>
          </View>
          <View style={styles.wrapCompletedTasks}>
            <Text style={styles.completedTasksTexts}>{"Concluídas"}</Text>
            <View style={styles.wrapNumberTasksCompleted}>
              <Text style={styles.numberTasksCompleted}>{0}</Text>
            </View>
          </View>
        </View>

        {/* <NoTasks/> */}

        <ScrollView>
          <CardTask />
          <CardTask />
          <CardTask />
          <CardTask />
          <CardTask />
          <CardTask />
        </ScrollView>        
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  headerLogo: {
    backgroundColor: "#0D0D0D",
    height: 173,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    justifyContent: "flex-start",
  },
  wrapInput: {
    top: -27,
    alignItems: "flex-start",
    justifyContent: "center",
    height: 52,
    flexDirection: "row",
    paddingLeft: 24,
    paddingRight: 24,
  },
  input: {
    flex: 1,
    backgroundColor: "#262626",
    width: "100%",
    height: 54,
    borderRadius: 5,
    color: "#F2F2F2",
    fontSize: 16,
    padding: 10,
    marginBottom: 0,
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    marginRight: 4,
  },
  buttonAdd: {
    width: 52,
    height: 52,
    backgroundColor: "#1E6F9F",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    bottom: 52,
  },
  buttonBehind: {
    width: 52,
    height: 52,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    top: 0,
  },
  followUpActions: {
    flexDirection: "row",
    height: 19,
    top: 12,
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingLeft: 24,
    paddingRight: 24,
    marginBottom: 10,
  },
  wrapCreatedTasks: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  createdTasksTexts: {
    color: "#4EA8DE",
    paddingRight: 8,
    fontSize: 14,
    fontWeight: "800",
    justifyContent: "center",
  },
  wrapNumberTasksCreated: {
    backgroundColor: "#333333",
    width: 25,
    height: 19,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  numberTasksCreated: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "800",
  },
  wrapCompletedTasks: {
    flexDirection: "row",
  },
  completedTasksTexts: {
    color: "#8284FA",
    paddingRight: 8,
    fontSize: 14,
    fontWeight: "800",
    justifyContent: "center",
  },
  wrapNumberTasksCompleted: {
    backgroundColor: "#333333",
    width: 25,
    height: 19,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  numberTasksCompleted: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "800",
  },
});
