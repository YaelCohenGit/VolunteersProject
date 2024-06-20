import repo from '../repositories/AddressRepo.js';
import BaseService from './BaseService.js';

class AddressService extends BaseService {
    constructor(repo) {
        super(repo);
    }
}

export default new AddressService(repo);