import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import Header from '../components/Header';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      {/* Ilustração */}
      <Image
        source={require('../assets/images/login_image.png')}
        style={styles.image}
      />
      <View style={styles.row}>
        {/* Título */}
        <Text style={styles.title}>Login</Text>
        <Text style={styles.register}>Registrar</Text>
      </View>

      <View style={styles.inputs}>
        <View style={styles.inputContainer}>
          <Image
            source={require('../assets/icons/user.png')} // Ícone de usuário
            style={styles.icon}
          />
          <TextInput placeholder="Username" style={styles.input} />
        </View>

        <View style={styles.inputContainer}>
          <Image
            source={require('../assets/icons/lock.png')} // Ícone de senha
            style={styles.icon}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry
            style={styles.input}
          />
        </View>
      </View>

      {/* Esqueceu a senha e Registrar */}
      <View style={styles.row2}>
        <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
      </View>

      {/* Botão de Login */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 20,
    marginLeft: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: 'PlusJakartaSans-Bold',
  },
  inputs: {
    width: '100%',
    gap: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  row2: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    marginBottom: 20,
    marginTop: 10,
  },
  register: {
    fontSize: 16,
    marginTop: 10,
    color: '#22A6B3',
    fontFamily: 'PlusJakartaSans-SemiBold',
  },
  forgotPassword: {
    color: '#666',
    fontFamily: 'PlusJakartaSans-SemiBold',
  },
  button: {
    marginTop: 20,
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#E86F51',
    alignItems: 'center',
    paddingVertical: 10,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 5,
    fontFamily: 'PlusJakartaSans-Bold',
  },
});

export default LoginScreen;
