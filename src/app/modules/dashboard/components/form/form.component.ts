import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  characterForm: FormGroup;
  @Output() searchCharacterEmitter = new EventEmitter<string>();
  constructor(private fb: FormBuilder) {
    this.characterForm = this.fb.group({
      name: ['', [Validators.required]]
    })
  }

  get getName() {
    return this.characterForm.get('name');
  }

  ngOnInit(): void {
  }

  searchCharacter() {
    this.searchCharacterEmitter.emit(this.getName.value)
  }

}
