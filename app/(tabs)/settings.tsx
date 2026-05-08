import { router } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function SettingsScreen() {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.back}>← Back</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Settings</Text>

      <View style={styles.card}>
        <Text style={styles.item}>Notifications</Text>
        <Text style={styles.item}>Location Preferences</Text>
        <Text style={styles.item}>Truck Preferences</Text>
        <Text style={styles.item}>Payment Settings</Text>
        <Text style={styles.item}>Privacy & Security</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#050B12', padding: 20 },
  back: { color: '#CBD5E1', fontSize: 16, marginTop: 50, marginBottom: 12 },
  title: { color: 'white', fontSize: 34, fontWeight: '900', marginBottom: 20 },
  card: {
    backgroundColor: '#101A27',
    borderRadius: 18,
    padding: 20,
    borderWidth: 1,
    borderColor: '#1F2A3A',
  },
  item: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#1F2A3A',
  },
});