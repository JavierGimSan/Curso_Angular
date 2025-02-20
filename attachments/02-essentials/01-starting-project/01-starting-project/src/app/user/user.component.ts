import { Component, EventEmitter, Input, Output} from '@angular/core';

import { type User } from './user.model';

// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// }



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  @Output() select = new EventEmitter<string>(); //Si especificamos el tipo evitamos introducción de tipos erróneos


   get imagePath() {
     return 'assets/users/' + this.user.avatar;
   }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
