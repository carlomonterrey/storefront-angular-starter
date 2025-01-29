import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Output } from '@angular/core';
import { Subject } from 'rxjs';

import { NotificationOptions, NOTIFICATION_OPTIONS } from '../../providers/notification/notification-types';
import { IMPORTS } from 'src/app/shared/shared.module';

@Component({
    selector: 'vsf-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
     imports:[...IMPORTS]
})
export class NotificationComponent {
    close = new Subject();
    constructor(@Inject(NOTIFICATION_OPTIONS) public options: NotificationOptions) { }
}
