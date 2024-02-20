import hashmap from "./hashmap";

hashmap();
const map = hashmap();

console.log("--- Testing set ---");
map.set("name", "John");
console.log(map.buckets);

console.log("--- Testing get ---");
console.log(map.get("name"));

console.log("--- Testing has ---");
console.log(map.has("name"));
console.log(map.has("nonexistent"));

console.log("--- Testing remove ---");
map.remove("name");
console.log(map.has("name"));

console.log("--- Testing length ---");
map.set("newKey", "newValue");
console.log(map.length());

console.log("--- Testing clear ---");
map.clear();
console.log(map.length());
