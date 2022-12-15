import React, {useState} from 'react';

export default function Login(props){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email);
  }

  return(
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input value={email} onChange={(element) => setEmail(element.target.value)} type="email" placeholder="youremail@email.com" id="email" name="email"/>
        <label htmlFor="password">password</label>
        <input value={password} onChange={(element) => setPassword(element.target.value)} type="password" placeholder="************" id="password" name="password" />
        <button htmlFor="submit">Login</button>
      </form>
      <button className="link-btn" onClick={() => { props.onFormSwitch('register')}} type="submit">Don't have an account? Register here.</button>
    </div>
  );
}
