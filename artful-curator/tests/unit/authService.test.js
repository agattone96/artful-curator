import { login, logout } from '../../src/services/authService';
import { auth } from '../../src/services/firebase';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

jest.mock('firebase/auth', () => ({
  signInWithEmailAndPassword: jest.fn(),
  signOut: jest.fn(),
}));

describe('authService', () => {
  it('logs in a user with valid credentials', async () => {
    signInWithEmailAndPassword.mockResolvedValueOnce({ user: { uid: '123' } });
    const user = await login('test@example.com', 'password');
    expect(user).toEqual({ user: { uid: '123' } });
  });

  it('logs out a user', async () => {
    await logout();
    expect(signOut).toHaveBeenCalled();
  });
});