import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ListItem from '../components/ListItem';
import NavigationButton from '../components/NavigationButton';

const IndexScreen = ({navigation}) => {
    return (
      <SafeAreaView style={styles.container}>
          <StatusBar />
          <Text style={styles.heading}>Flintstones and Rubbles</Text>
          <ScrollView horizontal={false}>
              <ListItem name='Fred' image={require('../../assets/fred.jpg')} />
              <ListItem name='Wilma' image={require('../../assets/wilma.png')} />
              <ListItem name='Pebbles' image={require('../../assets/pebbles.png')} />
              <ListItem name='Barney' image={require('../../assets/barney.jpg')} />
              <ListItem name='Bettie' image={require('../../assets/bettie.png')} />
              <ListItem name='Bamm-Bamm' image={require('../../assets/bamm.jpg')} />
              <NavigationButton screenName='ScreenOne' navigation={navigation} />
              <NavigationButton screenName='ScreenTwo' navigation={navigation} />
              <NavigationButton screenName='ListViewScreen' navigation={navigation} />
              <NavigationButton screenName='CameraScreen' navigation={navigation} />
              <NavigationButton screenName='SearchAPIScreen' navigation={navigation} />
              <NavigationButton screenName='YelpSearchAPIScreen' navigation={navigation} />
          </ScrollView>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    heading: {
        fontSize: 30, 
        fontWeight: 'bold', 
        color: 'green'
    }
});

export default IndexScreen;

