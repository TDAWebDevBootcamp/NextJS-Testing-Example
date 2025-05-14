import { caesarCipher, encrypt, decrypt } from './cipher';

describe('Cipher Functions', () => {
  describe('caesarCipher', () => {
    it('encrypts text with positive shift', () => {
      expect(caesarCipher('hello', 1)).toBe('ifmmp');
    });

    it('encrypts text with negative shift', () => {
      expect(caesarCipher('hello', -1)).toBe('gdkkn');
    });

    it('handles uppercase letters', () => {
      expect(caesarCipher('HELLO', 1)).toBe('IFMMP');
    });

    it('preserves non-letter characters', () => {
      expect(caesarCipher('hello123!', 1)).toBe('ifmmp123!');
    });

    it('handles shifts greater than 26', () => {
      expect(caesarCipher('hello', 27)).toBe('ifmmp');
    });

    it('throws error for non-string input', () => {
      expect(() => caesarCipher(123, 1)).toThrow('Input must be a string');
    });

    it('throws error for non-number shift', () => {
      expect(() => caesarCipher('hello', '1')).toThrow('Shift must be a number');
    });
  });

  describe('encrypt', () => {
    it('encrypts text correctly', () => {
      expect(encrypt('hello', 1)).toBe('ifmmp');
    });
  });

  describe('decrypt', () => {
    it('decrypts text correctly', () => {
      expect(decrypt('ifmmp', 1)).toBe('hello');
    });
  });
}); 