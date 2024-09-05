import { useForm } from "react-hook-form";

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const handleLogin = (data) => console.log(data);
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
    <form onSubmit={handleSubmit(handleLogin, handleError)}>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          {...register('email', loginOptions.email)}
        />
        <small className="text-danger">
          {errors?.email && errors.email.message}
        </small>
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          {...register('password', loginOptions.password)}
        />
        <small className="text-danger">
          {errors?.password && errors.password.message}
        </small>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;

    