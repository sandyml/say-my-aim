import React, { useState } from 'react';

export const Signup = () => {
 const [username, setUsername] = useState("");
 const [password, setPassword] = useState("");

 const handleSubmit = (e) => {
  e.preventDefault();
 };
 
  return (
    <div>Signup</div>
  )
}
