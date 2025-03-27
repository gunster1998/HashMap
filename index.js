class HashMap {
    constructor(loadFactor,capacity) {
        this.loadFactor = loadFactor;
        this.capacity = capacity;
        this.buckets = new Array (16).fill([])
    }
}