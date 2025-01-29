import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SignInComponent } from "../../../shared/components/sign-in/sign-in.component";
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'vsf-checkout-sign-in',
    templateUrl: './checkout-sign-in.component.html',
    styleUrls: ['./checkout-sign-in.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [FontAwesomeModule, SignInComponent,RouterLink]
})
export class CheckoutSignInComponent {
}
