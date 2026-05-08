import { router } from 'expo-router';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function SignupScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Create Account</Text>
      <Text style={styles.subtitle}>Set up your LoadFlow driver profile</Text>

      <TextInput style={styles.input} placeholder="Full name" placeholderTextColor="#94A3B8" />
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#94A3B8" />
      <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#94A3B8" secureTextEntry />
      <TextInput style={styles.input} placeholder="Truck type" placeholderTextColor="#94A3B8" />
      <TextInput style={styles.input} placeholder="Home base city" placeholderTextColor="#94A3B8" />

      <TouchableOpacity style={styles.button} onPress={() => router.replace('/onboarding')}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/login')}>
        <Text style={styles.login}>Already have an account? Login</Text>
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
    fontSize: 36,
    fontWeight: '900',
    marginBottom: 10,
  },
  subtitle: {
    color: '#94A3B8',
    fontSize: 16,
    marginBottom: 32,
  },
  input: {
    backgroundColor: '#101A27',
    color: 'white',
    padding: 17,
    borderRadius: 14,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#1F2A3A',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#7ED957',
    padding: 18,
    borderRadius: 14,
    marginTop: 8,
  },
  buttonText: {
    color: '#071108',
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '900',
  },
  login: {
    color: '#94A3B8',
    textAlign: 'center',
    marginTop: 24,
    fontSize: 15,
  },
});