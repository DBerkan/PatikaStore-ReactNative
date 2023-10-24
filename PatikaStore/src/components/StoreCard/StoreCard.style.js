import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width / 2,
    margin: 3,
    backgroundColor: 'white',
    borderRadius: 10,
    margin:3
  },
  title: {
    paddingHorizontal: 5,
    fontWeight: "bold",
    color: "black",
    textAlign: 'center',
  },
  price: {
    fontSize: 19,
    color: 'grey',
    textAlign: 'center',
  },
  image: {
    height: 200,
    width: Dimensions.get('window').width / 2-40,
    borderRadius: 10,
    alignSelf: 'center', 
  },
  instock: {
    fontSize: 18,
    fontStyle: 'italic',
    color: 'red',
    textAlign: 'center', 
  },
});

export default styles;