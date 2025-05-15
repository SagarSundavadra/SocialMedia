import React, { useState } from 'react';

function RegisterForm({ onRegister }) {
  const [form, setForm] = useState({ 
    username: '', 
    email: '', 
    mobile: '', 
    password: '', 
    confirmPassword: '' 
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (form.password !== form.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const userData = {
      username: form.username,
      email: form.email,
      mobile: form.mobile,
      password: form.password,
    };

    onRegister(userData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input 
        type="text" 
        name="username" 
        placeholder="Username" 
        value={form.username} 
        onChange={handleChange} 
        required 
        className="p-2 border rounded" 
      />
      <input 
        type="email" 
        name="email" 
        placeholder="Email" 
        value={form.email} 
        onChange={handleChange} 
        required 
        className="p-2 border rounded" 
      />
      <input 
        type="text" 
        name="mobile" 
        placeholder="Mobile Number" 
        value={form.mobile} 
        onChange={handleChange} 
        required 
        className="p-2 border rounded" 
      />
      <input 
        type="password" 
        name="password" 
        placeholder="Password" 
        value={form.password} 
        onChange={handleChange} 
        required 
        className="p-2 border rounded" 
      />
      <input 
        type="password" 
        name="confirmPassword" 
        placeholder="Confirm Password" 
        value={form.confirmPassword} 
        onChange={handleChange} 
        required 
        className="p-2 border rounded" 
      />
      <button 
        type="submit" 
        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded font-semibold"
      >
        Register
      </button>
    </form>
  );
}

export default RegisterForm;