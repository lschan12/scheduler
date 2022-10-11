import { useEffect, useReducer } from "react";
import Axios from "axios";
import { updateSpots } from "helpers/selectors";

export const useApplicationData = () => {
  const SET_DAY = "SET_DAY";
  const SET_DAYS = "SET_DAYS";
  const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";
  const SET_APPOINTMENTS = "SET_APPOINTMENTS";

  const reducer = (state, action) => {
    const reducers = {
      SET_DAY: state => ({...state, day: action.day}),
      SET_DAYS: state => ({...state, days: action.days}),
      SET_APPLICATION_DATA: state => ({
        ...state,
        days: action.days,
        appointments: action.appointments,
        interviewers: action.interviewers,
      }),
      SET_APPOINTMENTS: state => ({...state, appointments: action.appointments}),
      default: () => console.log("Error")
    }
    return reducers[action.type](state) || reducers.default();
  }

  const [state, dispatch] = useReducer(reducer, {
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  })

  const setDay = (day) => {
    dispatch({
      type: SET_DAY,
      day: day
    })
  }

  useEffect(() => {
    Promise.all([
      Axios.get("/api/days"),
      Axios.get("/api/appointments"),
      Axios.get("/api/interviewers")
    ]).then((all) => {
      dispatch({
        type: SET_APPLICATION_DATA,
        appointments: all[1].data,
        interviewers: all[2].data,
        days: all[0].data
      })
    })
  }, [])
  
  const bookInterview = (id, interview) => {
    const appointment = {
      ...state.appointments[id],
      interview: {...interview}
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    }
    return Axios.put(`/api/appointments/${id}`, appointment)
      .then(() => dispatch({
        type: SET_APPOINTMENTS,
        appointments: appointments
      }))
      .then(() => dispatch({
        type: SET_DAYS,
        days: updateSpots(state, appointments)
    }))
  };

  const cancelInterview = (id) => {
    const appointment = {
      ...state.appointments[id],
      interview: null
    }
    const appointments = {
      ...state.appointments,
      [id]: appointment
    }
    return Axios.delete(`/api/appointments/${id}`, appointment)
      .then(() => dispatch({
        type:SET_APPOINTMENTS,
        appointments: appointments
      })).then(() => dispatch({
        type: SET_DAYS,
        days: updateSpots(state, appointments)
    }));
  };

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview
  }
}


