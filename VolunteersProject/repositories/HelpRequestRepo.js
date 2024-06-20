import HelpRequestModel from "../models/HelpRequestModel.js";
import BaseRepo from "./BaseRepo.js";
import buildPipeline from "../utils/pipeline.js";

class HelpRequestRepo extends BaseRepo {
    constructor(model) {
        super(model);
    }

    async getAll(params) {
        const pipeline = buildPipeline();
        if(params.fieldName){
            pipeline.push({ $match: { fieldName: params.fieldName } }); 
        }
        if(params.city){
        console.log(params.city);
        }
        return await this.model.aggregate(pipeline).exec();
    }
}
export default new HelpRequestRepo(HelpRequestModel);