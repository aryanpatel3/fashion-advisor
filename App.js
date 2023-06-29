import React from 'react';
import {ActivityIndicator, BottomNavigation, Button, Provider as PaperProvider, Text} from 'react-native-paper';
import {Alert, Image, SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {OvalFacePage, SquareFacePage} from './components/Pages';

const Stack = createStackNavigator();


const navigationRoutes = [
    {key: 'home', title: 'Home', icon: 'home'},
    {key: 'guides', title: 'Guides', icon: 'book'},
    {key: 'profile', title: 'Profile', icon: 'account'}
];

const App = () => {
    const [index, setIndex] = React.useState(0);
    const [loading, setLoading] = React.useState(false);
    const [faceShape, setFaceShape] = React.useState('');
    const [imageData, setImageData] = React.useState(null);

    function HomeScreen() {
        return (
            <SafeAreaView style={styles.contentContainer}>
                <ScrollView contentContainerStyle={styles.scrollableContainer}>
                    <View style={{flex: 1, justifyContent: 'center', margin: 20}}>
                        <Text style={{fontSize: 40, marginBottom: 20, fontWeight: "bold"}}>StyleSense</Text>
                        <Text style={{fontSize: 24, marginBottom: 20}}>Face Shape Detector</Text>
                        <Text style={{fontSize: 18, marginBottom: 20}}>Take a selfie or upload an image to get your face
                            shape!</Text>
                        <View style={{flexDirection: 'row'}}>
                            <Button mode="contained" onPress={handleCamera}>
                                Camera
                            </Button>
                            <Button mode="contained" onPress={handlePhotoGallery} style={{marginLeft: 10}}>
                                Photo Gallery
                            </Button>
                        </View>
                        {imageData && (
                            <Image source={{uri: imageData.uri}} style={{width: 300, height: 300, marginTop: 20}}/>)}
                        <Button mode="contained" onPress={handleDetect} style={{marginTop: 20}}>
                            Detect
                        </Button>
                        {loading && <ActivityIndicator style={{marginTop: 20}}/>}
                        {faceShape !== '' &&
                            <View style={{flex: 1}}>
                                <Text style={{fontSize: 18, marginTop: 10}}>Your face shape is {faceShape}</Text>
                                <Text style={{marginTop: 10}}>Go to the guide page {faceShape} face shapes for tips on
                                    how to style according to your face shape</Text>
                            </View>}
                    </View>
                </ScrollView>
            </SafeAreaView>);
    }

    function GuidePage() {
        const navigation = useNavigation();
        const handleGuideSelection = (shape) => {
            navigation.navigate(shape);
        };
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 24, marginBottom: 20}}>Face Shape Guides</Text>
                <Button mode="contained" onPress={() => handleGuideSelection('Oval')}>
                    Oval
                </Button>
                <Button mode="contained" onPress={() => handleGuideSelection('Square')} style={{marginTop: 10}}>
                    Square
                </Button>
            </View>
        )
    }

    function GuidesScreen() {
        return (<NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={GuidePage}/>
                <Stack.Screen name="Oval" component={OvalFacePage}/>
                <Stack.Screen name="Square" component={SquareFacePage}/>
            </Stack.Navigator>
        </NavigationContainer>);
    }

    function ProfileScreen() {
        return (
            <SafeAreaView style={styles.contentContainer}>
                <View style={styles.header}>
                    {/*<Image*/}
                    {/*    source={require('../assets/profile.jpg')}*/}
                    {/*    style={styles.profileImage}*/}
                    {/*/>*/}
                    <Text style={styles.username}>John Doe</Text>
                </View>
                <View style={styles.details}>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Personal Information</Text>
                        <View style={styles.infoItem}>
                            <Text style={styles.infoLabel}>Name:</Text>
                            <Text style={styles.infoValue}>John Doe</Text>
                        </View>
                        <View style={styles.infoItem}>
                            <Text style={styles.infoLabel}>Age:</Text>
                            <Text style={styles.infoValue}>28</Text>
                        </View>
                        <View style={styles.infoItem}>
                            <Text style={styles.infoLabel}>Location:</Text>
                            <Text style={styles.infoValue}>New York, USA</Text>
                        </View>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Interests</Text>
                        <Text style={styles.interestsText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </Text>
                    </View>
                </View>
            </SafeAreaView>);
    }

    const renderScene = BottomNavigation.SceneMap({
        home: HomeScreen, guides: GuidesScreen, profile: ProfileScreen,
    });

    const handleCamera = async () => {
        const {status} = await ImagePicker.requestCameraPermissionsAsync();

        if (status !== 'granted') {
            Alert.alert('Camera permission not granted');
            return;
        }

        const image = await ImagePicker.launchCameraAsync();

        if (!image.cancelled) {
            // Handle the taken selfie image
            setImageData(image);
            console.log(image);
        }
    };

    const handlePhotoGallery = async () => {
        const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (status !== 'granted') {
            Alert.alert('Media library permission not granted');
            return;
        }

        const image = await ImagePicker.launchImageLibraryAsync();

        if (!image.cancelled) {
            // Handle the uploaded image
            setImageData(image);
            console.log(image);
        }
    };

    const handleDetect = () => {
        setFaceShape('');
        setLoading(true);
        // Simulating detection process for 1 second
        setTimeout(() => {
            setFaceShape('oval');
            setLoading(false);
        }, 1000);
    };
    return (
        <PaperProvider>
            <View style={{flex: 1}}>
                <BottomNavigation
                    navigationState={{index, routes: navigationRoutes}}
                    onIndexChange={setIndex}
                    renderScene={renderScene}
                />
            </View>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    header: {
        alignItems: 'center', marginBottom: 20,
    },
    profileImage: {
        width: 120, height: 120, borderRadius: 60, marginBottom: 10,
    },
    username: {
        fontSize: 24, fontWeight: 'bold',
    },
    details: {
        flex: 1,
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 20, fontWeight: 'bold', marginBottom: 10,
    },
    infoItem: {
        flexDirection: 'row', marginBottom: 5,
    },
    infoLabel: {
        fontWeight: 'bold', marginRight: 5,
    },
    infoValue: {
        flex: 1,
    },
    interestsText: {
        fontSize: 16, lineHeight: 24,
    },
    scrollableContainer: {
        flexGrow: 1,
    },
    contentContainer: {
        flexGrow: 1,
        margin: 20
    },
});

export default App;
