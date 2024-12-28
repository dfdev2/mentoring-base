import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import {
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogModule,
} from "@angular/material/dialog";
import { User } from "../../../interfaces/user.interface";

@Component({
  selector: "app-delete-user-dialog",
  standalone: true,
  imports: [MatDialogClose, MatDialogModule],
  templateUrl: "./delete-user-dialog.component.html",
  styleUrl: "./delete-user-dialog.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteUserDialogComponent {
  readonly data = inject<{ user: User }>(MAT_DIALOG_DATA);
}
