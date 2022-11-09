import { View, Image, StyleSheet } from 'react-native';
import NavigationButton from '../components/NavigationButton';

const CameraPhotoScreen = ({ route, navigation }) => {
    const { uri } = route.params;
    return (
        <View style={styles.container}>
            <Image style={styles.imageStyle} source={{ uri: uri }} />
            <NavigationButton screenName='CameraScreen' navigation={navigation} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageStyle: {
        flex: 1,
        alignSelf: 'stretch'
    }
});

export default CameraPhotoScreen;