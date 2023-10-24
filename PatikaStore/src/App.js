import React from "react";
import { View, Text, Image, StyleSheet, FlatList, ScrollView, Dimensions, SafeAreaView, TextInput } from "react-native";
import store_data from './store_data.json'
import StoreCard from "./components/StoreCard";


function App() {

  const renderStore = ({ item }) => <StoreCard product={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>PATIKA STORE</Text>
      <TextInput style={styles.search} placeholder="Search" />

      <FlatList
        data={store_data}
        renderItem={renderStore}
        numColumns={2}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
    margin:3,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    fontStyle:'italic',
    color: 'purple',
    marginBottom: 10,
    textAlign:'center'
  },
  search: {
    backgroundColor: 'lightgray',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
    marginBottom: 10,
  },
  
});

export default App;