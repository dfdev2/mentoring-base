<div class="create-user__name">
<label for=""
  >Name:
  <span
    *ngIf="
      form.controls['name'].invalid &&
      (form.controls['name'].dirty || form.controls['name'].touched)
    "
    class="alert"
    >Name is not valid</span
  >
</label>
<input type="text" formControlName="name" />
</div>

<div class="create-user__name">
<label for=""
  >Email:
  <span
    *ngIf="
      form.controls['email'].invalid &&
      (form.controls['email'].dirty || form.controls['email'].touched)
    "
    class="alert"
    >E-mail is not valid
  </span></label
>
<input type="text" formControlName="email" />
</div>

<div class="create-user__name">
<label for=""
  >Web Site:
  <span
    *ngIf="
      form.controls['website'].invalid &&
      (form.controls['website'].dirty || form.controls['website'].touched)
    "
    class="alert"
    >Web Site is not valid</span
  ></label
>
<input type="text" formControlName="website" />
</div>

<div class="create-user__name">
<label for=""
  >Company name:
  <span
    *ngIf="
      form.controls['company'].invalid &&
      (form.controls['company'].dirty || form.controls['company'].touched)
    "
    class="alert"
    >Company name is not valid</span
  ></label
>
<input type="text" formControlName="company" />
</div>
