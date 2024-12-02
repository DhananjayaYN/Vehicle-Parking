import React from "react";
import "./Team.css";
import Avatar from "../Images/Avatar.png";

const Team = () => {
  const teamMembers = [
    { name: "Hansa Liviru", imgSrc: Avatar },
    { name: "Irosha Geethanjali", imgSrc: Avatar },
    { name: "Nimantha Madushan", imgSrc: Avatar },
    { name: "Sahan Devaka", imgSrc: Avatar },
    { name: "Nimesh CS UOR", imgSrc: Avatar },
    { name: "Lakshan CS UOR", imgSrc: Avatar },
  ];

  return (
    <div className="team-container">
      <p>Meet the <span>Team</span></p>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <img
              className="team-image"
              src={member.imgSrc}
              alt={member.name}
            />
            <p className="team-name">{member.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;