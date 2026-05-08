import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function TripsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Active Trip</Text>

      <View style={styles.mapCard}>
        <Text style={styles.mapText}>Dallas, TX → Houston, TX</Text>
        <Text style={styles.mapSub}>Picked up 8:15 AM • Drop-off 12:50 PM</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Trip Progress</Text>
        <Text style={styles.info}>Accepted ✅</Text>
        <Text style={styles.info}>Picked Up ✅</Text>
        <Text style={styles.info}>In Transit 🟢</Text>
        <Text style={styles.info}>Delivered ⬜</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Update Status</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#050B12', padding: 20 },
  title: { color: 'white', fontSize: 34, fontWeight: '900', marginTop: 60, marginBottom: 20 },
  mapCard: {
    height: 180,
    backgroundColor: '#132033',
    borderRadius: 18,
    padding: 20,
    justifyContent: 'center',
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#1F2A3A',
  },
  mapText: { color: '#7ED957', fontSize: 22, fontWeight: '900', textAlign: 'center' },
  mapSub: { color: '#94A3B8', textAlign: 'center', marginTop: 8 },
  card: {
    backgroundColor: '#101A27',
    borderRadius: 18,
    padding: 20,
    borderWidth: 1,
    borderColor: '#1F2A3A',
  },
  cardTitle: { color: 'white', fontSize: 20, fontWeight: '900', marginBottom: 14 },
  info: { color: '#CBD5E1', fontSize: 16, marginBottom: 10 },
  button: { backgroundColor: '#7ED957', padding: 16, borderRadius: 14, marginTop: 14 },
  buttonText: { color: '#071108', textAlign: 'center', fontWeight: '900', fontSize: 16 },
});