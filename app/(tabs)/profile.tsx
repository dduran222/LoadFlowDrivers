import { router } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

export default function ProfileScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#0f172a',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          color: 'white',
          fontSize: 28,
          fontWeight: 'bold',
          marginBottom: 20,
        }}
      >
        LoadFlow Profile
      </Text>

      <TouchableOpacity
        onPress={() => router.push('/settings')}
        style={{
          backgroundColor: '#2563eb',
          paddingHorizontal: 24,
          paddingVertical: 12,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
          }}
        >
          Settings
        </Text>
      </TouchableOpacity>
    </View>
  );
}