import { useState, useEffect } from 'react';
import { fetchTeamMembers } from './utils/api';
import TeamList from './components/TeamList';
import RegistrationForm from './components/RegistrationForm';
import './styling/App.css';

function App() {
  const [members, setMembers] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTeamMembers();
      setMembers(data);
    };

    fetchData();
  }, []);

  const handleRegister = (name: string) => {
    setMembers((prevMembers: string[]) => [...prevMembers, name]);
  };

  return (
    <div className="App flex vh-100 items-center">
      <div className="bg-cogs white pv4 ph5 h-100">
        <h1 className="f1 flex flex-column"><span>Join</span> <span>the</span> <span>team</span></h1>
        <TeamList members={members} />
      </div>
      <RegistrationForm onRegister={handleRegister} />
    </div>
  );
}

export default App;