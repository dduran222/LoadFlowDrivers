import { router } from 'expo-router';
import { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { supabase } from '../.vscode/lib/supabase';

export default function SignupScreen() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignup() {
    if (!email || !password) {
      Alert.alert('Missing info', 'Please enter your email and password.');
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    });

    if (error) {
      Alert.alert('Signup failed', error.message);
      return;
    }

    const user = data.user;

    if (user) {
      await supabase.from('drivers').insert([
        {
          user_id: user.id,
          full_name: fullName,
          email: email,
        },
      ]);
    }

    Alert.alert('Account created');
    router.replace('/onboarding');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Create Account</Text>
      <Text style={styles.subtitle}>Set up your LoadFlow driver profile</Text>

      <TextInput
        style={styles.input}
        placeholder="Full name"
        placeholderTextColor="#94A3B8"
        value={fullName}
        onChangeText={setFullName}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#94A3B8"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#94A3B8"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
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