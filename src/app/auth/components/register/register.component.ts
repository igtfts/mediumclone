import {Component, OnInit} from '@angular/core'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {Store} from '@ngrx/store'
import {registerAction} from '../../store/actions/register.action'

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public form!: FormGroup
  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.initializeForm()
  }

  private initializeForm(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: '',
      password: '',
    })
    console.log('initializeForm isValid', this.form.valid)
  }

  onSubmit(): void {
    console.log('onSubmitForm values', this.form.value)
    this.store.dispatch(registerAction(this.form.value))
  }
}
