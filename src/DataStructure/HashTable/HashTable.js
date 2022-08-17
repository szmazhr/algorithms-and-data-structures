/**
 * ---- Hash Table ----
 * A hash table, also known as hash map, is a data structure that is used to store key-value pairs
 * Given a key, we can associate a value with that key for very fast lookup
 * JavaScript's Object is a special implementation of the hash table data structure.
 * However, Object call adds its own keys. Keys that we input may conflict and overwrite the inherited default properties
 * Maps which were introduced in 2015 allow we to store key-value pairs
 * Writing own hash table implementation is a very popular JavaScript interview question.
 *
 * We store the key value pairs in a fix sized array
 * Arras have a numeric index
 * A hashing function accepts the string key, converts it into a hash code using a defined logic and then maps tit into a numeric index that is within the bounds of the array.
 * The same the same hashing function is reused to retrieve the value given a key
 *
 * ---- Implementation ----
 *
 * Hash tables are typically implemented where consent time lookup and insertion is required
 * Examples: Database and caches
 *
 * ---- Operations ----
 * Set: Inserts a new key-value pair into the hash table.
 * Get: Retrieves the value associated with the key.
 * Remove: Removes the key-value pair from the hash table.
 *
 */

class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let total = 0;
    // it can be optimized by using a better hashing function
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        sameKeyItem[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket && bucket.length) {
      const itemFound = bucket.find((item) => item[0] === key);
      return itemFound ? itemFound[1] : undefined;
    }
    return undefined;
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        bucket.splice(bucket.indexOf(sameKeyItem), 1);
      }
    }
  }

  items() {
    const result = {};
    this.table.forEach((bucket) => {
      bucket.forEach(([key, value]) => {
        result[key] = value;
      });
    });
    return result;
  }
}

module.exports = HashTable;
