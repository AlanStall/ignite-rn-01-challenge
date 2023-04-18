import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";

/* import Logo02 from '../../assets/logo.png'; */
/* import Logo from '../../assets/favicon.png'; */

export default function Home() {
  return (
    <>
      <View
        style={{
          backgroundColor: "#0D0D0D",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: 40,
        }}
      >
        <StatusBar style="auto" />
        <Image
          source={require("../../assets/logo.png")}
          style={{ margin: 40 }}
        />
      </View>
      <View
        style={{
          backgroundColor: "#1A1A1A",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: 30,
          flexDirection: 'row',
        }}
      >
        <TextInput style={styles.input} />
        <TouchableOpacity style={{top: -70, marginLeft: 10 }}><Text style={{color: 'white'}}>{'BOTÃO'}</Text></TouchableOpacity>
      </View>
      <View
        style={{ flex: 1, backgroundColor: "#1A1A1A", alignItems: "center" }}
      >
        <Text style={{ color: "white" }}>
          Open up App.tsx to start working on your app!
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0D0D0D",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 40,
  },
  input: {
    flex: 1,
    top: -70,
    backgroundColor: "#262626",
    width: "100%",
    height: 56,
    borderRadius: 5,
    color: "#FFF",
    fontSize: 16,
    padding: 10,
    marginBottom: 0,    
    borderWidth: 2, 
    borderColor: 'black', 
    borderStyle: 'solid'
  },
});
