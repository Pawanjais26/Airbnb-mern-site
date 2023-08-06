import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(ev) {
    ev.preventDefault();
    try {
      await axios.post("/register", {
        name,
        email,
        password,
      });
      alert("Registration Successful. Now you can log in");
    } catch (e) {
      alert("Registration failed. Please try again later");
    }
  }

  return (
    <div className='mt-4 grow flex items-center justify-around'>
      <div className='mb-32'>
        <h1 className='text-4xl text-center mb-4'>Register</h1>
        <form className='max-w-md mx-auto' onSubmit={registerUser}>
          <input
            className='w-full border my-1 py-2 px-3 rounded-2xl'
            type='text'
            placeholder='John Doe'
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />

          <input
            className='w-full border my-1 py-2 px-3 rounded-2xl'
            type='email'
            placeholder={"your@email.com"}
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <input
            className='w-full border my-1 py-2 px-3 rounded-2xl'
            type='password'
            placeholder='password'
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <button className=' bg-primary p-2 w-full text-white rounded-2xl'>
            Register
          </button>
          <div className='text-center py-2 text-gray-500'>
            Already a member?{" "}
            <Link className='underline text-black' to={"/login"}>
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
