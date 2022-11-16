import { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, Button, StyleSheet, Pressable } from 'react-native';
import yelp from '../api/yelp';
import NavigationButton from '../components/NavigationButton';
import useSearchResults from '../hooks/useSearchResults';

const YelpSearchAPIScreen = ({navigation}) => {
    const [getSearchResults, results, errorMessage] = useSearchResults();
    return (
        <View>
            <Text style={styles.textError}>{(errorMessage !=='') ? errorMessage : null}</Text>
            <Text style={styles.textLabel}>Enter Search Term:</Text>
            <TextInput style={styles.textInput} onChangeText={searchTerm => getSearchResults(searchTerm)} />
            <Button title='Search' />
            <FlatList
                data={results.businesses}
                keyExtractor={(e) => e.id}
                renderItem={({item}) => {
                    return (
                        <Pressable onPress={() => {navigation.navigate('YelpSearchAPIItemScreen', {id: item.id})}}>
                            <Text style={styles.textLabel}>{item.name}</Text>
                        </Pressable>
                    );
                }}
            />
            <NavigationButton screenName='Index' navigation={navigation} />
            <NavigationButton screenName='ScreenOne' navigation={navigation} />
            <NavigationButton screenName='ScreenTwo' navigation={navigation} />
            <NavigationButton screenName='CameraScreen' navigation={navigation} />
            <NavigationButton screenName='ListViewScreen' navigation={navigation} />
            <NavigationButton screenName='YelpSearchAPIScreen' navigation={navigation} />
        </View>
    );
};

const styles = StyleSheet.create({
    textInput: {
        fontSize: 20,
        padding: 10,
        margin: 5,
        borderWidth: 1
    },
    textLabel: {
        fontSize: 18,
        paddingLeft: 10,
        marginTop: 10
    },
    textError: {
        fontSize: 20,
        color: 'red'
    }
});

export default YelpSearchAPIScreen;