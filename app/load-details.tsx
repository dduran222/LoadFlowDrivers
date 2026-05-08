import { router } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function LoadDetailsScreen() {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.back}>← Back</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Load Details</Text>

      <View style={styles.mapBox}>
        <Text style={styles.mapText}>Dallas, TX → Houston, TX</Text>
        <Text style={styles.mapSubtext}>Route map preview</Text>
      </View>

      <View style={styles.payRow}>
        <View>
          <Text style={styles.route}>Dallas, TX</Text>
          <Text style={styles.route}>↓ Houston, TX</Text>
        </View>

        <View>
          <Text style={styles.pay}>$1,450</Text>
          <Text style={styles.small}>Total Pay</Text>
        </View>
      </View>

      <View style={styles.stats}>
        <View>
          <Text style={styles.statValue}>239 mi</Text>
          <Text style={styles.statLabel}>Distance</Text>
        </View>

        <View>
          <Text style={styles.statValue}>4h 35m</Text>
          <Text style={styles.statLabel}>Est. Time</Text>
        </View>

        <View>
          <Text style={styles.statValue}>Flatbed</Text>
          <Text style={styles.statLabel}>Trailer</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Earnings Breakdown</Text>

        <View style={styles.breakdownRow}>
          <Text style={styles.label}>Line Haul Pay</Text>
          <Text style={styles.value}>$1,450.00</Text>
        </View>

        <View style={styles.breakdownRow}>
          <Text style={styles.label}>Fuel Cost Est.</Text>
          <Text style={styles.negative}>-$625.00</Text>
        </View>

        <View style={styles.breakdownRow}>
          <Text style={styles.label}>Deadhead Est.</Text>
          <Text style={styles.negative}>-$400.00</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.breakdownRow}>
          <Text style={styles.profitLabel}>Est. Profit</Text>
          <Text style={styles.profit}>$425.00</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.acceptButton}>
        <Text style={styles.acceptText}>Accept Load</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.rejectButton}>
        <Text style={styles.rejectText}>Reject</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050B12',
    padding: 20,
  },
  back: {
    color: '#CBD5E1',
    fontSize: 16,
    marginTop: 50,
    marginBottom: 12,
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: '800',
    marginBottom: 18,
  },
  mapBox: {
    height: 170,
    backgroundColor: '#132033',
    borderRadius: 18,
    padding: 20,
    justifyContent: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#1F2A3A',
  },
  mapText: {
    color: '#7ED957',
    fontSize: 22,
    fontWeight: '900',
    textAlign: 'center',
  },
  mapSubtext: {
    color: '#94A3B8',
    textAlign: 'center',
    marginTop: 8,
  },
  payRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  route: {
    color: 'white',
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 4,
  },
  pay: {
    color: '#7ED957',
    fontSize: 30,
    fontWeight: '900',
    textAlign: 'right',
  },
  small: {
    color: '#94A3B8',
    textAlign: 'right',
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#101A27',
    borderRadius: 16,
    padding: 18,
    marginBottom: 18,
  },
  statValue: {
    color: 'white',
    fontSize: 16,
    fontWeight: '800',
  },
  statLabel: {
    color: '#94A3B8',
    fontSize: 12,
    marginTop: 4,
  },
  card: {
    backgroundColor: '#101A27',
    borderRadius: 18,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#1F2A3A',
  },
  cardTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 16,
  },
  breakdownRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  label: {
    color: '#CBD5E1',
    fontSize: 15,
  },
  value: {
    color: 'white',
    fontSize: 15,
  },
  negative: {
    color: '#FCA5A5',
    fontSize: 15,
  },
  divider: {
    height: 1,
    backgroundColor: '#334155',
    marginVertical: 10,
  },
  profitLabel: {
    color: '#7ED957',
    fontSize: 18,
    fontWeight: '800',
  },
  profit: {
    color: '#7ED957',
    fontSize: 22,
    fontWeight: '900',
  },
  acceptButton: {
    backgroundColor: '#7ED957',
    padding: 16,
    borderRadius: 14,
    marginBottom: 12,
  },
  acceptText: {
    color: '#071108',
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '900',
  },
  rejectButton: {
    padding: 16,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#334155',
    marginBottom: 40,
  },
  rejectText: {
    color: '#CBD5E1',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
  },
});