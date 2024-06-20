import BaseController from './BaseController.js';
import service from '../services/AddressService.js';

class AddressController extends BaseController {
    constructor(service) {
        super(service);        
    }
}

export default new AddressController(service);