import connect from './DB.js';

class BaseRepo {
    constructor(model) {
        this.model = model;
        connect();
    }

    async getAll() {
        return this.model.find();
    }


    async get(id) {
        try {
            let item = await this.model.findById(id)
            console.log(item);

            if (!item) {
                let error = new Error('Item not found');
                error.statusCode = 404;
                throw error;
            }

            return item;
        } catch (errors) {
            throw errors;
        }
    }

    async insert(data) {
        try {
            let item = await this.model.create(data);
            if (item) {
                return item;
            } else {
                throw new Error('Something wrong happened');
            }
        } catch (error) {
            throw error;
        }
    }

    async update(id, data) {
        try {
            let item = await this.model.findByIdAndUpdate(id, data, { new: true });
            return item;
        } catch (errors) {
            throw errors;
        }
    }

    async delete(id) {
        try {
            let item = await this.model.findByIdAndDelete(id);
            if (!item) {
                let error = new Error('Item not found');
                error.statusCode = 404;
                throw error;
            } else {
                return item;
            }
        } catch (errors) {
            throw errors;
        }
    }
}

export default BaseRepo;