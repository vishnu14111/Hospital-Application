import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DocterModel } from './docters/docters.model';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  docterObj: DocterModel = new DocterModel();
  constructor(private http: HttpClient) { }
  postDocter(data: any) {
    return this.http.post<any>("http://localhost:8082/doctors", data);
  }
  postPatient(data: any) {
    return this.http.post<any>("http://localhost:8081/patients", data);
  }

  getPatient() {
    return this.http.get<any>("http://localhost:8081/patients");
  }
  getDocter() {
    return this.http.get<any>("http://localhost:8082/doctors");
  }
  updatePatient(data: any, id: number) {
    return this.http.put<any>("http://localhost:8081/patients/" + id, data)
  }
  deletePatient(id: number) {
    return this.http.delete<any>("http://localhost:8081/patients/" + id);
  }
  deleteDocter(id: number) {
    return this.http.delete<any>("http://localhost:8082/doctors/" + id);
  }
  updateDocter(data: any, id: number) {
    return this.http.put<any>("http://localhost:8082/docters/" + id, data);
  }
 
}
