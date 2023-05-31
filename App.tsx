import React, { useCallback, useState } from "react";

import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import ModernDatepicker from "react-native-modern-datepicker";

type IData = {
  inicial: string;
  final: string;
};

const App: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [data, setData] = useState<IData>({} as IData);
  const [type, setType] = useState<"inicial" | "final">("inicial");

  console.log("State:", data);

  const onDateChange = useCallback(
    (date: string) => {
      setData((oldState) => ({ ...oldState, [type]: date }));
      setShowModal(false);
    },
    [type]
  );

  const handleShowModal = useCallback((type: "inicial" | "final") => {
    setShowModal(true);
    setType(type);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native Modern Date Picker</Text>

      <TouchableOpacity
        activeOpacity={0.75}
        style={styles.buttom}
        onPress={() => handleShowModal("inicial")}
      >
        <Text style={styles.text}>{`Data Inicial: ${data.inicial}`}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.75}
        style={styles.buttom}
        onPress={() => handleShowModal("final")}
      >
        <Text style={styles.text}>{`Data Final: ${data.final}`}</Text>
      </TouchableOpacity>

      <Modal
        visible={showModal}
        transparent
        animationType="slide"
        onRequestClose={() => setShowModal(false)}
        hardwareAccelerated
      >
        <View style={styles.modal}>
          <View style={styles.content}>
            <ModernDatepicker
              mode="calendar"
              style={{ borderRadius: 12 }}
              selected={type === "inicial" ? data.inicial : data.final}
              options={{ textHeaderColor: "#D6C200" }}
              onDateChange={(date) => onDateChange(date)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },

  content: {
    width: "100%",
    height: "auto",
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },

  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },

  title: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 16,
  },

  buttom: {
    width: "100%",
    height: 60,
    backgroundColor: "#D6C200",
    borderRadius: 8,
    marginBottom: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: "#FFF",
    fontWeight: "bold",
  },
});
