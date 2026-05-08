import { router } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Profile</Text>

      <View style={styles.profileCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>D</Text>
        </View>

        <Text style={styles.name}>Destiny Duran</Text>
        <Text style={styles.rating}>★ 4.8 (128 reviews)</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.rowBetween}>
          <Text style={styles.cardTitle}>Truck Info</Text>
          <Text style={styles.edit}>Edit</Text>
        </View>

        <Text style={styles.info}>Hotshot / Flatbed</Text>
        <Text style={styles.info}>Preferred lanes: OK, TX, AR</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Documents</Text>
        <Text style={styles.info}>All documents verified ✅</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Payment Method</Text>
        <Text style={styles.info}>•••• 4242</Text>
      </View>

<TouchableOpacity style={styles.settingsButton} onPress={() => router.push('/documents' as any)}>
  <Text style={styles.settingsText}>Documents & CDL Verification</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.settingsButton} onPress={() => router.push('/settings')}>
  <Text style={styles.settingsText}>Open Settings</Text>
</TouchableOpacity>
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Log Out</Text>
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
  title: {
    color: 'white',
    fontSize: 34,
    fontWeight: '900',
    marginTop: 60,
    marginBottom: 20,
  },
  profileCard: {
    alignItems: 'center',
    backgroundColor: '#101A27',
    borderRadius: 18,
    padding: 24,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#1F2A3A',
  },
  avatar: {
    width: 82,
    height: 82,
    borderRadius: 41,
    backgroundColor: '#7ED957',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },
  avatarText: {
    color: '#071108',
    fontSize: 34,
    fontWeight: '900',
  },
  name: {
    color: 'white',
    fontSize: 24,
    fontWeight: '900',
  },
  rating: {
    color: '#CBD5E1',
    fontSize: 15,
    marginTop: 6,
  },
  card: {
    backgroundColor: '#101A27',
    borderRadius: 18,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#1F2A3A',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 10,
  },
  edit: {
    color: '#7ED957',
    fontWeight: '800',
  },
  info: {
    color: '#CBD5E1',
    fontSize: 16,
    marginBottom: 6,
  },
  settingsButton: {
  backgroundColor: '#7ED957',
  padding: 16,
  borderRadius: 14,
  marginTop: 10,
  marginBottom: 12,
},
settingsText: {
  color: '#071108',
  textAlign: 'center',
  fontSize: 16,
  fontWeight: '900',
},
  logoutButton: {
    borderWidth: 1,
    borderColor: '#EF4444',
    padding: 16,
    borderRadius: 14,
    marginTop: 10,
    marginBottom: 40,
  },
  logoutText: {
    color: '#EF4444',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '800',
  },
});