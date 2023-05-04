import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rendez-vous-form',
  templateUrl: './rendez-vous-form.component.html',
  styleUrls: ['./rendez-vous-form.component.css']
})
export class RendezVousFormComponent {
  @Input() selectedDate: string="";
  @Output() cancel = new EventEmitter<void>();

  selectedTime: string="";
  name: string="";

  constructor() {


   // console.log("test",this.
    //) ;

   }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('Formulaire soumis');
    // Ajoutez ici la logique pour enregistrer le rendez-vous avec les données du formulaire.
    // Par exemple, vous pouvez envoyer les données à un serveur ou les enregistrer dans un service Angular.
    this.resetForm();
  }

  onCancel(): void {
    this.cancel.emit();
    this.resetForm();
  }

  private resetForm(): void {
    this.selectedTime = '';
    this.name = '';
  }
  restoreDate(event: Event): void {
    const input = event.target as HTMLInputElement;
    input.valueAsDate = new Date(this.selectedDate);

    console.log("test2",this.selectedDate) ;

  }

  preventDateChange(event: KeyboardEvent): void {
    event.preventDefault();
  }


}

