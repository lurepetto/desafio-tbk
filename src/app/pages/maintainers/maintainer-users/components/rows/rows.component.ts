import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../../../interfaces/user.interface';
import { UserService } from '../../../../../services/user.service';

@Component({
  selector: 'app-rows-users',
  templateUrl: './rows.component.html',
  styleUrls: ['./rows.component.scss'],
})
export class RowsUserComponent implements OnInit {
  @Input('users')
  public users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  eliminarUsuario(dni: string) {
    this.userService.deleteUser(dni).subscribe((data) => {
      console.log('Se ha eliminado el usuario');
    });
  }
}
