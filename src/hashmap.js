function hashmap(key) {
  let buckets = {};
  console.log("bucket below");
  console.log(buckets);

  function hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % 10000;
    }
    return hashCode.toString();
  }

  function set(key, value) {
    const hashedKey = hash(key);

    if (!buckets[hashedKey]) {
      buckets[hashedKey] = [];
    }

    let found = false;
    for (let i = 0; i < buckets[hashedKey].length; i++) {
      if (buckets[hashedKey][i].key === key) {
        buckets[hashedKey][i].value = value;
        found = true;
        break;
      }
    }

    if (!found) {
      buckets[hashedKey].push({ key, value });
    }
  }

  function get(key) {
    const hashedKey = hash(key).toString();
    if (buckets[hashedKey]) {
      for (let i = 0; i < buckets[hashedKey].length; i++) {
        if (buckets[hashedKey][i].key === key) {
          return buckets[hashedKey][i].value;
        }
      }
      return null;
    } else {
      return null;
    }
  }

  function has(key) {
    const hashedKey = hash(key).toString();
    if (buckets[hashedKey]) {
      for (let i = 0; i < buckets[hashedKey].length; i++) {
        if (buckets[hashedKey][i].key === key) {
          return true;
        }
      }
      return false;
    } else {
      return false;
    }
  }

  function remove(key) {
    const hashedKey = hash(key).toString();
    if (buckets[hashedKey]) {
      for (let i = 0; i < buckets[hashedKey].length; i++) {
        if (buckets[hashedKey][i].key === key) {
          buckets[hashedKey].splice(i, 1);
          return true;
        }
      }
      return false;
    } else {
      return false;
    }
  }

  function length() {
    let count = 0;

    Object.keys(buckets).forEach(function (bucketKey) {
      count += buckets[bucketKey].length;
    });

    return count;
  }

  function clear() {
    buckets = {};
  }

  function keys() {
    let newArray = [];

    for (const property in buckets) {
      for (let i = 0; i < buckets[property].length; i++) {
        newArray.push(buckets[property][i].key);
      }
    }

    return newArray;
  }

  return { set, get, has, remove, length, clear, keys, buckets };
}

export default hashmap;
