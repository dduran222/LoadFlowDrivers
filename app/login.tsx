import { router } from 'expo-router';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>LoadFlow</Text>
      <Text style={styles.subtitle}>
        AI-powered freight optimization for drivers
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#94A3B8"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#94A3B8"
        secureTextEntry
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.replace('/(tabs)')}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/signup')}>
        <Text style={styles.signup}>
          Don’t have an account? Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050B12',
    justifyContent: 'center',
    padding: 24,
  },

  logo: {
    color: 'white',
    fontSize: 42,
    fontWeight: '900',
    marginBottom: 10,
  },

  subtitle: {
    color: '#94A3B8',
    fontSize: 16,
    marginBottom: 40,
    lineHeight: 24,
  },

  input: {
    backgroundColor: '#101A27',
    color: 'white',
    padding: 18,
    borderRadius: 14,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#1F2A3A',
    fontSize: 16,
  },

  button: {
    backgroundColor: '#7ED957',
    padding: 18,
    borderRadius: 14,
    marginTop: 10,
  },

  buttonText: {
    color: '#071108',
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '900',
  },

  signup: {
    color: '#94A3B8',
    textAlign: 'center',
    marginTop: 24,
    fontSize: 15,
  },
});