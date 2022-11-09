import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, View, Text } from 'react-native';
import { Camera } from 'expo-camera';

const CameraScreen = ({ navigation }) => {
    const [hasPermission, setHasPermission] = useState(null);
    const getPermission = async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === 'granted');
    };
    let camera;
    const getPicture = async () => {
        if (camera) {
            const photo = await camera.takePictureAsync();
            navigation.navigate('CameraPhotoScreen', { uri: photo.uri });
        };
    };
    useEffect(() => {getPermission();}, []);
    if (hasPermission === null) return <Text>Awaiting Permission</Text>;
    if (!hasPermission) return <Text>Access Denied!</Text>;

    return (
        <View style={styles.container}>
            <Camera style={styles.subContainer} ref={(ref) => camera = ref}>
                <Pressable style={styles.buttonStyle} onPress={() => getPicture()}>
                    <Text style={styles.textStyle}>Take Picture!</Text>
                </Pressable>
            </Camera>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    subContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row-reverse',
        alignItems: 'flex-end'
    },
    buttonStyle: {
        flex: 0.3,
        alignItems: 'center'
    },
    textStyle: {
        fontSize: 24,
        marginBottom: 15,
        color: 'yellow'
    }
});

export default CameraScreen;