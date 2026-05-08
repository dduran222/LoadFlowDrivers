import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function MessagesScreen() {
  const conversations = [
    {
      id: 1,
      broker: 'Sooner Freight Co.',
      route: 'Dallas → Houston',
      message: 'Rate confirmation is ready. Pickup is confirmed for 2:00 PM.',
      time: '8:42 AM',
      unread: true,
    },
    {
      id: 2,
      broker: 'RouteMax Logistics',
      route: 'Tulsa → Little Rock',
      message: 'Can you confirm trailer type before dispatch?',
      time: 'Yesterday',
      unread: false,
    },
    {
      id: 3,
      broker: 'Lone Star Loads',
      route: 'Austin → OKC',
      message: 'Backhaul opportunity available near your route.',
      time: 'Mon',
      unread: false,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Messages</Text>
      <Text style={styles.subtitle}>Broker updates and load conversations</Text>

      {conversations.map((chat) => (
        <View key={chat.id} style={styles.card}>
          <View style={styles.rowBetween}>
            <Text style={styles.broker}>{chat.broker}</Text>
            <Text style={styles.time}>{chat.time}</Text>
          </View>

          <Text style={styles.route}>{chat.route}</Text>
          <Text style={styles.message}>{chat.message}</Text>

          {chat.unread && <Text style={styles.badge}>New</Text>}
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
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#1F2A3A',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  broker: {
    color: 'white',
    fontSize: 18,
    fontWeight: '800',
  },
  time: {
    color: '#94A3B8',
    fontSize: 13,
  },
  route: {
    color: '#7ED957',
    fontSize: 15,
    fontWeight: '800',
    marginTop: 8,
  },
  message: {
    color: '#CBD5E1',
    fontSize: 15,
    marginTop: 10,
    lineHeight: 21,
  },
  badge: {
    color: '#071108',
    backgroundColor: '#7ED957',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    fontWeight: '900',
    marginTop: 12,
  },
});