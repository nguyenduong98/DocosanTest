import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {data} from '../mock/data';
import {ScheduleUtility} from '../utility/schedule.utility';

interface IProps {
  time: number;
  indexTime: number
}

const ItemScheduleScreen: React.FC<IProps> = ({time, indexTime}) => {
  const schedules = ScheduleUtility.getScheduleByTime(data, time);

  const renderInformation = (schedule, numberScheduleInTime) => {
    const statusColor = ScheduleUtility.getStatusColor(schedule.status)
    return (
      <TouchableOpacity
        key={`${schedule.appointment_id}`}
        onPress={() => console.log('Click Schedule')}
        style={[
          styles.containerFullInformation,
          {
            width:
              numberScheduleInTime < 4
                ? `${(1 / numberScheduleInTime) * 100}%`
                : '40%',
          },
        ]}>
        <View style={[styles.color, {backgroundColor: schedule.color_code}]} />
        <View style={styles.fullInformation}>
          {schedule.avatar ? (
            <Image source={{uri: schedule.avatar}} style={styles.avatar} />
          ) : (
            <Image
              source={require('../assets/images/avatarAnynomousFemale.jpg')}
              style={styles.avatar}
            />
          )}
          <View style={styles.requester}>
            <Text>
              {numberScheduleInTime < 4
                ? schedule.requester
                : schedule.requester.charAt(0)}
            </Text>
          </View>
          <View style={styles.symptom}>
            <View style={[styles.dot, {backgroundColor: statusColor}]}>
              <View style={styles.centerDot} />
            </View>
            {numberScheduleInTime < 3 && (
              <Text numberOfLines={1}>{schedule.symptom}</Text>
            )}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.itemSchedule, {height: indexTime < 9 ? 100 : 20}]}>
      <View style={styles.container}>
        <Text>{time < 10 ? `0${time}` : time}:00</Text>
      </View>
      <View style={[styles.schedule, {height: indexTime < 9 ? 100 : 20}]}>
        {schedules.length > 4 ? (
          <ScrollView style={styles.containerSchedules} horizontal={true}>
            {schedules.map(schedule =>
              renderInformation(schedule, schedules.length),
            )}
          </ScrollView>
        ) : (
          <View style={styles.containerSchedules}>
            {schedules.map(schedule =>
              renderInformation(schedule, schedules.length),
            )}
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1/8
  },
  itemSchedule: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  schedule: {
    borderTopWidth: 2.5,
    marginTop: 7,
    flex: 9 / 10,
    borderColor: '#DDDDDD',
  },
  containerSchedules: {
    flex: 1,
    marginLeft: 20,
    flexDirection: 'row',
    borderLeftWidth: 2.5,
    borderLeftColor: '#DDDDDD',
    paddingLeft: 10,
  },
  containerFullInformation: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 8,
    borderColor: '#DDDDDD',
    borderWidth: 2.5,
    borderLeftWidth: 0,
    marginTop: 5,
    marginBottom: 5,
  },
  color: {
    width: 10,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 100,
  },
  fullInformation: {
    paddingLeft: 10,
    paddingTop: 5,
  },
  symptom: {
    flexDirection: 'row',
    width: '80%',
    alignItems: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 10,
    marginRight: 5,
    alignItems: 'center',
    justifyContent: "center",
  },
  centerDot: {
    backgroundColor: 'white',
    width: 3,
    height: 3,
    borderRadius: 5
  },
  requester: {
    marginTop: 4,
    marginBottom: 8,
  },
});

export default ItemScheduleScreen;
