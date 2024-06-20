
import VolunteerModel from "../models/VolunteerModel.js";
import BaseRepo from "./BaseRepo.js";
class volunteerRepo extends BaseRepo {
    constructor(model) {
        super(model);
    }

    async get(id) {
        try {
            let item = await this.model.findById(id);
            if (!item) {
                let error = new Error("You are not exist, Please Signup");
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
            let id = await this.model.get(data.id);
            if (id) {
                let error = new Error("You are exist, Please Login");
                error.statusCode = 400;
                throw error;
            }
            return await super.insert(data);
        } catch (error) {
            throw error;
        }
    }

}
export default new volunteerRepo(VolunteerModel);