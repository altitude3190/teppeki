
import Word from '@/components/Word.vue';

describe('Word.vue', () => {
    it('pressStateClass should be empty string by default', () => {
        const defaultData = Word.data();
        expect(defaultData.pressStateClass).toBe('');
    });
});
