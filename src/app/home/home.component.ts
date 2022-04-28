/*
Step 6
Now that we have the effects listening to the actions,
let's dispatch the GET_USERS action from the HomeComponent class,
 and we should see the GET_USERS_SUCCESS action fired in return
 on the successful call fetch. Add the following code to
 dispatch the action from home/home.component.ts:
*/
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../core/services/user.service';
import { IUser } from '../core/interfaces/user.interface';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, takeWhile } from 'rxjs/operators';
//step 6
import { AppState } from '../store/app.reducer';
import { Store } from '@ngrx/store';
import { getUsers } from '../store/app.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  users$: Observable<IUser[]>;
  constructor(
    private userService: UserService,
    //step 6
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    //step 6
    this.store.dispatch(getUsers())
    this.users$ = this.userService.getUsers();
  }


  ngOnDestroy() {}
}
