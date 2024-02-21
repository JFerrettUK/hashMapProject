import hashmap from "./hashmap";

const map = hashmap();

console.log("--- Testing set and get ---");
map.set("name", "John");
console.log("Expected: John, Actual:", map.get("name")); // Should log "John"

console.log("--- Testing has ---");
console.log("Expected: true, Actual:", map.has("name")); // Should log true
console.log("Expected: false, Actual:", map.has("nonexistent")); // Should log false

console.log("--- Testing remove ---");
map.remove("name");
console.log("Expected: false, Actual:", map.has("name")); // Should log false

console.log("--- Testing length ---");
map.set("newKey", "newValue");
console.log("Expected: 1, Actual:", map.length()); // Should log 1

console.log("--- Testing values ---");
// Correct usage of values
const valuesBeforeClear = map.values(); // Should return ["newValue"]
console.log(
  "Expected: ['newValue'], Actual:",
  JSON.stringify(valuesBeforeClear)
); // Using JSON.stringify for array comparison

console.log("--- Testing clear ---");
map.clear();
console.log("Expected: 0, Actual:", map.length()); // Should log 0

// Additional tests for keys and updated values method
console.log("--- Testing keys and updated values method ---");
map.set("key1", "value1");
map.set("key2", "value2");
console.log(
  "Expected keys: ['key1', 'key2'], Actual:",
  JSON.stringify(map.keys())
); // Should log ['key1', 'key2']
console.log(
  "Expected values: ['value1', 'value2'], Actual:",
  JSON.stringify(map.values())
); // Should log ['value1', 'value2']

function assert(condition, message) {
  if (!condition) {
    console.error("Assertion failed:", message);
  } else {
    console.log("Assertion passed:", message);
  }
}

assert(
  map.get("key1") === "value1",
  "get method returns correct value for 'key1'"
);
assert(
  map.get("key2") === "value2",
  "get method returns correct value for 'key2'"
);
assert(
  map.get("nonexistent") === null,
  "get method returns null for non-existent key"
);

console.log("--- Testing entries() with no elements ---");
let entries = map.entries();
console.log(entries); // Expected: []

console.log("--- Adding elements ---");
map.set("name", "John");
map.set("age", "30");
map.set("city", "New York");

console.log("--- Testing entries() with elements ---");
entries = map.entries();
console.log(entries); // Expected: [["name", "John"], ["age", "30"], ["city", "New York"]]

console.log("--- Testing removal of an element ---");
map.remove("age");
entries = map.entries();
console.log(entries); // Expected: [["name", "John"], ["city", "New York"]]

console.log("--- Testing clear ---");
map.clear();
entries = map.entries();
console.log(entries); // Expected: []
