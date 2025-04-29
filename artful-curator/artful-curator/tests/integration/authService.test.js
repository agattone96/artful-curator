import { login } from '../../src/services/authService';
import { auth } from '../../src/services/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

jest.mock('firebase/auth', () => ({
  signInWithEmailAndPassword: jest.fn(),
}));

describe('authService Integration', () => {
  it('logs in a user and verifies Firebase integration', async () => {
    signInWithEmailAndPassword.mockResolvedValueOnce({ user: { uid: '123' } });
    const user = await login('test@example.com', 'password');
    expect(user).toEqual({ user: { uid: '123' } });
    expect(signInWithEmailAndPassword).toHaveBeenCalledWith(auth, 'test@example.com', 'password');
  });
});