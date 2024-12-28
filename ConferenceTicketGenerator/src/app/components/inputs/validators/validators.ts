import { AbstractControl, ValidationErrors } from "@angular/forms";


export function ValidateMail(control: AbstractControl): ValidationErrors | null {

    if (!control.value) return null;

    const regexMail = new RegExp(/^([\w.*-]+@([\w-]+\.)+[\w-]{2,4})?$/);

    if (!regexMail.test(control.value)) {
        return { email: true }
    }

    return null;
}

export function ValidateGithub(control: AbstractControl): ValidationErrors | null {

    if (!control.value) return null;

    const regexMail = new RegExp(/^@\w(-\w|\w\w|\w){0,19}$/);

    if (!regexMail.test(control.value)) {
        return { github: true }
    }

    return null;

}

export function ValidateFile(control: AbstractControl): ValidationErrors | null {

  if (!control.value) return null;

  const sizeInMB = +(control.value.size / (1024*1024)).toFixed(2);

  if (sizeInMB > 5) {
    return { size: true }
  }

  return null;

}
