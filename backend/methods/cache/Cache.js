import NodeCache from 'node-cache';

const newCache = new NodeCache();
export const saveCachedData = (key, value, time) => newCache.set(key, value, time)
export const getCachedData = key => { return newCache.get(key) }