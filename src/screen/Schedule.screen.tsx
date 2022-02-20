import React from 'react';
import {View, StyleSheet, Text, SafeAreaView, FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ItemScheduleScreen from './ItemSchedule.screen';

const ScheduleScreen: React.FC = () => {
  const time = Array.from(Array(10).keys());

  const renderHeader = () => {
    return (
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        locations={[0.05, 1]}
        colors={['#4AC0A4', '#70BDE9']}>
        <View style={styles.header}>
          <Text style={styles.title}>Lịch khám ngày 12/10/2020</Text>
        </View>
      </LinearGradient>
    );
  };

  const renderCalender = () => {
    return (
      <FlatList
        keyExtractor={item => `${item}`}
        data={time}
        renderItem={({item, index}) => <ItemScheduleScreen time={index + 8} />}
      />
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
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18
  },
});

export default ScheduleScreen;
