import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function BrokersScreen() {
  const brokers = [
    {
      id: 1,
      name: 'Sooner Freight Co.',
      lane: 'OK • TX • AR',
      rating: '4.9',
      note: 'Fast pay • Hotshot friendly',
    },
    {
      id: 2,
      name: 'Lone Star Loads',
      lane: 'TX • LA • OK',
      rating: '4.7',
      note: 'Strong backhaul options',
    },
    {
      id: 3,
      name: 'RouteMax Logistics',
      lane: 'Midwest routes',
      rating: '4.6',
      note: 'Flatbed and box truck loads',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Brokers</Text>
      <Text style={styles.subtitle}>Trusted freight partners near your lanes</Text>

      {brokers.map((broker) => (
        <View key={broker.id} style={styles.card}>
          <View style={styles.rowBetween}>
            <Text style={styles.name}>{broker.name}</Text>
            <Text style={styles.rating}>★ {broker.rating}</Text>
          </View>

          <Text style={styles.lane}>{broker.lane}</Text>
          <Text style={styles.note}>{broker.note}</Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Contact Broker</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#050B12', padding: 20 },
  title: { color: 'white', fontSize: 34, fontWeight: '900', marginTop: 60 },
  subtitle: { color: '#94A3B8', fontSize: 16, marginBottom: 24 },
  card: {
    backgroundColor: '#101A27',
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    borderColor: '#1F2A3A',
    marginBottom: 16,
  },
  rowBetween: { flexDirection: 'row', justifyContent: 'space-between' },
  name: { color: 'white', fontSize: 20, fontWeight: '900' },
  rating: { color: '#7ED957', fontSize: 16, fontWeight: '900' },
  lane: { color: '#CBD5E1', fontSize: 15, marginTop: 8 },
  note: { color: '#94A3B8', fontSize: 15, marginTop: 8 },
  button: {
    backgroundColor: '#7ED957',
    padding: 14,
    borderRadius: 12,
    marginTop: 18,
  },
  buttonText: {
    color: '#071108',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 15,
  },
});