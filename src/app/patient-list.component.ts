import {Component, OnInit} from '@angular/core';
import {Patient} from './patient';
import {PatientService} from './patient.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html'
})

export class PatientListComponent implements OnInit {
  patient: Patient[];
  newPatient: Patient = new Patient();
  editingTodo: Patient = new Patient();

  constructor( private patientService: PatientService) {}

  ngOnInit(): void {
    this.getPatient();
  }

  getPatient(): void {
    this.patientService.getPatient()
      .subscribe(patient => this.patient = patient );
  }


  createPatient(patientForm: NgForm): void {
    this.patientService.createPatient(this.newPatient)
      .subscribe(createPatient => {
        patientForm.reset();
        this.newPatient = new Patient();
        this.patient.unshift(createPatient);
      });
  }
}
