import User from "../collections/User";

export default class Dao {

    constructor(collection) {
        this._collection = collection
    }

    async findAllPaginated(pageCurrent, qtdItensReturned = 10) {
        const skip = (pageCurrent - 1) * qtdItensReturned;
        return await this._collection.find({}, {}, { skip: skip, limit: qtdItensReturned });
    }

    async findAll() {
        return await this._collection.find({});
    }

    async findById(id) {
        return await this._collection.findById(id);
    }

    async save(newData) {
        const user = this._collection(newData);
        return await user.save();
    }

    async update(id, dataModified) {
        return await this._collection.findByIdAndUpdate(id, { $set: { ...dataModified }});
    } 

    async remove(id) {
        return await this._collection.deleteOne({ _id: id });
    }

    getCollection() {
        return this._collection;
    }
}