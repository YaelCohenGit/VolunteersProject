import HelpRequestRepo from '../repositories/HelpRequestRepo.js';
import BaseService from './BaseService.js';

class HelpRequestService extends BaseService {
    constructor(repo) {
        super(repo);
    }
    async getAll(params) {
        return this.repo.getAll(params);
    }   
}
export default new HelpRequestService(HelpRequestRepo);