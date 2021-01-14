/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { NewDiaryEntry, Visibility, Weather } from './types';
/* eslint-disable @typescript-eslint/no-explicit-any */
const toNewDiaryEntry = (object: any): NewDiaryEntry => {
    return {
        date: parseDate(object.date),
        comment: parseComment(object.comment),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility)
    };
};

const isString = (text: any): text is string => {
    return typeof text === 'string' || text instanceof String;
};

const parseComment = (comment: any): string => {
    if (!comment || !isString(comment)) {
        throw new Error('Incorrect or missing comment: ' + comment);
    }
    return comment;
};

const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date));
};

const parseDate = (date: any): string => {
    if(!date || isString(date) || !isDate(date)) {
        throw new Error('Incorrect or missing date: ' + date);
    }
    return date;
};

const isWeather = (param: any): param is Weather => {
    return Object.values(Weather).includes(param);
};

const parseWeather = (weather: any): Weather => {
    if(!weather || !isWeather(weather)) {
        throw new Error('Incorrect or missing weather: ' + weather);
    }
    return weather;
};

const isVisibility = (param: any): param is Visibility => {
    return Object.values(Visibility).includes(param);
};

const parseVisibility = (visibility: any): Visibility => {
    if(!visibility || !isVisibility(visibility)) {
        throw new Error('Incorrect or missing visibility: ' + visibility);
    }
    return visibility;
};

export default toNewDiaryEntry;