// login.component.ts
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as LoginActions from '../../actions/login.actions';
import * as LoginSelectors from '../../selectors/login.selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
error: any;
user: any;

  constructor(private store: Store) {}

  login(username: string, password: string): void {
    this.store.dispatch(LoginActions.login({ username, password }));
  }

  // Use selectors to get data from the store
  getUser() {
    return this.store.select(LoginSelectors.selectUser);
  }

  getError() {
    return this.store.select(LoginSelectors.selectError);
  }
}
