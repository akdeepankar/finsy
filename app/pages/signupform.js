import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import Link from 'next/link';

const SignUpForm = () => {
  const { register, handleSubmit, control, formState: { errors } } = useForm();

  const handleSignUp = (data) => console.log(data);
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
    role: { required: "Role is required" }
  };

  return (
    <form onSubmit={handleSubmit(handleSignUp, handleError)}>
      <div>
        <label>Name</label>
        <input name="name" type="text" {...register('name', signupOptions.name)} />
        <small className="text-danger">
          {errors?.name && errors.name.message}
        </small>
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          {...register('email', signupOptions.email)}
        />
        <small className="text-danger">
          {errors?.email && errors.email.message}
        </small>
      </div>
      <div>
        <label>Your Role</label>
        <Controller
          name="role"
          control={control}
          defaultValue=""
          rules={signupOptions.role}
          render={({ field }) => (
            <Select options={selectOptions} {...field} />
          )}
        />
        <small className="text-danger">
          {errors?.role && errors.role.message}
        </small>
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          {...register('password', signupOptions.password)}
        />
        <small className="text-danger">
          {errors?.password && errors.password.message}
        </small>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignUpForm;

