import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/resultsList'
import { useNavigation } from '@react-navigation/native';
import yelp from '../api/yelp'

const ResultsShowScreen = ({route}) => {
    const [ result, setResult] = useState(null);
    const id  = route.params.id

   const getResults = async(id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
   };
   useEffect(() => {
    getResults(id);
   }, [])

   if (!result) {
       return null;
   }

   console.log(result)
  return (
    <View style= {styles.container}>
        <Text style= {styles.text}>{result.name}</Text>
        <Text style= {styles.phone}>{result.phone}</Text>
        <FlatList
        data = {result.photos}
        keyExtractor={(photo) =>photo}
        renderItem={({item})=> {
            return <Image style= {styles.image} source = {{uri: item}}></Image>
        }}
        />
    </View>
  );
};

const styles = StyleSheet.create({

container: {
  flex: 1,
  backgroundColor: 'white',
  alignItems: 'center',
},
image:{
    height: 200,
    width: 300,
    marginTop: 10,
    borderRadius: 8,
},
text:{
    fontSize: 24,
    fontWeight: 'bold'

},
phone:{
    fontSize: 16,

}
});


export default ResultsShowScreen;
