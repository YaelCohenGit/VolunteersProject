import BaseController from './BaseController.js';
import service from '../services/FieldService.js';

class FieldController extends BaseController {
    constructor(service) {
        super(service);        
    }
}

export default new FieldController(service);