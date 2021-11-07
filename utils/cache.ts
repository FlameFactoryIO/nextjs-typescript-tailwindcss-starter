import LRU from 'lru-cache';

const cache = new LRU({
  max: 250 * 1024 * 1024, // 250kb
  maxAge: 60, // 1 minute
});

export const get = (key) => cache.get(key);
export const del = (key) => cache.del(key);
export const set = (key, value) => cache.set(key, value);

export default {
  get,
  set,
  del
}
