import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function AIScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>AI Suggestions</Text>
      <Text style={styles.subtitle}>Next best move based on profit, route, and backhaul chance</Text>

      <View style={styles.alertCard}>
        <Text style={styles.alertTitle}>Drop in Houston, TX</Text>
        <Text style={styles.alertText}>High chance of return load nearby</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Recommended Load</Text>
        <Text style={styles.route}>Houston, TX → Shreveport, LA</Text>
        <Text style={styles.pay}>$1,300</Text>
        <Text style={styles.info}>206 mi • 3h 40m • Flatbed</Text>
        <Text style={styles.profit}>Est. Profit: $410</Text>
        <Text style={styles.score}>90 Great Match</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>View Load</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Why this load?</Text>
        <Text style={styles.reason}>• High demand in this lane</Text>
        <Text style={styles.reason}>• Great pay and short deadhead</Text>
        <Text style={styles.reason}>• Strong backhaul probability</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#050B12', padding: 20 },
  title: { color: 'white', fontSize: 34, fontWeight: '900', marginTop: 60 },
  subtitle: { color: '#94A3B8', fontSize: 16, marginBottom: 24 },
  alertCard: {
    backgroundColor: '#14532D',
    borderRadius: 18,
    padding: 18,
    marginBottom: 18,
  },
  alertTitle: { color: 'white', fontSize: 20, fontWeight: '900' },
  alertText: { color: '#BBF7D0', fontSize: 15, marginTop: 6 },
  card: {
    backgroundColor: '#101A27',
    borderRadius: 18,
    padding: 20,
    borderWidth: 1,
    borderColor: '#1F2A3A',
    marginBottom: 18,
  },
  label: { color: '#94A3B8', fontSize: 14, marginBottom: 8 },
  route: { color: 'white', fontSize: 22, fontWeight: '900', marginBottom: 8 },
  pay: { color: '#7ED957', fontSize: 32, fontWeight: '900' },
  info: { color: '#CBD5E1', fontSize: 15, marginTop: 8 },
  profit: { color: '#7ED957', fontSize: 16, fontWeight: '800', marginTop: 10 },
  score: { color: '#7ED957', fontSize: 16, fontWeight: '900', marginTop: 8 },
  reason: { color: '#CBD5E1', fontSize: 16, marginBottom: 8 },
  button: { backgroundColor: '#7ED957', padding: 15, borderRadius: 14, marginTop: 18 },
  buttonText: { color: '#071108', textAlign: 'center', fontWeight: '900', fontSize: 16 },
});