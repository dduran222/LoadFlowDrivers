import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function NotificationsScreen() {
  const alerts = [
    {
      id: 1,
      title: 'High-profit load nearby',
      message: 'Dallas → Houston is scoring 96% for your truck type.',
      time: 'Just now',
    },
    {
      id: 2,
      title: 'Backhaul opportunity',
      message: 'AI found a return load near Houston after delivery.',
      time: '12 min ago',
    },
    {
      id: 3,
      title: 'Broker message',
      message: 'Sooner Freight Co. sent a rate confirmation.',
      time: '1 hr ago',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Notifications</Text>
      <Text style={styles.subtitle}>Important load and route updates</Text>

      {alerts.map((alert) => (
        <View key={alert.id} style={styles.card}>
          <Text style={styles.alertTitle}>{alert.title}</Text>
          <Text style={styles.message}>{alert.message}</Text>
          <Text style={styles.time}>{alert.time}</Text>
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
  alertTitle: { color: 'white', fontSize: 19, fontWeight: '900' },
  message: { color: '#CBD5E1', fontSize: 15, marginTop: 8, lineHeight: 21 },
  time: { color: '#7ED957', fontSize: 13, fontWeight: '800', marginTop: 12 },
});