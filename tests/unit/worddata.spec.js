import wordData from '@/data/Words';

describe('Words.js', () => {
    wordData.forEach((word) => {
        it(`validation id id:${word.id} langId:${word.langId}`, () => {
            expect(word.id).toBeGreaterThan(0);
        });

        it(`validation langId id:${word.id} langId:${word.langId}`, () => {
            expect(word.langId).toBeGreaterThan(0);
        });

        it(`validation categoryId id:${word.id} langId:${word.langId}`, () => {
            expect(word.categoryId).toBeGreaterThan(0);
        });

        it(`validation posId id:${word.id} langId:${word.langId}`, () => {
            expect(word.posId).toBeGreaterThan(0);
        });

        it(`validation word id:${word.id} langId:${word.langId}`, () => {
            expect(word.word.length).toBeGreaterThan(0);
        });

        it(`validation meaning id:${word.id} langId:${word.langId}`, () => {
            expect(word.meaning.length).toBeGreaterThan(0);
        });

        it(`validation ruby id:${word.id} langId:${word.langId}`, () => {
            expect(word.ruby.length).toBeGreaterThan(0);
        });
    });
});
