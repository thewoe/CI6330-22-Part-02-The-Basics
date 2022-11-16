import { View, Text } from 'react-native';
import NavigationButton from '../components/NavigationButton';

const ScreenOne = ({navigation}) => {
    return (
        <View>
            <Text>This is Screen One</Text>
            <NavigationButton screenName='Index' navigation={navigation} />
            <NavigationButton screenName='ScreenTwo' navigation={navigation} />
            <NavigationButton screenName='ListViewScreen' navigation={navigation} />
            <NavigationButton screenName='CameraScreen' navigation={navigation} />
            <NavigationButton screenName='SearchAPIScreen' navigation={navigation} />
            <NavigationButton screenName='YelpSearchAPIScreen' navigation={navigation} />
        </View>
    );
}

export default ScreenOne;