import React, { useState } from 'react';

function LoginForm({ onLogin }) {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(form.email, form.password);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
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
        type="password" 
        name="password" 
        placeholder="Password" 
        value={form.password} 
        onChange={handleChange} 
        required 
        className="p-2 border rounded" 
      />
      <button 
        type="submit" 
        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded font-semibold"
      >
        Login
      </button>
    </form>
  );
}

export default LoginForm;