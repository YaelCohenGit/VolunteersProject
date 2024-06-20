import repo from '../repositories/FieldRepo.js';
import BaseService from './BaseService.js';

class FieldService extends BaseService {
    constructor(repo) {
        super(repo);
    }
    
}
export default new FieldService(repo);