import { View, Text, Button } from 'react-native';

const ScreenOne = ({navigation}) => {
    return (
        <View>
            <Text>This is Screen One</Text>
            <Button title='Go to Index' onPress={() => navigation.navigate('Index')} />
            <Button title='Go to Screen Two' onPress={() => navigation.navigate('ScreenTwo')} />
        </View>
    );
}

export default ScreenOne;