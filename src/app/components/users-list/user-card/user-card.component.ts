import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent {
  @Input()
  userItem: any;

  @Output()
  deleteUser = new EventEmitter();

  onDeleteUser() {
    this.deleteUser.emit();
  }
}
