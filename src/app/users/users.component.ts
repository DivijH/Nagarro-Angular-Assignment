import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users_list = [
    { name: 'Divij Handa', username: 'div', email: 'divij.handa@nagarro.com' },
    { name: 'Arjun Handa', username: 'arjun', email: 'arjun.handa@gmail.com' },
    { name: 'Madhurima', username: 'mishi', email: 'madhurima@gmail.com' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
