import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from 'src/models/user';
import { APIService } from 'src/services/api.service';

@Component({
  selector: 'add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit
{
  firstName = new FormControl('');
  lastName = new FormControl('');

  @Output() addClicked = new EventEmitter();
  @Output() addCompleted = new EventEmitter();

  constructor(private apiService: APIService) { }

  ngOnInit(): void
  {
  }

  userSubmit(): void
  {
    this.addClicked.emit();
    console.log("First Name: " + this.firstName.value);
    console.log("Last Name: " + this.lastName.value);
    var user = new User();
    user.newUser(this.firstName.value, this.lastName.value);

    this.firstName.reset();
    this.lastName.reset();

    this.apiService.addUser(user).subscribe(u =>
    {
      console.log(u);
      this.addCompleted.emit();
    });

  }

}
