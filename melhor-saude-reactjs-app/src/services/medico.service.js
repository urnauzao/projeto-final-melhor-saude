import http from "../http-common";

class MedicoRequestService {
    getAll() {
      return http.get(`/medico/all`);
    }
  
    get(id) {
      return http.get(`/medico/show/${id}`);
    }

    getAllByClinica(clinica_id){
      return http.get(`/medico/clinica/${clinica_id}`);
    }
  
    create(data) {
      return http.post("/medico/new", data);
    }
  
    //não usado
    update(id, data) {
      return http.put(`/medico/${id}`, data);
    }
  
    //não usado
    delete(id) {
      return http.delete(`/medico/${id}`);
    }
  
    //não usado
    deleteAll() {
      return http.delete(`/medico`);
    }
  
    //não usado
    findByTitle(title) {
      return http.get(`/medico?title=${title}`);
    }
  }
  
  export default new MedicoRequestService();