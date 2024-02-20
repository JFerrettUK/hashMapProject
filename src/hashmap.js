function hashmap(key) {
  let bucket = {};
  console.log("bucket below");
  console.log(bucket);

  function hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  }

  function set(key, value) {
    const hashedKey = hash(key).toString();

    let found = false;

    for (let i = 0; i < bucket[hashedKey].length; i++) {
      if (bucket[hashedKey][i].key === key) {
        bucket[hashedKey][i].value = value;
        found = true;
        break;
      }
    }

    if (!found) {
      bucket[hashedKey].push({ key, value });
    }
  }

  function get(key) {
    const hashedKey = hash(key).toString();
    return bucket[hashedKey];
  }

  return { set, get, bucket };
}

export default hashmap;
