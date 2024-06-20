class BaseService {
    constructor(repo) {
        this.repo = repo;
    }

    async getAll() {
        return this.repo.getAll();
      }
    
      async get(id) {
        return this.repo.get(id);
      }
    
      async insert(data) {
        return this.repo.insert(data);
      }
    
      async update(id, data) {
        return this.repo.update(id, data)
      }
    
      async delete(id) {
        return this.repo.delete(id);
      }

}
export default BaseService;
