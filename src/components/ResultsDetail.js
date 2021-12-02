import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ResultsShowScreen from '../screens/ResultsShowScreen';

const ResultsDetail = ({result}) => {
    const navigation=useNavigation();
    return(
        <View  style={styles.container} >
            <TouchableOpacity onPress={() => navigation.navigate("ResultsShowScreen", {id: result.id})}>
            <Image style = {styles.imageStyle} source= {{uri: result.image_url}}/>
            <Text style = {styles.name}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 10
    },

    imageStyle: {
        width: 250,
        height: 140,
        borderRadius: 5,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold',
        fontSize: 14,
    }
});

export default ResultsDetail