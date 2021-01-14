import diaries from '../../data/diaries';
import { NewDiaryEntry, NonSensitiveDiaryEntry, DiaryEntry } from '../types';


// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const getEntries = (): DiaryEntry[] => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return diaries;
};

const getNonSensitiveEntries = (): NonSensitiveDiaryEntry[] => {
    return diaries;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const addDiary = ( entry: NewDiaryEntry ): DiaryEntry => {

    const newDiaryEntry = {
        id: Math.max(...diaries.map(d => d.id)) + 1,
        ...entry
    };

    diaries.push(newDiaryEntry);
    return newDiaryEntry;
};

const findById = (id: number): DiaryEntry | undefined => {
    const entry = diaries.find(d => d.id === id);
    return entry;
};


export default {
    getEntries,
    addDiary,
    getNonSensitiveEntries,
    findById
};