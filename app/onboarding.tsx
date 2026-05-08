import { router } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function OnboardingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>What do you drive?</Text>
      <Text style={styles.subtitle}>
        LoadFlow will rank loads based on your setup.
      </Text>

      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Hotshot</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Flatbed</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Box Truck</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Dry Van</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.replace('/(tabs)')}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050B12',
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 36,
    fontWeight: '900',
    marginBottom: 10,
  },
  subtitle: {
    color: '#94A3B8',
    fontSize: 16,
    marginBottom: 30,
    lineHeight: 23,
  },
  option: {
    backgroundColor: '#101A27',
    borderWidth: 1,
    borderColor: '#1F2A3A',
    padding: 18,
    borderRadius: 14,
    marginBottom: 14,
  },
  optionText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '800',
  },
  button: {
    backgroundColor: '#7ED957',
    padding: 18,
    borderRadius: 14,
    marginTop: 18,
  },
  buttonText: {
    color: '#071108',
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '900',
  },
});