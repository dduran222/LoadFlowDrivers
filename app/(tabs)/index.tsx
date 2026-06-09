import { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { supabase } from "../../.vscode/lib/supabase";

export default function HomeScreen() {
  const [loads, setLoads] = useState<any[]>([]);

  useEffect(() => {
    fetchLoads();
  }, []);

  async function fetchLoads() {
    const { data, error } = await supabase
      .from("loads")
      .select("*");

    if (!error) {
      setLoads(data || []);
    }
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#050816",
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HEADER */}
        <View style={{ padding: 20 }}>
          <Text
            style={{
              color: "#84cc16",
              fontSize: 34,
              fontWeight: "bold",
            }}
          >
            LOADFLOW
          </Text>

          <Text
            style={{
              color: "#9ca3af",
              marginTop: 4,
              letterSpacing: 2,
            }}
          >
            AI FREIGHT MARKETPLACE
          </Text>

          <Text
            style={{
              color: "white",
              fontSize: 32,
              fontWeight: "bold",
              marginTop: 25,
            }}
          >
            More Loads.
          </Text>

          <Text
            style={{
              color: "white",
              fontSize: 32,
              fontWeight: "bold",
            }}
          >
            Smarter Routes.
          </Text>

          <Text
            style={{
              color: "#84cc16",
              fontSize: 32,
              fontWeight: "bold",
            }}
          >
            Higher Profits.
          </Text>
        </View>

        {/* STATS */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 16,
          }}
        >
          <StatCard title="Loads" value={loads.length} />
          <StatCard title="Drivers" value="58" />
          <StatCard title="Brokers" value="23" />
        </View>

        {/* AI RECOMMENDED */}
        {loads.length > 0 && (
          <View
            style={{
              margin: 16,
              backgroundColor: "#111827",
              borderRadius: 18,
              padding: 18,
              borderWidth: 1,
              borderColor: "#1f2937",
            }}
          >
            <Text
              style={{
                color: "#84cc16",
                fontWeight: "bold",
                marginBottom: 10,
              }}
            >
              AI RECOMMENDED
            </Text>

            <Text
              style={{
                color: "white",
                fontSize: 24,
                fontWeight: "bold",
              }}
            >
              {loads[0].pickup_city}, {loads[0].pickup_state}
            </Text>

            <Text
              style={{
                color: "#84cc16",
                fontSize: 22,
                marginVertical: 5,
              }}
            >
              ↓
            </Text>

            <Text
              style={{
                color: "white",
                fontSize: 24,
                fontWeight: "bold",
              }}
            >
              {loads[0].dropoff_city}, {loads[0].dropoff_state}
            </Text>

            <Text
              style={{
                color: "#84cc16",
                fontSize: 36,
                fontWeight: "bold",
                marginTop: 15,
              }}
            >
              ${loads[0].pay_amount}
            </Text>

            <Text style={{ color: "#9ca3af" }}>
              {loads[0].miles} miles
            </Text>

            <TouchableOpacity
              style={{
                backgroundColor: "#84cc16",
                padding: 14,
                borderRadius: 12,
                marginTop: 20,
              }}
            >
              <Text
                style={{
                  color: "black",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                View Load Details
              </Text>
            </TouchableOpacity>
          </View>
        )}

        {/* LOADS */}
        <View style={{ paddingHorizontal: 16 }}>
          <Text
            style={{
              color: "white",
              fontSize: 22,
              fontWeight: "bold",
              marginBottom: 15,
            }}
          >
            AVAILABLE LOADS
          </Text>

          {loads.map((load) => (
            <View
              key={load.id}
              style={{
                backgroundColor: "#111827",
                borderRadius: 16,
                padding: 16,
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
                {load.pickup_city}, {load.pickup_state}
              </Text>

              <Text
                style={{
                  color: "#84cc16",
                  fontSize: 18,
                  marginVertical: 5,
                }}
              >
                ↓
              </Text>

              <Text
                style={{
                  color: "white",
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                {load.dropoff_city}, {load.dropoff_state}
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 15,
                }}
              >
                <Text style={{ color: "#9ca3af" }}>
                  {load.miles} mi
                </Text>

                <Text style={{ color: "#9ca3af" }}>
                  {load.equipment_type}
                </Text>

                <Text
                  style={{
                    color: "#84cc16",
                    fontWeight: "bold",
                  }}
                >
                  ${load.pay_amount}
                </Text>
              </View>
            </View>
          ))}
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

function StatCard({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) {
  return (
    <View
      style={{
        backgroundColor: "#111827",
        width: "31%",
        borderRadius: 16,
        padding: 15,
        alignItems: "center",
      }}
    >
      <Text
        style={{
          color: "#9ca3af",
          fontSize: 12,
        }}
      >
        {title}
      </Text>

      <Text
        style={{
          color: "#84cc16",
          fontSize: 24,
          fontWeight: "bold",
          marginTop: 5,
        }}
      >
        {value}
      </Text>
    </View>
  );
}