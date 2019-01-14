const CONST = {
    LANGUAGE_MAP: {
        1: {
            id: 1,
            name: '英語',
        },
        2: {
            id: 2,
            name: '中国語',
        },
    },
    CATEGORY_MAP: {
        100: {
            id: 100,
            langId: 1,
            name: 'TOEIC400点',
        },
        101: {
            id: 101,
            langId: 1,
            name: 'TOEIC550点',
        },
        102: {
            id: 102,
            langId: 1,
            name: 'TOEIC700点',
        },
        103: {
            id: 103,
            langId: 1,
            name: 'TOEIC850点',
        },
        200: {
            id: 200,
            langId: 2,
            name: 'HSK1級',
        },
        201: {
            id: 201,
            langId: 2,
            name: 'HSK2級',
        },
        202: {
            id: 202,
            langId: 2,
            name: 'HSK3級',
        },
        203: {
            id: 203,
            langId: 2,
            name: 'HSK4級',
        },
        204: {
            id: 204,
            langId: 2,
            name: 'HSK5級',
        },
        205: {
            id: 205,
            langId: 2,
            name: 'HSK6級',
        },
    },
    POS_MAP: { // POS = part of speech
        1: {
            id: 1,
            name: '動詞',
        },
        2: {
            id: 2,
            name: '形容詞',
        },
        3: {
            id: 3,
            name: '名詞',
        },
        4: {
            id: 4,
            name: '代名詞',
        },
        5: {
            id: 5,
            name: '固有名詞',
        },
        6: {
            id: 6,
            name: '副詞',
        },
        7: {
            id: 7,
            name: '接続詞',
        },
        8: {
            id: 8,
            name: '感動詞',
        },
        9: {
            id: 9,
            name: '数詞',
        },
        10: {
            id: 10,
            name: '助動詞',
        },
        11: {
            id: 11,
            name: '疑問詞',
        },
        12: {
            id: 12,
            name: '量詞',
        },
        13: {
            id: 13,
            name: '介詞',
        },
        14: {
            id: 14,
            name: '助詞',
        },
        15: {
            id: 15,
            name: '前置詞',
        },
        100: {
            id: 100,
            name: 'イディオム',
        },
        101: {
            id: 101,
            name: '四字熟語',
        },
    },
    POS_GROUP_MAP: {
        1: {
            id: 1,
            name: '動詞',
            posIds: [1],
        },
        2: {
            id: 2,
            name: '形容詞',
            posIds: [2],
        },
        3: {
            id: 3,
            name: '名詞',
            posIds: [3, 4, 5],
        },
        4: {
            id: 4,
            name: '副詞',
            posIds: [6],
        },
        5: {
            id: 5,
            name: '熟語',
            posIds: [100, 101],
        },
        6: {
            id: 6,
            name: 'その他',
            posIds: [7, 8, 9, 10, 11, 12, 13, 14, 15],
        },
    },
};

export const { LANGUAGE_MAP } = CONST;
export const { CATEGORY_MAP } = CONST;
export const { POS_GROUP_MAP } = CONST;
