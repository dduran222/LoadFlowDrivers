import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function PostLoadScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Post </Text>
      <Text style={styles.subtitle}>Create a new freight opportunity</Text>

      <View style={styles.card}>
        <TextInput style={styles.input} placeholder="Pickup city" placeholderTextColor="#94A3B8" />
        <TextInput style={styles.input} placeholder="Dropoff city" placeholderTextColor="#94A3B8" />
        <TextInput style={styles.input} placeholder="Trailer type" placeholderTextColor="#94A3B8" />
        <TextInput style={styles.input} placeholder="Total pay" placeholderTextColor="#94A3B8" />
        <TextInput style={styles.input} placeholder="Estimated miles" placeholderTextColor="#94A3B8" />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Publish Load</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.aiCard}>
        <Text style={styles.aiTitle}>AI Pricing Tip</Text>
        <Text style={styles.aiText}>
          Loads with clear pay, trailer type, and pickup windows rank higher for drivers.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050B12',
    padding: 20,
  },
  title: {
    color: 'white',
    fontSize: 34,
    fontWeight: '900',
    marginTop: 60,
  },
  subtitle: {
    color: '#94A3B8',
    fontSize: 16,
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#101A27',
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    borderColor: '#1F2A3A',
    marginBottom: 18,
  },
  input: {
    backgroundColor: '#050B12',
    color: 'white',
    padding: 16,
    borderRadius: 14,
    marginBottom: 14,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#1F2A3A',
  },
  button: {
    backgroundColor: '#7ED957',
    padding: 16,
    borderRadius: 14,
    marginTop: 4,
  },
  buttonText: {
    color: '#071108',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 16,
  },
  aiCard: {
    backgroundColor: '#101A27',
    borderRadius: 18,
    padding: 20,
    borderWidth: 1,
    borderColor: '#7ED957',
    marginBottom: 40,
  },
  aiTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '900',
    marginBottom: 8,
  },
  aiText: {
    color: '#CBD5E1',
    fontSize: 15,
    lineHeight: 22,
  },
});