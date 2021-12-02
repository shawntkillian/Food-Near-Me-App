import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import ResultsDetail from './ResultsDetail'

const ResultsList= ({title, results}) => {
  if (!results.length) {
      return null
  }
  
    return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
 
      <FlatList
        horizontal
        data = {results}
        keyExtractor={results => results.id}
        showsHorizontalScrollIndicator= {false}
        renderItem={({item}) => {
            
            return <ResultsDetail result =  {item}/>;
        }}
      />
     
    </View>
  );
};

const styles = StyleSheet.create({
    
titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10
},
container: {
    marginBottom: 15
},
});

export default ResultsList;
