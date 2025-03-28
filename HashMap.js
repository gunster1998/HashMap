export class HashMap {
    constructor(loadFactor = 0.75, capacity = 16) {
      this.loadFactor = loadFactor;
      this.capacity = capacity;
      this.buckets = Array.from({ length: capacity }, () => []);
      this.size = 0;
    }
  
    hash(key) {
      let hashCode = 0;
  
      const primeNumber = 31;
  
      for (let i = 0; i < key.length; i++) {
        hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
      }
  
      return hashCode;
    }
  
    resize() {
        this.capacity = this.capacity * 2;
        const oldBuckets = this.buckets;
        this.buckets = Array.from({ length: this.capacity }, () => []);
        this.size = 0;

        for (let i = 0; i < oldBuckets.length; i++) {
            for (let j = 0; j < oldBuckets[i].length; j++) {
                this.set(oldBuckets[i][j][0], oldBuckets[i][j][1])
            }
        }
        console.log(`Фактор загрузки превышен теперь он: `, + this.capacity )
    }


    set(key, value) {
      const hashCode = this.hash(key);
      for (let i = 0; i < this.buckets[hashCode].length; i++) {
        if (this.buckets[hashCode][i][0] === key) {
          this.buckets[hashCode][i][1] = value;
          return;
        }
      }
      this.buckets[hashCode].push([key, value]);
      ++this.size;
      let currentLoadFactor = this.size / this.capacity;
      if (currentLoadFactor >= this.loadFactor) {
        this.resize()
      }
    }
  
    get(key) {
      const hashCode = this.hash(key);
      for (let i = 0; i < this.buckets[hashCode].length; i++) {
        if (this.buckets[hashCode][i][0] === key) {
          return this.buckets[hashCode][i][1];
        }
      }
      return null;
    }
  
    has(key) {
      const hashCode = this.hash(key);
      for (let i = 0; i < this.buckets[hashCode].length; i++) {
        if (this.buckets[hashCode][i][0] === key) {
          return true;
        }
      }
      return false;
    }
  
    remove(key) {
      const hashCode = this.hash(key);
      for (let i = 0; i < this.buckets[hashCode].length; i++) {
        if (this.buckets[hashCode][i][0] === key) {
          this.buckets[hashCode].splice(i,1)
          --this.size
          return true;
        }
      }
      return false;
    }
  
    length() {
      return this.size
    }
  
    clear() {
      this.buckets = Array.from({ length: this.capacity }, () => []);
      this.size = 0
    }
  
    keys() {
  
      const arrayKey = [];
  
      for (let i = 0; i < this.buckets.length; i++) {
          for (let j = 0; j < this.buckets[i].length; j++) {
              arrayKey.push(this.buckets[i][j][0])
          }
      }
      return arrayKey
    }
  
    values() {
      const arrayValues = [];
  
      for (let i = 0; i < this.buckets.length; i++) {
          for (let j = 0; j < this.buckets[i].length; j++) {
              arrayValues.push(this.buckets[i][j][1])
          }
      }
      return arrayValues
    }
    
    entries() {
      const arrayEntries = [];
  
      for (let i = 0; i < this.buckets.length; i++) {
          for (let j = 0; j < this.buckets[i].length; j++) {
              arrayEntries.push(this.buckets[i][j])
          }
      }
      return arrayEntries
  
    }
  
  
  }
  