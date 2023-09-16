import React, { useState } from 'react';

interface RegistrationFormProps {
    onRegister: (name: string) => void;
}

const RegistrationForm = ({ onRegister }: RegistrationFormProps) => {
  const [name, setName] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onRegister(name);
    setName('');
  };

  return (
    <form className="pl5 mw6" onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Name" 
        className="db h2 w-100 ba pl2 br2 b--black-30 mv2" 
        value={name}
        onChange={e => setName(e.target.value)}
      />
    </form>
  );
};

export default RegistrationForm;