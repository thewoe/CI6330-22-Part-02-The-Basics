import axios from 'axios';
import { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, Button, StyleSheet } from 'react-native';
import NavigationButton from '../components/NavigationButton';

const SearchAPIScreen = ({navigation}) => {
    const [name, setName] = useState('');
    const getName = async () => {
        const result = await axios.get('https://api.ubitheraplay.com/api/users/generate');
        setName(result.data.Username);
        console.log(result.data.Username);
    }
    useEffect(() => { getName() }, []);
    return (
        <View>
            <Text>Search API Screen</Text>
            <Text>{name}</Text>
            <NavigationButton screenName='Index' navigation={navigation} />
            <NavigationButton screenName='ScreenOne' navigation={navigation} />
            <NavigationButton screenName='ScreenTwo' navigation={navigation} />
            <NavigationButton screenName='CameraScreen' navigation={navigation} />
            <NavigationButton screenName='ListViewScreen' navigation={navigation} />
            <NavigationButton screenName='YelpSearchAPIScreen' navigation={navigation} />
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchAPIScreen;