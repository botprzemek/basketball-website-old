import { Cache } from 'memory-cache';

let newCache = new Cache();

export const saveCachedData = (key, value, time, callback) => newCache.put(key, value, time, callback)
export const getCachedData = (key) => { return newCache.get(key) }