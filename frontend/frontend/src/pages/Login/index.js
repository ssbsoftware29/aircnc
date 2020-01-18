import React, { useState } from 'react';
import api from '../../services/api';



export default function Login({ history }) {
  const [email, setEmail] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.post('/sessions', { email });

    const { _id } = response.data;

    localStorage.setItem('user', _id); // Salva o id do user no local storage para uso da api

    history.push('/dashboard');

  }
  return (
    <>
      <p>
        Ofereça <strong>spots</strong> para programadores e encontre
          <strong>talentos</strong> para sua empresa
        </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-MAIL *</label>
        <input type="email"
          placeholder="Seu melhor e-mail"
          id="email"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <button className="btn" type="submit">Entrar</button>
      </form>
    </>
  );
}