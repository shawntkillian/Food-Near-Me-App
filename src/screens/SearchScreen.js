import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/resultsList'

const SearchScreen = (props) => {
  console.log(props)
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage]= useResults();

  const filterResultsByPrice = (price) => {
    //price === $, $$, $$$
    return results.filter(results => {
      return results.price ===price;
    });
  };
  return (
    <View style= {styles.container}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
      <ResultsList results = {filterResultsByPrice('$')} title= "Cheap Options"/>
      <ResultsList results = {filterResultsByPrice('$$')}title= "Moderatly Priced"/>
      <ResultsList results = {filterResultsByPrice('$$$')}title= "Fancy Dinner"/>
      <ResultsList results = {filterResultsByPrice('$$$$')}title= "Super Big Spender"/>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginLeft: 10
},
container: {
  flex: 1,
  backgroundColor: 'white'
}
});


export default SearchScreen;
