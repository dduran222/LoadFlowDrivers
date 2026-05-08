import { router } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.greeting}>Good morning, Destiny 👋</Text>
      <Text style={styles.subtitle}>Let’s get you rolling.</Text>

      <View style={styles.overviewCard}>
        <Text style={styles.cardTitle}>Today’s Overview</Text>

        <View style={styles.statsGrid}>
          <View>
            <Text style={styles.statLabel}>Total Earnings</Text>
            <Text style={styles.money}>$1,320.50</Text>
          </View>

          <View>
            <Text style={styles.statLabel}>Loads Completed</Text>
            <Text style={styles.statValue}>3</Text>
          </View>

          <View>
            <Text style={styles.statLabel}>Miles Driven</Text>
            <Text style={styles.statValue}>412 mi</Text>
          </View>

          <View>
            <Text style={styles.statLabel}>Profit / Mile</Text>
            <Text style={styles.statValue}>$3.21</Text>
          </View>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Top Opportunity Near You</Text>

      <View style={styles.loadCard}>
        <View style={styles.rowBetween}>
          <View>
            <Text style={styles.route}>Dallas, TX</Text>
            <Text style={styles.route}>↓ Houston, TX</Text>
          </View>

          <View>
            <Text style={styles.pay}>$1,450</Text>
            <Text style={styles.smallText}>Est. Profit $425</Text>
          </View>
        </View>

        <View style={styles.tripStats}>
          <Text style={styles.tripText}>239 mi</Text>
          <Text style={styles.tripText}>4h 35m</Text>
          <Text style={styles.tripText}>Flatbed</Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/load-details')}
        >
          <Text style={styles.buttonText}>View Loads</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.aiCard}>
        <Text style={styles.cardTitle}>AI Recommendation</Text>
        <Text style={styles.aiText}>High demand lane</Text>
        <Text style={styles.aiSubtext}>Move toward Austin, TX for better backhaul chances.</Text>
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
  greeting: {
    color: 'white',
    fontSize: 28,
    fontWeight: '800',
    marginTop: 60,
  },
  subtitle: {
    color: '#94A3B8',
    fontSize: 16,
    marginBottom: 22,
  },
  overviewCard: {
    backgroundColor: '#101A27',
    borderRadius: 18,
    padding: 20,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#1F2A3A',
  },
  cardTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 16,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
  },
  statLabel: {
    color: '#94A3B8',
    fontSize: 13,
  },
  money: {
    color: '#7ED957',
    fontSize: 28,
    fontWeight: '900',
    marginTop: 4,
  },
  statValue: {
    color: 'white',
    fontSize: 22,
    fontWeight: '800',
    marginTop: 4,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
  },
  loadCard: {
    backgroundColor: '#101A27',
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    borderColor: '#7ED957',
    marginBottom: 18,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  route: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
  },
  pay: {
    color: '#7ED957',
    fontSize: 26,
    fontWeight: '900',
    textAlign: 'right',
  },
  smallText: {
    color: '#94A3B8',
    fontSize: 12,
    textAlign: 'right',
  },
  tripStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#0B1220',
    padding: 14,
    borderRadius: 12,
    marginTop: 18,
    marginBottom: 16,
  },
  tripText: {
    color: '#CBD5E1',
    fontWeight: '700',
  },
  button: {
    backgroundColor: '#7ED957',
    padding: 15,
    borderRadius: 12,
  },
  buttonText: {
    color: '#071108',
    fontSize: 16,
    fontWeight: '900',
    textAlign: 'center',
  },
  aiCard: {
    backgroundColor: '#101A27',
    borderRadius: 18,
    padding: 20,
    borderWidth: 1,
    borderColor: '#1F2A3A',
    marginBottom: 40,
  },
  aiText: {
    color: 'white',
    fontSize: 17,
    fontWeight: '700',
  },
  aiSubtext: {
    color: '#94A3B8',
    fontSize: 15,
    marginTop: 6,
  },
});