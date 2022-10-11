export const getAppointmentsForDay = (state, day) => {
  let result = [];
  let appArr;
  for (let dayObj of state.days) {
    if (dayObj.name === day) {
      appArr = dayObj.appointments;
    }
  }
  if (Array.isArray(appArr)) {
    for (let app of appArr) {
      result.push(state.appointments[app])
    }
  }
  return result;
}

export const getInterviewersForDay = (state, day) => {
  let result = [];
  let intArr;
  for (let dayObj of state.days) {
    if (dayObj.name === day) {
      intArr = dayObj.interviewers;
    }
  }
  if (Array.isArray(intArr)) {
    for (let int of intArr) {
      result.push(state.interviewers[int])
    }
  }
  return result;
}

export const getInterview = (state, interview) => {
  if (interview) {
    let result = {...interview};
    const interviewer = state.interviewers[interview.interviewer]
    result.interviewer = interviewer;
    return result;
  } 
  return null;
}

export const updateSpots = (state, appointments) => {
  const days = state.days;
  const day = days.filter(day => day.name === state.day)[0];
  const apps = day.appointments;
  let spots = apps.length;

  apps.forEach(id => {
    if (appointments[id].interview) {
      spots--;
    }
  });
  const updatedDay = { ...day, spots };

  let updatedDays = [...days].map((item) => {
    if (item.name === day.name) return updatedDay;
    return item;
  });
  return updatedDays;
};