import { View, Text, Button } from 'react-native';

const ScreenTwo = ({navigation}) => {
    return (
        <View>
            <Text>This is Screen Two</Text>
            <Button title='Go to Index' onPress={() => navigation.navigate('Index')} />
            <Button title='Go to Screen One' onPress={() => navigation.navigate('ScreenOne')} />
        </View>
    );
}

export default ScreenTwo;