const getScheduleByTime = (doctors, time) => {
  let scheduleInTime = [];
  doctors.data.forEach(doctor => {
    const schedule = doctor.appoitment_calendar.filter(
      item => new Date(item.start_time.replaceAll('-', '/')).getHours() === time,
    );
    scheduleInTime = [...scheduleInTime, ...schedule];
  });
  return scheduleInTime;
};

export const ScheduleUtility = {
  getScheduleByTime,
};
