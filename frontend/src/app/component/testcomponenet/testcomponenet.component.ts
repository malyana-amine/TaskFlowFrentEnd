import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AuthActions from '../../actions/register-action';


@Component({
  selector: 'app-sign-up',
  templateUrl: './testcomponenet.component.html',
  styleUrls: ['./testcomponenet.component.css']
})
export class SignUpComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private store: Store) {}

  onSignUp(): void {
    console.log('Form submitted', this.username, this.email, this.password);
    this.store.dispatch(AuthActions.signUp({ username: this.username, email: this.email, password: this.password }));
  }
}
