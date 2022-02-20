import React from "react";
import { View, StyleSheet, Text, SafeAreaView, FlatList } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import ItemScheduleScreen from "./ItemSchedule.screen";

const ScheduleScreen: React.FC = () => {
  const time = Array.from(Array(10).keys());

  const renderHeader = () => {
    return (
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        locations={[0.05, 1]}
        colors={["#4AC0A4", "#70BDE9"]}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Lịch khám ngày 12/10/2020</Text>
        </View>
      </LinearGradient>
    );
  };

  const renderCalender = () => {
    return (
      <FlatList
        keyExtractor={(item) => `${item}`}
        data={time}
        ListFooterComponent={renderFooter()}
        renderItem={({ item, index }) => (
          <ItemScheduleScreen time={index + 8} indexTime={index} />
        )}
      />
    );
  };

  const renderTypeStatus = (color, text) => {
    return (
      <View style={styles.typeStatus}>
        <View style={[styles.dot, { backgroundColor: color }]}>
          <View style={styles.centerDot} />
        </View>
        <Text>{text}</Text>
      </View>
    );
  };

  const renderFooter = () => {
    return (
      <View style={styles.containerBottom}>
        <View style={styles.footer}>
          {renderTypeStatus("#333333", "Pass")}
          {renderTypeStatus("#D62D68", "Pending")}
          {renderTypeStatus("#4AC0A4", "Approve")}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderCalender()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: "center",
    width: "100%",
  },
  title: {
    fontWeight: "bold",
    color: "white",
    fontSize: 18,
  },
  containerBottom: {
    borderTopWidth: 2.5,
    borderBottomWidth: 2.5,
    borderColor: "#DDDDDD",
    height: 50,
    marginTop: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    width: "60%",
    height: 30,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "#4AC0A4",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  typeStatus: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 10,
    marginRight: 5,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
  centerDot: {
    backgroundColor: "white",
    width: 3,
    height: 3,
    borderRadius: 5,
  },
});

export default ScheduleScreen;
