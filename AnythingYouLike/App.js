import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ItemProvider } from './src/contexts/ItemContext';
import IndexScreen from './src/screens/IndexScreen';
import ScreenOne from './src/screens/ScreenOne';
import ScreenTwo from './src/screens/ScreenTwo';
import AddItemScreen from './src/screens/AddItemScreen';
import EditItemScreen from './src/screens/EditItemScreen';
import ListViewScreen from './src/screens/ListViewScreen';
import ViewItemScreen from './src/screens/ViewItemScreen';
import CameraScreen from './src/screens/CameraScreen';
import CameraPhotoScreen from './src/screens/CameraPhotoScreen';

const App = () => {
    const Stack = createNativeStackNavigator();
    return (
        <ItemProvider>
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
                        name='EditItemScreen'
                        component={EditItemScreen}
                        options={{ title: 'Edit an existing item' }}
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
                    <Stack.Screen
                        name='CameraScreen'
                        component={CameraScreen}
                        options={{ title: 'Take a snap' }}
                    />
                    <Stack.Screen
                        name='CameraPhotoScreen'
                        component={CameraPhotoScreen}
                        options={{ title: 'Your Picture' }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </ItemProvider>
    );
}

export default App;

