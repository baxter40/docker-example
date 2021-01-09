import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user';
import { APIService } from 'src/services/api.service';

@Component({
  selector: 'show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.scss']
})
export class ShowUsersComponent implements OnInit
{
  loading = true;
  users: User[] = [];

  constructor(private apiService: APIService) { }

  ngOnInit(): void
  {
    this.loadUsers();
  }

  public loadUsers()
  {
    this.loading = true;
    this.apiService.getUsers().subscribe(u =>
    {
      // console.log(u);
      this.users = u;
      this.loading = false;
    });
  }

}
