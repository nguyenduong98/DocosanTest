import { Status } from "../enum/Status.enum";

const getScheduleByTime = (doctors, time) => {
  let scheduleInTime = [];
  doctors.data.forEach((doctor) => {
    const schedule = doctor.appoitment_calendar.filter(
      (item) =>
        new Date(item.start_time.replaceAll("-", "/")).getHours() === time
    );
    scheduleInTime = [...scheduleInTime, ...schedule];
  });
  return scheduleInTime;
};

const getStatusColor = (status) => {
  switch (status) {
    case Status.PASS:
      return '#333333'
    case Status.PENDING:
      return '#D62D68'
    case Status.APPROVED:
      return '#4AC0A4'

    default:
      break;
  }
};

export const ScheduleUtility = {
  getScheduleByTime,
  getStatusColor
};
