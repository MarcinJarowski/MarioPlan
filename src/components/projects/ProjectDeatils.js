import React from "react";

const ProjectDeatils = props => {
  const id = props.match.params.id;

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Cillum consequat Lorem velit consectetur occaecat est esse est
            ullamco et aliqua.
          </p>
        </div>
        <div className="card-action grid lighten-4 grey-text">
          <div>Posted by MJ</div>
          <div>23 Sept 2pm</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDeatils;
