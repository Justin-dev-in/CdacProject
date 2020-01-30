import { Validators, NG_VALIDATORS, Validator, AbstractControl } from "@angular/forms";
import { Directive, Input } from '@angular/core';

@Directive({

    selector: '[artistPasswordValidator]',
    providers:[{
        provide:NG_VALIDATORS,
        useExisting:ArtistEqualValidatorDirective,
        multi:true
    }]
    

})


export class  ArtistEqualValidatorDirective implements Validator{
    
    @Input() artistPasswordValidator:string;

    validate(control:AbstractControl): {[ Key:string]:any} | null{

        const controlToCompare=control.parent.get(this.artistPasswordValidator);
        if(controlToCompare && controlToCompare.value!==control.value)
        {
            return { 'mustMatch':true };
        }
        return null;

    }


}