import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Patient} from './patient';
import {Observable} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable()
export class PatientService {
  private baseUrl = 'http://localhost:8888';

  constructor(private http: HttpClient) {
  }

  getPatient() {
    return this.http.get<Patient[]>(this.baseUrl + `/api/patient`);
  }


  createPatient(patientData: Patient) {
    return this.http.post<Patient>(this.baseUrl + `/api/patient`, patientData);
  }

}
