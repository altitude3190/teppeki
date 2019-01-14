
function makeKey(langId) {
    return `langId-${langId}`;
}

export default {

    getItem(key) {
        localStorage.getItem(key);
    },

    setItem(key, value) {
        localStorage.setItem(key, value);
    },

    getRegisteredWords(langId) {
        const value = localStorage.getItem(makeKey(langId)) || '{}';
        return JSON.parse(value);
    },

    addRegisteredWord(langId, wordId) {
        const wordIdObjects = this.getRegisteredWords(langId);
        wordIdObjects[wordId] = true;
        localStorage.setItem(makeKey(langId), JSON.stringify(wordIdObjects));
    },

    deleteRegisteredWord(langId, wordId) {
        const wordIdObjects = this.getRegisteredWords(langId);
        delete wordIdObjects[wordId];
        localStorage.setItem(makeKey(langId), JSON.stringify(wordIdObjects));
    },

};
