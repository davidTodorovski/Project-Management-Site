import { useParams } from "react-router-dom";
import { useDocument } from "../../hooks/useDocument";
import ProjectSummary from "./ProjectSummary";

// styles
import "./Project.css";

import React from "react";
import ProjectComments from "./ProjectComments";

export default function Project() {
  const { id } = useParams();
  console.log(id);
  const { document, error } = useDocument("projects", id);

  // another way of working
  // render error
  if (error) {
    return <div className="error">{error}</div>;
  }
  //render loading
  if (!document) {
    return <div className="loading">Loading....</div>;
  }

  return (
    <div className="project-details">
      <ProjectSummary project={document} />
      <ProjectComments project={document} />
    </div>
  );
}
