import React from "react";
import classNames from "classnames";
import "components/InterviewerListItem.scss"

export default function InterviewerListItem (props) {
  const className = classNames("interviewers__item", {
    "interviewers__item--selected": props.selected
  });
  const imgClassName = classNames("interviewers__item-image", {
    "interviewers__item--selected-image": props.selected
  })

  return (
    <li onClick={props.setInterviewer} className={className}>
      <img
      className={imgClassName}
      src={props.avatar}
      alt={props.name}
      />
    {props.selected && props.name}
    </li>
  )
}