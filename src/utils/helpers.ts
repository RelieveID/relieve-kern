import { ObjectAny } from 'src/typings/common';

export const parseDataObject = (object: object): object => JSON.parse(JSON.stringify(object));

export const offset = (page: number = 1, per_page: number = 10): number => (page - 1) * per_page;

export const isEmptyObject = (object: object): boolean => !Object.keys(object).length;

export const isEmptyArray = (array: any[]): boolean => array.length === 0;

export const trimObjectKey = (object: ObjectAny): ObjectAny => {
    Object.keys(object).forEach(
        (key: string): boolean =>
            (object[key] === null || object[key] === '' || object[key] === undefined) && delete object[key]
    );
    return object;
};

export const stringifyObjectKey = (object: ObjectAny): ObjectAny => {
    Object.keys(object).forEach((key: string): void => {
        object[key] = String(object[key]);
    });
    return object;
};

export const reduceData = (data: any): any => {
    return Object.keys(data).reduce((res: any, key: string): any => {
        res[key] = data[key][0];
        return res;
    }, {});
};

export const sorter = (sort: string = '-created_at'): string[] => {
    let sortString = sort;
    let sortMethod;

    if (sortString.charAt(0) === '-') {
        sortMethod = 'desc';
        sortString = sort.substr(1);
    } else {
        sortMethod = 'asc';
    }

    return [sortString, sortMethod];
};

export const splitCoordinate = (coordinate: string): { latitude: number; longitude: number } => {
    const [lat, lng] = coordinate.split(',');
    return {
        latitude: +lat,
        longitude: +lng
    };
};

export default {
    parseDataObject,
    offset,
    isEmptyArray,
    isEmptyObject,
    trimObjectKey,
    stringifyObjectKey
};
