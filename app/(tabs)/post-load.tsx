import { useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hafppzrgvoiteegdykvb.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhhZnBwenJndm9pdGVlZ2R5a3ZiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3ODI2MzUxOCwiZXhwIjoyMDkzODM5NTE4fQ.JKubCPSxILz2vTIAU9VILayWKDvWZuepOoigwlVZHUs";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function PostLoadScreen() {
  const [pickupCity, setPickupCity] = useState("");
  const [pickupState, setPickupState] = useState("");
  const [dropoffCity, setDropoffCity] = useState("");
  const [dropoffState, setDropoffState] = useState("");
  const [payAmount, setPayAmount] = useState("");
  const [miles, setMiles] = useState("");
  const [equipmentType, setEquipmentType] = useState("");
  const [loadWeight, setLoadWeight] = useState("");
  const [notes, setNotes] = useState("");

  async function postLoad() {
    if (
      !pickupCity ||
      !pickupState ||
      !dropoffCity ||
      !dropoffState ||
      !payAmount ||
      !miles ||
      !equipmentType
    ) {
      Alert.alert("Missing Info", "Please fill out all required fields.");
      return;
    }

    const { error } = await supabase.from("loads").insert([
      {
        pickup_city: pickupCity,
        pickup_state: pickupState,
        dropoff_city: dropoffCity,
        dropoff_state: dropoffState,
        pay_amount: Number(payAmount),
        miles: Number(miles),
        equipment_type: equipmentType,
        load_weight: Number(loadWeight || 0),
        notes: notes,
        status: "open",
      },
    ]);

    if (error) {
      Alert.alert("Error", error.message);
      return;
    }

    Alert.alert("Success", "Load posted live.");

    setPickupCity("");
    setPickupState("");
    setDropoffCity("");
    setDropoffState("");
    setPayAmount("");
    setMiles("");
    setEquipmentType("");
    setLoadWeight("");
    setNotes("");
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Post a Live Load</Text>

      <TextInput
        style={styles.input}
        placeholder="Pickup City"
        value={pickupCity}
        onChangeText={setPickupCity}
      />

      <TextInput
        style={styles.input}
        placeholder="Pickup State"
        value={pickupState}
        onChangeText={setPickupState}
      />

      <TextInput
        style={styles.input}
        placeholder="Dropoff City"
        value={dropoffCity}
        onChangeText={setDropoffCity}
      />

      <TextInput
        style={styles.input}
        placeholder="Dropoff State"
        value={dropoffState}
        onChangeText={setDropoffState}
      />

      <TextInput
        style={styles.input}
        placeholder="Pay Amount"
        value={payAmount}
        onChangeText={setPayAmount}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Miles"
        value={miles}
        onChangeText={setMiles}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Equipment Type"
        value={equipmentType}
        onChangeText={setEquipmentType}
      />

      <TextInput
        style={styles.input}
        placeholder="Load Weight"
        value={loadWeight}
        onChangeText={setLoadWeight}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Notes"
        value={notes}
        onChangeText={setNotes}
      />

      <TouchableOpacity style={styles.button} onPress={postLoad}>
        <Text style={styles.buttonText}>Post Load</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    padding: 20,
  },

  title: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },

  input: {
    backgroundColor: "white",
    padding: 14,
    borderRadius: 10,
    marginBottom: 12,
  },

  button: {
    backgroundColor: "#22c55e",
    padding: 16,
    borderRadius: 12,
    marginTop: 10,
    marginBottom: 40,
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
});