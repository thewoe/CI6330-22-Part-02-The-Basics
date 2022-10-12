import { View, StyleSheet, Text, FlatList, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import NavigationButton from '../components/NavigationButton';

const dummyData = [
    {
        id: -1,
        title: 'This is my first item',
        content: 'blah blah blah... lots of waffle',
        date: new Date()
    },
    {
        id: -2,
        title: 'This is my second item',
        content: 'lets get back to some hardcore coding!!!',
        date: new Date()
    }
];

const ListViewScreen = ({navigation}) => {
    const [items, setItems] = useState(dummyData);
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Pressable onPress={() => navigation.navigate('AddItemScreen', {callback: addNewItem})}>
                    <MaterialIcons name='add' size={24} color='black' />
                </Pressable>
            )
        })
    }, [items]);
    const addNewItem = (title, content) => {
        setItems([...items,
        {
            id: Math.floor(Math.random() * 99999),
            title: title,
            content: content,
            date: new Date()
        }]);
    }

    return (
        <View>
            <FlatList
                data={items}
                keyExtractor={e => e.id.toString()}
                renderItem={({item}) => {
                    return (
                        <Pressable onPress={() => navigation.navigate('View', {
                            id: item.id,
                            title: item.title,
                            content: item.content,
                            date: item.date.toUTCString()
                        })}>
                            <View style={styles.itemContainer}>
                                <View style={styles.dateContainer}>
                                    <Text style={styles.dateText}>
                                        {item.date.toLocaleDateString()}
                                    </Text>
                                    <Text>
                                        {item.date.toLocaleTimeString()}
                                    </Text>
                                </View>
                                <Text style={styles.titleText}>{item.title}</Text>
                                <Text style={styles.titleText}>{item.content}</Text>
                            </View>
                        </Pressable>
                    );
                }}
            />
            <NavigationButton screenName='Index' navigation={navigation} />
            <NavigationButton screenName='ScreenOne' navigation={navigation} />
            <NavigationButton screenName='ScreenTwo' navigation={navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        marginTop: 15,
        padding: 15,
        borderBottomWidth: 1,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    dateContainer: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    dateText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    titleText: {
        fontSize: 16,
        paddingLeft: 15,
        flex: 1,
        alignSelf: 'flex-start'
    }
});

export default ListViewScreen;