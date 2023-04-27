import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";

import { styles } from "./styles";

import NoTasks from "../../components/NoTasks";
import CardTask from "../../components/CardTask";

import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";

type Tasks = {
  id: string;
  text: string;
  isDone: boolean;
};

export default function Home() {
  const [task, setTask] = useState("");
  const [allTasks, setAllTasks] = useState<Tasks[]>([]);
  const [isFocusInput, setIsFocusInput] = useState(false);

  const amountAllTasks = allTasks.length;
  const tasksCompleted = allTasks.filter(
    (task) => task.isDone === true
  );

  const toFocusInput = () => {
    setIsFocusInput(true);
  };
  const notToFocusInput = () => {
    setIsFocusInput(false);
  };

  function addTask() {
    if (task.trim().length > 3) {
      const newTask = {
        id: Math.random().toString(),
        text: task,
        isDone: false,
      };
      setAllTasks((prevState) => [...prevState, newTask]);
      setTask("");
    } else {
      Alert.alert(
        "Quantidade mínima de caracteres não alcançada",
        "Favor cadastrar um texto com no mínimo 3 letras."
      );
    }
  }

  function completeTask(id: string) {
    setAllTasks((prevState) => {
      return prevState.map((task) => {
        if (task.id === id) {
          return { ...task, isDone: !task.isDone };
        } else {
          return { ...task };
        }
      });
    });
  }

  function deleteTask(id: string) {
    Alert.alert("Apagar", "Apagar esta tarefa?", [
      {
        text: "Sim",
        onPress: () =>
          setAllTasks((prevState) =>
            prevState.filter((todasTarefas) => todasTarefas.id !== id)
          ),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

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
            onFocus={toFocusInput}
            onBlur={notToFocusInput}
            style={isFocusInput ? styles.inputFocused : styles.input }
            onChangeText={setTask}
            value={task}
          />

          <View>
            <TouchableOpacity style={styles.buttonBehind}></TouchableOpacity>
            <TouchableOpacity style={styles.buttonAdd} onPress={addTask}>
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
              <Text style={styles.numberTasksCreated}>
                {amountAllTasks}
              </Text>
            </View>
          </View>
          <View style={styles.wrapCompletedTasks}>
            <Text style={styles.completedTasksTexts}>{"Concluídas"}</Text>
            <View style={styles.wrapNumberTasksCompleted}>
              <Text style={styles.numberTasksCompleted}>
                {tasksCompleted.length}
              </Text>
            </View>
          </View>
        </View>

        <FlatList
          data={allTasks}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 30 }}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CardTask
              text={item.text}
              isDone={item.isDone}
              onPressToComplete={() => completeTask(item.id)}
              onPressToDelete={() => deleteTask(item.id)}
            />
          )}
          ListEmptyComponent={() => <NoTasks />}
        />
      </View>
    </>
  );
}
