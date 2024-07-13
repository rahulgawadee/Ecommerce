import React, { useState } from 'react';


const LoginSignup = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isChecked) {
      alert('You must accept the terms and conditions to sign up.');
      return;
    }
    // Add your form submission logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-purple-200 sm:px-6 lg:px-8">
    <div className="w-full max-w-md p-6 space-y-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-extrabold text-center text-gray-900">Sign Up</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className=''>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 ">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder='Enter Your Name'
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none bg-white focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 ">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder='Enter Your Email ID'
            className="block w-full px-3 py-2 mt-1 border bg-white border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder='Enter Strong Password'
            className="block w-full px-3 py-2 mt-1 border bg-white border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id=""
            className="checkbox w-4 h-4 text-indigo-600 border-red-300 rounded focus:ring-indigo-500  "
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
            I accept the{' '}
            <a href="/terms" className="text-indigo-600 hover:text-indigo-500">
              terms and conditions
            </a>
          </label>
        </div>
        <button
          type="submit"
          className="block w-full py-2 mt-4 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Sign Up
        </button>
      </form>
      <p className="mt-4 text-sm text-center text-gray-600">
        Already have an account?{' '}
        <a href="/login" className="font-medium text-red-600 hover:text-indigo-500">
          Click here to login
        </a>
      </p>
    </div>
  </div>
);
};

export default LoginSignup;
