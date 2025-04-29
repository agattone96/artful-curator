import { uploadFile } from '../../src/services/uploadService';
import { storage } from '../../src/services/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

jest.mock('firebase/storage', () => ({
  ref: jest.fn(),
  uploadBytes: jest.fn(),
  getDownloadURL: jest.fn(() => Promise.resolve('mock-url')),
}));

describe('uploadFile', () => {
  it('uploads a file and returns its URL', async () => {
    const mockFile = new File(['content'], 'test.txt', { type: 'text/plain' });
    const url = await uploadFile(mockFile);
    expect(url).toBe('mock-url');
  });

  it('throws an error if upload fails', async () => {
    uploadBytes.mockRejectedValueOnce(new Error('Upload failed'));
    const mockFile = new File(['content'], 'test.txt', { type: 'text/plain' });
    await expect(uploadFile(mockFile)).rejects.toThrow('Failed to upload file. Please try again.');
  });
});