import { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";

import { supabase } from "../../.vscode/lib/supabase";

export default function HomeScreen() {
  const [loads, setLoads] = useState<any[]>([]);
  useEffect(() => {
    console.log("STATE LOADS:", loads);
  }, [loads]);

  useEffect(() => {
    fetchLoads();
  }, []);

  async function fetchLoads() {
  const { data, error } = await supabase
    .from("loads")
    .select("*");

  console.log("DATA:", data);
  console.log("ERROR:", error);

  if (error) return;
  setLoads(data || []);
}

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#111827",
        padding: 16,
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 28,
          fontWeight: "bold",
          marginBottom: 20,
        }}
      >
        Live LoadFlow Loads ({loads.length})
      </Text>

      <ScrollView>
        {loads.map((load) => (
          <View
            key={load.id}
            style={{
              backgroundColor: "#1f2937",
              padding: 16,
              borderRadius: 12,
              marginBottom: 12,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              {load.pickup_city}, {load.pickup_state} → {load.dropoff_city}, {load.dropoff_state}
            </Text>

            <Text style={{ color: "#22c55e", marginTop: 8 }}>
              Pay: ${load.pay_amount}
            </Text>

            <Text style={{ color: "white" }}>
              Miles: {load.miles}
            </Text>

            <Text style={{ color: "white" }}>
              Equipment: {load.equipment_type}
            </Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}