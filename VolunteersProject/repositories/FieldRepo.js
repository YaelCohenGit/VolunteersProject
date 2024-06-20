import FieldModel from "../models/FieldModel.js";
import BaseRepo from "./BaseRepo.js";
class FieldRepo extends BaseRepo {
    constructor(model) {
        super(model);
    }
}
export default new FieldRepo(FieldModel);