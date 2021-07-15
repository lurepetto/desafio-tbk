import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-maintainer-users',
  templateUrl: './maintainer-users.component.html',
  styleUrls: ['./maintainer-users.component.scss'],
})
export class MaintainerUsersComponent implements OnInit {
  public users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getAllUsers().subscribe((data) => {
      this.users = data;
    });
  }
}
