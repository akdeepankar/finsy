'use client';
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUpForm = () => {
  const { register, handleSubmit, watch, control, formState: { errors } } = useForm();

  const handleSignUp = async (data) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
      console.log('User signed up:', userCredential.user);
    } catch (error) {
      console.error('Error signing up:', error.message);
    }
  };
  const handleError = (errors) => console.log(errors);

  const selectOptions = [
    { value: 'student', label: 'Student' },
    { value: 'professional', label: 'Working Professional' },
    { value: 'freelancer', label: 'Freelancer' },
    { value: 'businessman', label: 'Business' }
  ];

  const signupOptions = {
    name: { required: "Name is required" },
    email: { required: "Email is required" },
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters"
      }
    },
    confirmPassword: {
      required: "Please confirm your password",
      validate: (value) =>
        value === watch('password') || "Passwords do not match",
    },
    role: { required: "Role is required" }
  };

  return (
    <div
      style={{
        
        maxWidth: '600px',
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
      <h1 style={{ textAlign: 'center',fontSize:'42px', fontWeight: 'bold' }}>
        Sign Up
      </h1>
      <br></br>
      <form onSubmit={handleSubmit(handleSignUp, handleError)}>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            {...register('name', signupOptions.name)}
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid',
              borderColor: errors?.name ? 'red' : '#ccc',
              borderRadius: '4px',
            }}
          />
          {errors?.name && (
            <p style={{ color: 'red' }}>{errors.name.message}</p>
          )}
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            {...register('email', signupOptions.email)}
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
          <label htmlFor="role">Your Role</label>
          <Controller
            name="role"
            control={control}
            defaultValue=""
            rules={signupOptions.role}
            render={({ field }) => (
              <Select
                options={selectOptions}
                {...field}
                styles={{
                  container: (provided) => ({
                    ...provided,
                    border: errors?.role ? '1px solid red' : '1px solid #ccc',
                    borderRadius: '4px',
                    width: '100%',
                  }),
                  control: (provided) => ({
                    ...provided,
                    padding: '10px',
                  }),
                }}
              />
            )}
          />
          {errors?.role && (
            <p style={{ color: 'red' }}>{errors.role.message}</p>
          )}
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            {...register('password', signupOptions.password)}
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
        <div style={{ marginBottom: '20px' }}>
        <label htmlFor="confirmPassword">Re-enter Password</label>
        <input
          id="confirmPassword"
          type="password"
          {...register('confirmPassword', signupOptions.confirmPassword)}
          style={{
            width: '100%',
            padding: '10px',
            border: '1px solid',
            borderColor: errors?.confirmPassword ? 'red' : '#ccc',
            borderRadius: '4px',
          }}
        />
        {errors?.confirmPassword && (
          <p style={{ color: 'red' }}>{errors.confirmPassword.message}</p>
        )}
      </div>
      <br></br>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="newsletter" style={{ display: 'flex', alignItems: 'center' }}>
          <input
            id="newsletter"
            type="checkbox"
            {...register('newsletter')}
              style={{
              marginRight: '10px',
            }}
          />
          I want to receive newsletters from Finsy
          </label>
        </div>
        
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

export default SignUpForm;

