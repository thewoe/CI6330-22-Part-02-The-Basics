import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { useState } from 'react';
import NavigationButton from '../components/NavigationButton';

const AddItemScreen = ({navigation, route}) => {
    const {callback} = route.params;
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    return (
        <View>
            <Text style={styles.textLabel}>Enter a title:</Text>
            <TextInput 
                style={styles.textInput}
                placeholder='Type title here'
                value={title}
                onChangeText={text => setTitle(text)}
                autoFocus={true}
            />
            <Text style={styles.textLabel}>Enter your content:</Text>
            <TextInput 
                style={styles.textInput}
                placeholder='Type content here'
                value={content}
                onChangeText={text => setContent(text)}
                mutliline={true}
            />
            <Button
                title='Submit Item'
                onPress={() => { 
                    callback({title: title, content: content});
                    navigation.pop();
                }}
            />
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