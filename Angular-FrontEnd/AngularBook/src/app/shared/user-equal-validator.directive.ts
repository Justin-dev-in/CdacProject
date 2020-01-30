import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({

    selector:'[userPasswordValidator]',
    providers: [{
        provide:NG_VALIDATORS,
        useExisting:UserEqualValidatorDirective,
        multi:true

    }]
})


export class UserEqualValidatorDirective implements Validator{

    @Input() userPasswordValidator:string; 

    validate(control:AbstractControl):{[key:string]:any}|null
    {
            const controlToCompare=control.parent.get(this.userPasswordValidator); 
            if(controlToCompare && controlToCompare.value !==control.value)
            {
                return {'notEqual':true};
            }
            return null; 
    }
}