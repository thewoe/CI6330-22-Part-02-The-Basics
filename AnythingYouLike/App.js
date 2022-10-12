import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from './src/screens/IndexScreen';
import ScreenOne from './src/screens/ScreenOne';
import ScreenTwo from './src/screens/ScreenTwo';
import AddItemScreen from './src/screens/AddItemScreen';
import ListViewScreen from './src/screens/ListViewScreen';
import ViewItemScreen from './src/screens/ViewItemScreen';

const App = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Index'>
                <Stack.Screen
                    name='Index'
                    component={IndexScreen}
                    options={{ title: 'AnythingYouLike App' }}
                />
                <Stack.Screen
                    name='ScreenOne'
                    component={ScreenOne}
                    options={{ title: 'Screen One' }}
                />
                <Stack.Screen
                    name='ScreenTwo'
                    component={ScreenTwo}
                    options={{ title: 'Screen Two' }}
                />
                <Stack.Screen
                    name='AddItemScreen'
                    component={AddItemScreen}
                    options={{ title: 'Add a new item' }}
                />
                <Stack.Screen
                    name='ListViewScreen'
                    component={ListViewScreen}
                    options={{ title: 'View all items' }}
                />
                <Stack.Screen
                    name='ViewItemScreen'
                    component={ViewItemScreen}
                    options={{ title: 'View item' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;

