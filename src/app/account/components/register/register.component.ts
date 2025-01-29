import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { RegisterMutation, RegisterMutationVariables } from '../../../common/generated-types';
import { DataService } from '../../../core/providers/data/data.service';

import { REGISTER } from './register.graphql';
import { FormsModule } from '@angular/forms';
import { CenteredCardComponent } from "../../../shared/components/centered-card/centered-card.component";

@Component({
    selector: 'vsf-register',
    templateUrl: './register.component.html',
    // styleUrls: ['./register.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [FormsModule, CenteredCardComponent]

})
export class RegisterComponent {
    firstName: string;
    lastName: string;
    emailAddress: string;
    registrationSent = false;
    constructor(private dataService: DataService,
                private changeDetector: ChangeDetectorRef) { }

    register() {
        this.dataService.mutate<RegisterMutation, RegisterMutationVariables>(REGISTER, {
            input: {
                emailAddress: this.emailAddress,
                firstName: this.firstName,
                lastName: this.lastName,
            },
        }).subscribe(() => {
            this.registrationSent = true;
            this.changeDetector.markForCheck();
        });
    }
}
