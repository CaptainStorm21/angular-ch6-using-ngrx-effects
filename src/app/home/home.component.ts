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
    //step 7 - we need to remove the userServices
    // private userService: UserService,
    //step 6
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    //step 6
    this.store.dispatch(getUsers())
    //step 7 remove - 2nd API call
    // this.users$ = this.userService.getUsers();
  }

  /**
   * step  7 - notes
   * Right now, we're sending two calls to the server—one
   * through the effect, and one through the ngOnInit
   * method of the HomeComponent class using the UserService
   * instance directly. Let's remove the UserService from the
   * HomeComponent class. We won't see any data right now,
   * but that's what we're going to do in the next recipe.
   */

  ngOnDestroy() {}
}
