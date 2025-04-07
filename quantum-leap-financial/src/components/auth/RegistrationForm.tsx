import React, { useState } from 'react';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Label from '../ui/Label';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';

export default function RegistrationForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!email || !password || !confirmPassword) {
          setError('All fields are required');
          return;
      }
      if (password !== confirmPassword) {
          setError('Passwords do not match');
          return;
      }
      setError('');
      alert('Registration successful');
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg rounded-lg overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4">
        <CardTitle className="text-center text-2xl font-bold">Register</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label htmlFor="email" className="block text-sm font-medium">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 p-2 border rounded w-full"
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="password" className="block text-sm font-medium">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 p-2 border rounded w-full"
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="confirm-password" className="block text-sm font-medium">
              Confirm Password
            </Label>
            <Input
              id="confirm-password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-2 p-2 border rounded w-full"
            />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <Button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Register
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}