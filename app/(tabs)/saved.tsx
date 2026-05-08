import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function SavedScreen() {
  const savedLoads = [
    {
      id: 1,
      route: 'Dallas → Houston',
      pay: '$1,450',
      profit: '$425',
      miles: '239',
      score: '96%',
    },
    {
      id: 2,
      route: 'Tulsa → Little Rock',
      pay: '$980',
      profit: '$318',
      miles: '188',
      score: '89%',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Saved Loads</Text>
      <Text style={styles.subtitle}>Your highest-ranked opportunities</Text>

      {savedLoads.map((load) => (
        <View key={load.id} style={styles.card}>
          <View style={styles.rowBetween}>
            <Text style={styles.route}>{load.route}</Text>

            <View style={styles.scoreBadge}>
              <Text style={styles.scoreText}>{load.score}</Text>
            </View>
          </View>

          <View style={styles.statsRow}>
            <View>
              <Text style={styles.label}>Pay</Text>
              <Text style={styles.value}>{load.pay}</Text>
            </View>

            <View>
              <Text style={styles.label}>Profit</Text>
              <Text style={styles.green}>{load.profit}</Text>
            </View>

            <View>
              <Text style={styles.label}>Miles</Text>
              <Text style={styles.value}>{load.miles}</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>View Details</Text>
          </TouchableOpacity>
        </View>
      ))}
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
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#1F2A3A',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  route: {
    color: 'white',
    fontSize: 20,
    fontWeight: '800',
  },
  scoreBadge: {
    backgroundColor: '#7ED957',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  scoreText: {
    color: '#071108',
    fontWeight: '900',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 18,
  },
  label: {
    color: '#94A3B8',
    fontSize: 13,
  },
  value: {
    color: 'white',
    fontSize: 18,
    fontWeight: '800',
    marginTop: 4,
  },
  green: {
    color: '#7ED957',
    fontSize: 18,
    fontWeight: '900',
    marginTop: 4,
  },
  button: {
    backgroundColor: '#7ED957',
    padding: 14,
    borderRadius: 12,
  },
  buttonText: {
    color: '#071108',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 15,
  },
});