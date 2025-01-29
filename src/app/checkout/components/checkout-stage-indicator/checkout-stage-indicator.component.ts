import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IMPORTS } from 'src/app/shared/shared.module';

@Component({
    selector: 'vsf-checkout-stage-indicator',
    templateUrl: './checkout-stage-indicator.component.html',
    // styleUrls: ['./checkout-stage-indicator.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
     imports:[FontAwesomeModule]
})
export class CheckoutStageIndicatorComponent  {
    @Input() signedIn = false;
    @Input() activeStage = 1;
}
