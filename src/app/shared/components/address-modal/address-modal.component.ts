import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
    AddressFragment,
    CountryFragment,
    CreateAddressMutation,
    CreateAddressMutationVariables,
    GetAvailableCountriesQuery
} from '../../../common/generated-types';
import { GET_AVAILABLE_COUNTRIES } from '../../../common/graphql/documents.graphql';
import { DataService } from '../../../core/providers/data/data.service';
import { Dialog } from '../../../core/providers/modal/modal-types';

import { CREATE_ADDRESS } from './address-modal.graphql';
import { IMPORTS } from '../../shared.module';
import { AddressFormComponent } from "../address-form/address-form.component";

@Component({
    selector: 'vsf-address-modal',
    templateUrl: './address-modal.component.html',
    // styleUrls: ['./address-modal.component.scss'],
    changeDetection: ChangeDetectionStrategy.Default,
     imports: [...IMPORTS, AddressFormComponent]
})
export class AddressModalComponent implements Dialog<AddressFragment>, OnInit {
    resolveWith: (result?: any) => void;
    address: AddressFragment;
    title: string;
    availableCountries$: Observable<CountryFragment[]>;
    constructor(private dataService: DataService) {}

    ngOnInit() {
        this.availableCountries$ = this.dataService.query<GetAvailableCountriesQuery>(GET_AVAILABLE_COUNTRIES).pipe(
            map(data => data.availableCountries),
        );
    }

    save(value: any) {
        this.dataService.mutate<CreateAddressMutation, CreateAddressMutationVariables>(CREATE_ADDRESS, {
            input: value,
        }).subscribe(data => {
            this.resolveWith(data.createCustomerAddress);
        });
    }
}
