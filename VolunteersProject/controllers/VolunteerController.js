import BaseController from './BaseController.js';
import service from '../services/volunteerService.js';

class VolunteerController extends BaseController {
    constructor(service) {
        super(service);        
    }
}

export default new VolunteerController(service);