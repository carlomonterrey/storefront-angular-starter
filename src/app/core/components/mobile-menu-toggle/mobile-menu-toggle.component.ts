import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { StateService } from '../../providers/state/state.service';
import { IMPORTS } from 'src/app/shared/shared.module';

@Component({
    selector: 'vsf-mobile-menu-toggle',
    templateUrl: './mobile-menu-toggle.component.html',
    // styleUrls: ['./mobile-menu-toggle.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
     imports:[...IMPORTS]
})
export class MobileMenuToggleComponent {

    constructor(private stateService: StateService) {}

    toggle() {
        this.stateService.setState('mobileNavMenuIsOpen', true);
    }
}
