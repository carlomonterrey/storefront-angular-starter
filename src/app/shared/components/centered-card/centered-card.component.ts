import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IMPORTS } from '../../shared.module';

@Component({
    selector: 'vsf-centered-card',
    templateUrl: './centered-card.component.html',
    styleUrls: ['./centered-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
     imports:[...IMPORTS]
})
export class CenteredCardComponent {
    @Input() title: string;
    @Input() subTitle: string;
}
