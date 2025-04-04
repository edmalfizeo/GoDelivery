import React, { useRef, useEffect } from 'react';
import {
  Animated,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Header from '../components/Header';

import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  Home: undefined;
  Login: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1200, // 1.2s
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={{ ...styles.container, opacity: fadeAnim }}>
      <Header />
      <Image
        source={require('../assets/images/motoboy_image.png')}
        style={{ width: 300, height: 300 }}
        resizeMode="contain"
      />

      <Text style={styles.title}>
        Receba seus produtos com rapidez e facilidade!
      </Text>
      <Text style={styles.subtitle}>
        Envie produtos com facilidade e velocidade relâmpago.
      </Text>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>Começar</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: 'PlusJakartaSans-Bold',
    color: '#000000',
    marginTop: 20,
    textAlign: 'center',
    width: '80%',
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    fontFamily: 'PlusJakartaSans-Regular',
  },
  buttonContainer: {
    marginTop: 20,
    width: '80%',
    borderRadius: 10,
    backgroundColor: '#E86F51',
    alignItems: 'center',
    paddingVertical: 12,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 5,
    fontFamily: 'PlusJakartaSans-Bold',
  },
});
