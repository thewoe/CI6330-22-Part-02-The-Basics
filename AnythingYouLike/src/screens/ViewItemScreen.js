import React from 'react';
import { View, Text } from 'react-native';
import NavigationButton from '../components/NavigationButton';

const ViewItemScreen = ({route}) => {
    const { id, title, content, date } = route.params;
    return (
        <View>
            <Text>ID: {id}</Text>
            <Text>Title: {title}</Text>
            <Text>Content: {content}</Text>
            <Text>Date: {new Date(date).toLocaleDateString()}</Text>
            <Text>Time: {new Date(date).toLocaleTimeString()}</Text>
            <NavigationButton screenName='Index' navigation={route.navigation} />
            <NavigationButton screenName='ScreenOne' navigation={route.navigation} />
            <NavigationButton screenName='ScreenTwo' navigation={route.navigation} />
            <NavigationButton screenName='ListViewScreen' navigation={route.navigation} />
            <NavigationButton screenName='CameraScreen' navigation={navigation} />
            <NavigationButton screenName='SearchAPIScreen' navigation={navigation} />
            <NavigationButton screenName='YelpSearchAPIScreen' navigation={navigation} />
        </View>
    );
}

export default ViewItemScreen;