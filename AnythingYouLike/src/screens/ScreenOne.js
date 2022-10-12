import { View, Text } from 'react-native';
import NavigationButton from '../components/NavigationButton';

const ScreenOne = ({navigation}) => {
    return (
        <View>
            <Text>This is Screen One</Text>
            <NavigationButton screenName='Index' navigation={navigation} />
            <NavigationButton screenName='ScreenTwo' navigation={navigation} />
            <NavigationButton screenName='AddItemScreen' navigation={navigation} />
        </View>
    );
}

export default ScreenOne;