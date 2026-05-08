import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function MapScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Load Map</Text>
      <Text style={styles.subtitle}>Visual route and nearby load opportunities</Text>

      <View style={styles.mapBox}>
        <Text style={styles.mapText}>Map Preview</Text>
        <Text style={styles.mapSub}>Dallas → Houston</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Nearby Loads</Text>
        <Text style={styles.info}>• Dallas, TX → Houston, TX • $1,450</Text>
        <Text style={styles.info}>• Fort Worth, TX → Tulsa, OK • $1,220</Text>
        <Text style={styles.info}>• Austin, TX → OKC • $1,680</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>AI Route Insight</Text>
        <Text style={styles.info}>
          Houston has stronger backhaul probability today based on your preferred lanes.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#050B12', padding: 20 },
  title: { color: 'white', fontSize: 34, fontWeight: '900', marginTop: 60 },
  subtitle: { color: '#94A3B8', fontSize: 16, marginBottom: 24 },
  mapBox: {
    height: 260,
    backgroundColor: '#132033',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#7ED957',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 18,
  },
  mapText: { color: '#7ED957', fontSize: 28, fontWeight: '900' },
  mapSub: { color: '#CBD5E1', marginTop: 8, fontSize: 16 },
  card: {
    backgroundColor: '#101A27',
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    borderColor: '#1F2A3A',
    marginBottom: 16,
  },
  cardTitle: { color: 'white', fontSize: 20, fontWeight: '900', marginBottom: 10 },
  info: { color: '#CBD5E1', fontSize: 16, marginBottom: 8, lineHeight: 22 },
});