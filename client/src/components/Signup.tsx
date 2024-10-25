import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Paper } from '@mui/material';

const SignupPage: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form validation or signup logic here
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    console.log('Name:', name);
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
          Sign Up
        </Typography>
        <form onSubmit={handleSignup}>
          <Box sx={{ marginBottom: '16px' }}>
            <TextField
              fullWidth
              variant="outlined"
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              required
            />
          </Box>
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
          <Box sx={{ marginBottom: '16px' }}>
            <TextField
              fullWidth
              variant="outlined"
              label="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              required
            />
          </Box>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Sign Up
          </Button>
        </form>
        <Box sx={{ marginTop: '16px', textAlign: 'center' }}>
          <Typography variant="body2">
            Already have an account? <a href="/login">Login</a>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default SignupPage;
