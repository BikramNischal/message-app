import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Paper } from '@mui/material';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here (e.g., form validation, API call)
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh', // Full page height
        backgroundColor: '#f0f0f0',
      }}
    >
      <Paper elevation={3} sx={{ padding: '32px', maxWidth: '400px', width: '100%' }}>
        <Typography variant="h5" component="h1" align="center" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleLogin}>
          <Box sx={{ marginBottom: '16px' }}>
            <TextField
              fullWidth
              variant="outlined"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
            />
          </Box>
          <Box sx={{ marginBottom: '16px' }}>
            <TextField
              fullWidth
              variant="outlined"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
            />
          </Box>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </form>
        <Box sx={{ marginTop: '16px', textAlign: 'center' }}>
          <Typography variant="body2">
            Don't have an account? <a href="/signup">Sign Up</a>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default LoginPage;
