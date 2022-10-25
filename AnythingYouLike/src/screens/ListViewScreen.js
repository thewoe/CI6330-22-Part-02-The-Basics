import { View, StyleSheet, Text, FlatList, Pressable } from 'react-native';
import { useContext, useEffect, useReducer } from 'react';
import ItemContext from '../contexts/ItemContext';
import { actionTypes } from '../helpers/actionTypes';
import { MaterialIcons } from '@expo/vector-icons';
import NavigationButton from '../components/NavigationButton';

const ListViewScreen = ({navigation}) => {
    const { state, remove, update } = useContext(ItemContext);
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Pressable onPress={() => navigation.navigate('AddItemScreen')}>
                    <MaterialIcons name='add' size={24} color='black' />
                </Pressable>
            )
        })
    }, [state]);

    return (
        <View>
            <FlatList
                data={state}
                keyExtractor={e => e.id.toString()}
                renderItem={({item}) => {
                    return (
                        <Pressable onPress={() => navigation.navigate('ViewItemScreen', {
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
                                <Pressable onPress={() => navigation.navigate('EditItemScreen', {
                                    id: item.id,
                                    title: item.title,
                                    content: item.content,
                                    date: item.date.toUTCString()
                                })}>
                                    <MaterialIcons name='edit' size={38} color='red' />
                                </Pressable>
                                <Pressable onPress={() => remove(item.id)}>
                                    <MaterialIcons name='delete' size={38} color='red' />
                                </Pressable>
                                {/* <Pressable onPress={() => update(item.id)}>
                                    <MaterialIcons name='edit' size={38} color='red' />
                                </Pressable> */}
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