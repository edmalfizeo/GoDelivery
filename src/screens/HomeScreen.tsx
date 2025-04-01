import React, { useRef, useEffect } from 'react';
import {
  Animated,
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const HomeScreen = () => {
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

      <TouchableOpacity style={styles.buttonContainer} onPress={() => {}}>
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
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 20,
    textAlign: 'center',
    width: '80%',
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
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
    fontWeight: 'bold',
  },
});
