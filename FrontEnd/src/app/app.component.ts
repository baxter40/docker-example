import { Component, ViewChild } from '@angular/core';
import { ShowUsersComponent } from './show-users/show-users.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent
{
  title = 'FrontEnd';

  @ViewChild(ShowUsersComponent) child: ShowUsersComponent;

  addEventClicked()
  {
    this.child.loading = true;
  }

  addCompleted()
  {
    this.child.loadUsers();
  }
}
