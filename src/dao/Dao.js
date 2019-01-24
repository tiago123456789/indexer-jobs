export default class Dao {

    constructor(collection) {
        this._collection = collection
    }

    findAll() {}

    findById(id) {}

    save(newData) {}

    update(id, dataModified) {} 

    remove(id) {}

    getCollection() {
        return this._collection;
    }
}