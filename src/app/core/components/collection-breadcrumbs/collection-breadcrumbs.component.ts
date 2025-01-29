import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { GetCollectionQuery } from '../../../common/generated-types';
import { IMPORTS } from 'src/app/shared/shared.module';

@Component({
    selector: 'vsf-collection-breadcrumbs',
    templateUrl: './collection-breadcrumbs.component.html',
    styleUrls: ['./collection-breadcrumbs.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
     imports:[...IMPORTS]
})
export class CollectionBreadcrumbsComponent {

    @Input() breadcrumbs?: NonNullable<GetCollectionQuery['collection']>['breadcrumbs'] = [];
    @Input() linkLast = false;

    tail<T>(arr: T[] | null): T[] {
        return arr ? arr.slice(1) : [];
    }
}
