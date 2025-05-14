import { add, subtract, multiply, divide, calculate } from './calculator';

describe('Calculator Functions', () => {
  describe('add', () => {
    it('adds two positive numbers correctly', () => {
      expect(add(2, 3)).toBe(5);
    });

    it('handles negative numbers', () => {
      expect(add(-2, 3)).toBe(1);
    });
  });

  describe('subtract', () => {
    it('subtracts two numbers correctly', () => {
      expect(subtract(5, 3)).toBe(2);
    });

    it('handles negative numbers', () => {
      expect(subtract(3, -2)).toBe(5);
    });
  });

  describe('multiply', () => {
    it('multiplies two numbers correctly', () => {
      expect(multiply(4, 3)).toBe(12);
    });

    it('handles negative numbers', () => {
      expect(multiply(-2, 3)).toBe(-6);
    });
  });

  describe('divide', () => {
    it('divides two numbers correctly', () => {
      expect(divide(6, 2)).toBe(3);
    });

    it('throws error when dividing by zero', () => {
      expect(() => divide(5, 0)).toThrow('Division by zero');
    });
  });

  describe('calculate', () => {
    it('performs addition correctly', () => {
      expect(calculate('+', 2, 3)).toBe(5);
    });

    it('performs subtraction correctly', () => {
      expect(calculate('-', 5, 3)).toBe(2);
    });

    it('performs multiplication correctly', () => {
      expect(calculate('*', 4, 3)).toBe(12);
    });

    it('performs division correctly', () => {
      expect(calculate('/', 6, 2)).toBe(3);
    });

    it('throws error for invalid operation', () => {
      expect(() => calculate('invalid', 2, 3)).toThrow('Invalid operation');
    });
  });
}); 