import React from "react";
import Proptypes from "prop-types"
import InterviewerListItem from "./InterviewerListItem";
import "components/InterviewerList.scss";



export default function InterviewerList(props) {
  const interviewerArr = props.interviewers.map((interviewer) => {
    return (
      <InterviewerListItem
        key={interviewer.id}
        name={interviewer.name}
        selected={interviewer.id === props.value}
        setInterviewer={() => props.setInterviewer(interviewer.id)}
        avatar={interviewer.avatar}
      />
    );
  });

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewerArr}</ul>
    </section>
  );
}

InterviewerList.propTypes = {
  interviewers: Proptypes.array.isRequired
};