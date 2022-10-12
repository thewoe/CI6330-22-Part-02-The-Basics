import React from 'react';
import { View, Text } from 'react-native';

const ViewItemScreen = ({route}) => {
    const { id, title, content, date } = route.params;
    return (
        <View>
            <Text>ID: {id}</Text>
            <Text>Title: {title}</Text>
            <Text>Content: {content}</Text>
            <Text>Date: {new Date(date).toLocaleDateString()}</Text>
            <Text>Time: {new Date(date).toLocaleTimeString()}</Text>
            <NavigationButton screenName='Index' navigation={navigation} />
            <NavigationButton screenName='ScreenOne' navigation={navigation} />
            <NavigationButton screenName='ScreenTwo' navigation={navigation} />
            <NavigationButton screenName='ListViewScreen' navigation={navigation} />
        </View>
    );
}

export default ViewItemScreen;