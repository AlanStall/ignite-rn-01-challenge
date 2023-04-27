import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    ImageTrash: {
      height: 40,
    },
    ImageCheck: {
        width: 7.5, 
        height: 4.5,
      },
    button: {
      width: 50,
      height: 50,
      justifyContent: "center",
      alignItems: "center",
    },
  });
  