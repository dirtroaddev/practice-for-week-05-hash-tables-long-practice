class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable { // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    // Initialize your buckets here
    // Your code here
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(this.capacity).fill(null)
  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.capacity;
  }


  insert(key, value) {
    // Your code here
    // Step 1: Determine the bucket index for the key
    const index = this.hashMod(key);
  
    // Create a new node for the linked list (assuming you have a Node class or similar structure)
    const newNode = { key, value, next: null };
  
    // Step 2: If the bucket is empty, insert the new node directly
    if (!this.data[index]) {
      this.data[index] = newNode;
    } else {
      // Step 3: If the bucket is not empty, search for the key in the linked list
      let current = this.data[index];
      let prev = null;
      while (current) {
        if (current.key === key) {
          // If the key already exists, update the value and return
          current.value = value;
          return;
        }
        prev = current;
        current = current.next;
      }
      // If the key doesn't exist, insert the new node at the head of the linked list
      newNode.next = this.data[index];
      this.data[index] = newNode;
    }
  
    this.count++; // Increase the count of items in the hash table
  }


  read(key) {
    // Calculate the bucket index where this key should be
    const index = this.hashMod(key);
    
    // Start at the head of the linked list at the calculated bucket index
    let current = this.data[index];
    
    // Iterate through the linked list
    while (current !== null) {
      // Check if the current node's key matches the key we're searching for
      if (current.key === key) {
        // If so, return the current node's value
        return current.value;
      }
      // Move to the next node in the list
      current = current.next;
    }
    
    // If we reach the end of the list without finding the key, return undefined
    return undefined;
  }
  


  resize() {
    const oldData = this.data;
    const oldCapacity = this.capacity;
    this.capacity *= 2; // Double the capacity
    this.data = new Array(this.capacity).fill(null);
    this.count = 0; // Reset count and re-increment during reinsertion
  
    for (let i = 0; i < oldCapacity; i++) {
      let current = oldData[i];
      while (current !== null) {
        this.insert(current.key, current.value); // Reinsert to rehash according to new capacity
        current = current.next;
      }
    }
  }

  
  


  delete(key) {
    const index = this.hashMod(key);
    let current = this.data[index];
    let prev = null;
  
    while (current !== null) {
      if (current.key === key) {
        if (prev == null) {
          this.data[index] = current.next;
        } else {
          prev.next = current.next;
        }
        this.count--; // Decrement count after successful deletion
        return; // Key found and deleted, exit the method
      }
      prev = current;
      current = current.next;
    }
  
    // If the method hasn't returned by now, the key wasn't found
    return "Key not found";
  }
  
}


module.exports = HashTable;