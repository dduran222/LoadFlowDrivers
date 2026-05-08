import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function FuelScreen() {
  const stations = [
    {
      id: 1,
      name: 'Love’s Travel Stop',
      city: 'Oklahoma City, OK',
      diesel: '$3.49',
    },
    {
      id: 2,
      name: 'Pilot Flying J',
      city: 'Dallas, TX',
      diesel: '$3.42',
    },
    {
      id: 3,
      name: 'TA Truck Stop',
      city: 'Tulsa, OK',
      diesel: '$3.58',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Fuel Prices</Text>
      <Text style={styles.subtitle}>
        Find the best diesel prices near your route
      </Text>

      {stations.map((station) => (
        <View key={station.id} style={styles.card}>
          <View style={styles.rowBetween}>
            <View>
              <Text style={styles.name}>{station.name}</Text>
              <Text style={styles.city}>{station.city}</Text>
            </View>

            <Text style={styles.price}>{station.diesel}</Text>
          </View>
        </View>
      ))}

      <View style={styles.aiCard}>
        <Text style={styles.aiTitle}>AI Savings Tip</Text>
        <Text style={styles.aiText}>
          Filling up in Dallas instead of Tulsa could save an estimated $34 this trip.
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
    marginBottom: 16,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    color: 'white',
    fontSize: 19,
    fontWeight: '900',
  },
  city: {
    color: '#CBD5E1',
    fontSize: 15,
    marginTop: 6,
  },
  price: {
    color: '#7ED957',
    fontSize: 28,
    fontWeight: '900',
  },
  aiCard: {
    backgroundColor: '#14532D',
    borderRadius: 18,
    padding: 20,
    marginTop: 10,
    marginBottom: 40,
  },
  aiTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '900',
    marginBottom: 8,
  },
  aiText: {
    color: '#DCFCE7',
    fontSize: 15,
    lineHeight: 22,
  },
});