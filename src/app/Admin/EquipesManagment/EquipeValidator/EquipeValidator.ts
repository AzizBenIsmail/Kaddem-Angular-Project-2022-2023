import {
    AbstractControl,
    AsyncValidatorFn,
    ValidationErrors,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {EquipeService} from '../../../Services/ServicesEquipes/equipe.service';
import {CreateEquipeComponent} from '../createEquipe/create-equipe/create-equipe.component';


export class EquipeValidator {
    static createValidator(methode: CreateEquipeComponent): AsyncValidatorFn {
        return (control: AbstractControl): Observable<ValidationErrors> => {
            return methode
                .checkIfUsernameExists(control.value)
                .pipe(
                    map((result: boolean) =>
                        result ? { EquipeAlreadyExists: true } : null
                    )
                );
        };
    }
}
