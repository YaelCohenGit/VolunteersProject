import AddressModel from "../models/AddressModel.js";
import BaseRepo from "./BaseRepo.js";
class AddressRepo extends BaseRepo {
    constructor(model) {
        super(model);
    }
}
export default new AddressRepo(AddressModel);