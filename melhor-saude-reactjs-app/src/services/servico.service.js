import http from "../http-common";

class ServicoRequestService {
    getAll() {
      return http.get(`/servico/show`);
    }
  
    get(id) {
      return http.get(`/servico/showWithClinicas/${id}`);
    }

    getAllWithClinica(){
      return http.get(`/servico/showWithClinicas`);
    }
  
    create(data) {
      return http.post("/servico/new", data);
    }
  
    //não usado
    update(id, data) {
      return http.put(`/servico/${id}`, data);
    }
  
    //não usado
    delete(id) {
      return http.delete(`/servico/${id}`);
    }
  
    //não usado
    deleteAll() {
      return http.delete(`/servicos`);
    }
  
    //não usado
    findByTitle(title) {
      return http.get(`/servicos?title=${title}`);
    }
  }
  
  export default new ServicoRequestService();