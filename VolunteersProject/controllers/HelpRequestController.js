import BaseController from './BaseController.js';
import HelpRequestsService from '../services/HelpRequestsService.js';

class HelpRequestService extends BaseController {
    constructor(HelpRequestsService) {
        super(HelpRequestsService);        
    }
}

export default new HelpRequestService(HelpRequestsService);