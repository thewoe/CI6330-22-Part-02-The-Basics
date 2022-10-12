import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { useState } from 'react';
import NavigationButton from '../components/NavigationButton';

const AddItemScreen = ({navigation}) => {
    const [name, setName] = useState('');
    return (
        <View>
            <Text style={styles.textLabel}>Enter your name:</Text>
            <TextInput 
                style={styles.textInput}
                placeholder='Type here'
                value={name}
                onChangeText={text => setName(text)}
                multiline={true}
                numberOfLines={4}
                autoCapitalize='none'
                autoCorrect={false}
                autoFocus={true}
                keyboardType='email-address'
                maxLength={100}
            />
            <Text style={styles.textLabel}>Your name is {name}</Text>
            <NavigationButton screenName='Index' navigation={navigation} />
            <NavigationButton screenName='ScreenOne' navigation={navigation} />
            <NavigationButton screenName='ScreenTwo' navigation={navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
    textInput: {
        fontSixe: 20,
        padding: 10,
        margin: 5,
        borderWidth: 1
    },
    textLabel: {
        fontSize: 18,
        paddingLeft: 10,
        marginTop: 10
    }
});

export default AddItemScreen;