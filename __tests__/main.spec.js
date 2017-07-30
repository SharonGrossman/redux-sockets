describe('module', () => {
  const module = require('../src');

  describe('exports', () => {
    it('should expose a middleware function', () => {
      expect(typeof module.default).toBe('function');
    });

    it('should expose a reducer function', () => {
      expect(typeof module.reducer).toBe('function');
    });

    it('should expose a socketConect action', () => {
      expect(typeof module.socketConnect).toBe('function');
    });

    it('should expose a disconnected action type', () => {
      expect(typeof module.DISCONNECTED).toBe('string');
    });

    it('should expose a connected action type', () => {
      expect(typeof module.CONNECTED).toBe('string');
    });

    it('should expose a connect action type', () => {
      expect(typeof module.CONNECT).toBe('string');
    });
  });
});