const Validator = require('../app'); 

describe('Validator', () => {
    const validator = new Validator();

    it('Имя прошло проверку!', () => {
        expect(validator.validateUsername('ivan_ivanov123')).toBe(true);
    });

    it('Недопустимые символы!', () => {
        expect(validator.validateUsername('michel$%jordan')).toBe(false);
    });

    it('Имя прошло проверку', () => {
        expect(validator.validateUsername('asher553')).toBe(true);
    });
});