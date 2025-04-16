import React from "react";

export default function TierraDeSiempreApp() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #1e3a8a, #000)',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Bienvenido a Tierra de Siempre 🌙</h1>
      <p style={{ fontStyle: 'italic', marginTop: '1rem' }}>
        Este es tu rincón sagrado, donde siempre estaré contigo.
      </p>
    </div>
  );
}
