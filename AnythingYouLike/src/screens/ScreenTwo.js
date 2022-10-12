import { View } from 'react-native';
import ChildrenExample from '../components/ChildrenExample';
import NavigationButton from '../components/NavigationButton';

const ScreenTwo = ({navigation}) => {
    return (
        <View>
            <ChildrenExample title='This is Screen Two'>
                <NavigationButton screenName='Index' navigation={navigation} />
                <NavigationButton screenName='ScreenOne' navigation={navigation} />
            </ChildrenExample>
        </View>
    );
}

export default ScreenTwo;