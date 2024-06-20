import repo from '../repositories/VolunteerRepo.js'

import BaseService from './BaseService.js';
class volunteerService extends BaseService {
    constructor(repo) {
        super(repo);
    }
}

export default new volunteerService(repo);
