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
}

const ItemScheduleScreen: React.FC<IProps> = ({time}) => {
  const schedules = ScheduleUtility.getScheduleByTime(data, time);
  const renderInformation = (schedule, numberScheduleInTime) => {
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
            <View style={[styles.dot, {backgroundColor: schedule.color_code}]} />
            {numberScheduleInTime < 3 && (
              <Text numberOfLines={1}>{schedule.symptom}</Text>
            )}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.itemSchedule}>
      <View style={styles.container}>
        <Text>{time < 10 ? `0${time}` : time}:00</Text>
      </View>
      <View style={styles.schedule}>
        {schedules.length > 4 ? (
          <ScrollView style={[styles.containerSchedules]} horizontal={true}>
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
    height: 100,
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  schedule: {
    borderTopWidth: 2.5,
    height: 100,
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
    width: 7,
    height: 7,
    borderRadius: 10,
    marginRight: 5,
  },
  requester: {
    marginTop: 4,
    marginBottom: 8,
  },
});

export default ItemScheduleScreen;
