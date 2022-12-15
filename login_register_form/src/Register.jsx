import React, {useState} from 'react';

export default function Register(props){
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFullname = (event) => {
    event.preventDefault();
    console.log(email);
  }

  return(
    <div className="auth-form-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleFullname}>
        <label htmlFor='name'>Full Name</label>
        <input value={fullName} type="text" placeholder='Full Name' id='name' name="name" onChange={(element) => setFullName(element.target.value)} />
        <label htmlFor="email">email</label>
        <input value={email} onChange={(element) => setEmail(element.target.value)} type="email" placeholder='email' id='email' name="email" />
        <label htmlFor="password">password</label>
        <input value={password} onChange={(element) => setPassword(element.target.value)} type="password" placeholder='password' id='password' name="password" />
        <button className="link-btn" onClick={() => { props.onFormSwitch('login')}} type="submit">Already have an account? Login here.</button>
      </form>
    </div>
  );
}
