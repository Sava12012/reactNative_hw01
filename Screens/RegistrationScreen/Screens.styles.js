import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerFlex: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  regInputs: {
    display: "flex",
    position: "relative",
    // height: "80%",
    minWidth: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    height: 550,
  },

  textPosition: {
    display: "flex",
    paddingBottom: 40,
  },

  input: {
    width: 300,
    height: 50,
    padding: 10,
    borderWidth: 1,
    // borderColor: "grey",
    borderRadius: 5,
    marginBottom: 10,
  },

  button: {
    height: 50,
    marginTop: 43,
    paddingVertical: 16,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    // display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 300,
    height: 50,
    padding: 10,
    borderColor: "grey",
    borderRadius: 100,
    marginBottom: 10,
    backgroundColor: "#FF6C00",
  },

  avatarPlace: {
    display: "flex",
    minHeight: 120,
    minWidth: 120,
    position: "absolute",
    top: -60,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },

  add: {
    display: "flex",
    position: "absolute",
    minHeight: 25,
    minWidth: 25,
    borderRadius: 100,
    color: "blue",
    top: -50,
    right: "39%",
  },
});
