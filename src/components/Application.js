import React, { useState, useEffect } from "react";
import Axios from "axios";

import "components/Application.scss";
import DayList from "./DayList";
import Appointment from "./Appointment";
import { getAppointmentsForDay, getInterview } from "helpers/selectors";

export default function Application(props) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  })

  useEffect(() => {
    Promise.all([
      Axios.get("/api/days"),
      Axios.get("/api/appointments"),
      Axios.get("/api/interviewers")
    ]).then((all) => {
      setAppointments(all[1].data);
      setInterviewers(all[2].data);
      setDays(all[0].data);
    })
  }, [])

  const setDay = (day) => setState(prev => ({...prev, day})); 
  const setDays = (days) => setState(prev => ({...prev, days}));
  const setAppointments = (appointments) => setState(prev => ({...prev, appointments}));
  const setInterviewers = (interviewers) => setState(prev => ({...prev, interviewers}));

  const dailyAppointments = getAppointmentsForDay(state, state.day)
  const schedule = dailyAppointments.map(app => {
    const interview = getInterview(state, app.interview)
    return <Appointment 
    key={app.id} 
    id={app.id}
    time={app.time} 
    interview={interview} />
  })


  return (
    <main className="layout">
      <section className="sidebar">
      <img
        className="sidebar--centered"
        src="images/logo.png"
        alt="Interview Scheduler"
      />
      <hr className="sidebar__separator sidebar--centered" />
      <nav className="sidebar__menu">
      <DayList
        days={state.days}
        value={state.day}
        onChange={setDay}
      />
      </nav>
      <img
        className="sidebar__lhl sidebar--centered"
        src="images/lhl.png"
        alt="Lighthouse Labs"
      />
      </section>
      <section className="schedule">
        {schedule}
      </section>
    </main>
  );
}
