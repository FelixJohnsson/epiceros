import React from 'react';

interface TeamListProps {
    members: string[];
}

const TeamList = ({ members }: TeamListProps) => (
  <ul className="pl3 lh-copy">
    {members.map(member => <li key={member}>{member}</li>)}
  </ul>
);

export default TeamList;