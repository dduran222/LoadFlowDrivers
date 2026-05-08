import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function EarningsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Earnings</Text>

      <View style={styles.toggle}>
        <Text style={styles.toggleActive}>Week</Text>
        <Text style={styles.toggleText}>Month</Text>
        <Text style={styles.toggleText}>Year</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>This Week</Text>
        <Text style={styles.amount}>$3,840.75</Text>
        <Text style={styles.green}>↑ 18% vs last week</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Load Stats</Text>

        <View style={styles.grid}>
          <View>
            <Text style={styles.stat}>11</Text>
            <Text style={styles.label}>Loads Completed</Text>
          </View>

          <View>
            <Text style={styles.stat}>1,248 mi</Text>
            <Text style={styles.label}>Miles Driven</Text>
          </View>

          <View>
            <Text style={styles.stat}>$3.08</Text>
            <Text style={styles.label}>Profit / Mile</Text>
          </View>

          <View>
            <Text style={styles.stat}>$349.16</Text>
            <Text style={styles.label}>Avg. Load Profit</Text>
          </View>
        </View>
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
    marginBottom: 20,
  },
  toggle: {
    flexDirection: 'row',
    backgroundColor: '#101A27',
    borderRadius: 999,
    padding: 6,
    marginBottom: 20,
  },
  toggleActive: {
    backgroundColor: 'white',
    color: '#050B12',
    paddingVertical: 10,
    paddingHorizontal: 22,
    borderRadius: 999,
    fontWeight: '800',
  },
  toggleText: {
    color: '#94A3B8',
    paddingVertical: 10,
    paddingHorizontal: 22,
    fontWeight: '700',
  },
  card: {
    backgroundColor: '#101A27',
    borderRadius: 18,
    padding: 20,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#1F2A3A',
  },
  label: {
    color: '#94A3B8',
    fontSize: 14,
  },
  amount: {
    color: '#7ED957',
    fontSize: 38,
    fontWeight: '900',
    marginTop: 8,
  },
  green: {
    color: '#7ED957',
    fontSize: 14,
    marginTop: 6,
  },
  cardTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 24,
  },
  stat: {
    color: 'white',
    fontSize: 22,
    fontWeight: '900',
    marginBottom: 4,
  },
});