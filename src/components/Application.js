import React from "react";

import "components/Application.scss";
import DayList from "./DayList";
import Appointment from "./Appointment";
import { getAppointmentsForDay, getInterviewersForDay, getInterview } from "helpers/selectors";
import { useApplicationData } from "hooks/useApplicationData";

export default function Application() {
  const {
    state,
    setDay,
    bookInterview,
    cancelInterview
  } = useApplicationData();

  // getAppointmentsForDay function returns the appointments array based on the state.day
  const dailyAppointments = getAppointmentsForDay(state, state.day)

  // getInterviewersForDay returns the interviewers array based on the state.day
  const interviewers = getInterviewersForDay(state, state.day)

  // Map through appointments array, turn the interview number to an object,
  // and render the Appointment components for the day
  
  const schedule = dailyAppointments.map(app => {
    const interview = getInterview(state, app.interview)
    return <Appointment 
    key={app.id} 
    id={app.id}
    time={app.time} 
    interview={interview}
    interviewers={interviewers}
    bookInterview={bookInterview}
    cancelInterview={cancelInterview}
    />
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
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
