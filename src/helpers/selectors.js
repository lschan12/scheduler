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
  const dayObj = state.days.find(day => day.name === state.day);

  let spots = 0;
  for (let id of dayObj.appointments) {
    const appointment = appointments[id];
    if (!appointment.interview) {
      spots ++;
    }
  }

  const day = {...dayObj, spots};
  const days = state.days.map(d => d.name === state.day ? day : d);


  return days;
};
