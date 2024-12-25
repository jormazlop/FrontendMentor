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