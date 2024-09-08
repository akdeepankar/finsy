'use client';

import { useForm } from 'react-hook-form';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'; 
import app from '../firebase'

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const auth = getAuth(app);
  const [loginError, setLoginError] = useState(null);

  const handleLogin = (data) => {
    const { email, password } = data;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('Logged in:', userCredential.user);
        setLoginError(null);  
      })
      .catch((error) => {
        console.error('Login error:', error.message);
        setLoginError('Invalid email or password');
      });
  };

  const handleError = (errors) => console.log(errors);

  const loginOptions = {
    email: { required: "Email is required" },
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters"
      }
    }
  };

  return (
    <div
      style={{
        maxWidth: '480px',
        minWidth: '320px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        margin: '0 auto', 
      }}
    >
      <h1 style={{ textAlign: 'center',fontSize:'32px', fontWeight: 'bold' }}>
        Login
      </h1>
      <br></br>
      <br></br>
      <form onSubmit={handleSubmit(handleLogin, handleError)}>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            {...register('email', loginOptions.email)}
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid',
              borderColor: errors?.email ? 'red' : '#ccc',
              borderRadius: '4px',
            }}
          />
          {errors?.email && (
            <p style={{ color: 'red' }}>{errors.email.message}</p>
          )}
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            {...register('password', loginOptions.password)}
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid',
              borderColor: errors?.password ? 'red' : '#ccc',
              borderRadius: '4px',
            }}
          />
          {errors?.password && (
            <p style={{ color: 'red' }}>{errors.password.message}</p>
          )}
        </div>
        <br></br>
        {loginError && (
          <p style={{ color: 'red', textAlign: 'center' }}>{loginError}</p>
        )}
        <button
          type="submit"
          style={{
            backgroundColor: '#0070f3',
            color: '#fff',
            padding: '10px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            width: '100%',
          }}
        >
          Submit
        </button>
        
      </form>
      <br></br>
    </div>
  );
};

export default LoginForm;



    