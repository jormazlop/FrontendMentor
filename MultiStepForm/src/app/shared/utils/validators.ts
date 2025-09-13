import { AbstractControl, ValidationErrors } from "@angular/forms";

export function phoneValidator(control: AbstractControl): ValidationErrors | null {

  if (!control.value) return null;

  const regex = new RegExp(/^\+?1?\s*?\(?\d{3}(?:\)|[-|\s])?\s*?\d{3}[-|\s]?\d{4}$/);

  if(!regex.test(control.value)) return { phone: true }

  return null;
}
