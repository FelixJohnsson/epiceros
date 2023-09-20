import { useState } from 'react';

interface RegistrationFormProps {
    onRegister: (name: string, email: string) => void;
}

const RegistrationForm = ({ onRegister }: RegistrationFormProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (termsAccepted) {
      onRegister(name, email);
      setName('');
      setEmail('');
    } else {
      alert("Please accept the terms before registering.");
    }
  };

  return (
    <form className="pl5 mw6 form" onSubmit={handleSubmit}>
      <h2 className="navy f3 mt0 mb5">Register</h2>
      <h3 className="navy f4">Team player - Be positive - Beat yesterday</h3>
      <p className="measure black-60 lh-copy f6">Together we re-define the experience of online gaming through gamification and novel technical solutions.</p>
      <input 
        type="text" 
        placeholder="Name" 
        className="db h2 w-100 ba pl2 br2 b--black-30 mv2" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Email" 
        className="db h2 w-100 ba pl2 br2 b--black-30 mv2" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <div className="mv3">
        <input 
          type="checkbox" 
          id="terms" 
          name="terms" 
          checked={termsAccepted} 
          onChange={() => setTermsAccepted(!termsAccepted)} 
        />
        <label htmlFor="terms">I agree to the terms <span className="white f7">and I'll bring nice fika every friday ;)</span></label>
      </div>
      <button type="submit" className="ph4 pv2 bg-blue white br2 bn mt3 grow pointer">I'm in, sign me up!</button>
    </form>
  );
};

export default RegistrationForm;