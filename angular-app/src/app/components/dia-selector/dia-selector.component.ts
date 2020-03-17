import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dia-selector',
  templateUrl: './dia-selector.component.html',
  styleUrls: ['./dia-selector.component.css']
})
export class DiaSelectorComponent implements OnInit {

  @Output() addDias: EventEmitter<any> = new EventEmitter();
  
  dias:string[] = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'];
  selectedDias:string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  isSelected(value: string): boolean {
    return this.selectedDias.indexOf(value) >= 0;
  }

  onChange(value: string, checked: boolean) {
    if (checked) {
      this.selectedDias.push(value);
    } else {
      let index = this.selectedDias.indexOf(value);
      this.selectedDias.splice(index, 1);
    }
    this.addDias.emit(this.selectedDias);
  }

}
