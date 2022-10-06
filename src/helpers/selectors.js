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

export const getInterview = (state, interview) => {
  if (interview) {
    let result = {...interview};
    const interviewer = state.interviewers[interview.interviewer]
    result.interviewer = interviewer;
    return result;
  } 
  return null;
}