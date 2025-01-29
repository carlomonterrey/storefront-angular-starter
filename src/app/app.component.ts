import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { GetCollectionsQuery, GetCollectionsQueryVariables } from './common/generated-types';
import { GET_COLLECTIONS } from './common/graphql/documents.graphql';
import { DataService } from './core/providers/data/data.service';
import { StateService } from './core/providers/state/state.service';
import { IMPORTS } from './shared/shared.module';
import { LayoutHeaderComponent } from "./core/components/layout/layout-header.component";
import { AccountLinkComponent } from "./core/components/account-link/account-link.component";
import { MobileMenuToggleComponent } from "./core/components/mobile-menu-toggle/mobile-menu-toggle.component";
import { CollectionsMenuComponent } from "./core/components/collections-menu/collections-menu.component";
import { ProductSearchBarComponent } from "./core/components/product-search-bar/product-search-bar.component";
import { CartToggleComponent } from "./core/components/cart-toggle/cart-toggle.component";
import { CartDrawerComponent } from "./core/components/cart-drawer/cart-drawer.component";
import { CollectionsMenuMobileComponent } from "./core/components/collections-menu-mobile/collections-menu-mobile.component";
import { LayoutFooterComponent } from "./core/components/layout/layout-footer.component";
import { LayoutComponent } from "./core/components/layout/layout.component";

@Component({
    selector: 'vsf-root',
    templateUrl: './app.component.html',
    // styleUrls: ['./app.component.scss'],
        imports: [
            ...IMPORTS, LayoutHeaderComponent, 
            AccountLinkComponent, 
            MobileMenuToggleComponent, 
            CollectionsMenuComponent, 
            ProductSearchBarComponent, 
            CartToggleComponent, 
            CartDrawerComponent, 
            CollectionsMenuMobileComponent,
             LayoutFooterComponent,
              LayoutComponent]
    
})
export class AppComponent implements OnInit {
    cartDrawerVisible$: Observable<boolean>;
    mobileNavVisible$: Observable<boolean>;
    isHomePage$: Observable<boolean>;
    topCollections$: Observable<GetCollectionsQuery['collections']['items']>;

    navigation = {
        support: [
            {name: 'Help', href: '#'},
            {name: 'Track order', href: '#'},
            {name: 'Shipping', href: '#'},
            {name: 'Returns', href: '#'},
        ],
        company: [
            {name: 'About', href: '#'},
            {name: 'Blog', href: '#'},
            {name: 'Corporate responsibility', href: '#'},
            {name: 'Press', href: '#'},
        ],
    };

    constructor(private router: Router,
                private stateService: StateService,
                private dataService: DataService) {
    }

    ngOnInit(): void {
        this.cartDrawerVisible$ = this.stateService.select(state => state.cartDrawerOpen);
        this.mobileNavVisible$ = this.stateService.select(state => state.mobileNavMenuIsOpen);
        this.isHomePage$ = this.router.events.pipe(
            filter<any>(event => event instanceof RouterEvent),
            map((event: RouterEvent) => event.url === '/'),
        );
        this.topCollections$ = this.dataService.query<GetCollectionsQuery, GetCollectionsQueryVariables>(GET_COLLECTIONS, {
            options: {take: 25, topLevelOnly: true}
        }).pipe(
            map(({collections}) => collections.items)
        );
    }

    openCartDrawer() {
        this.stateService.setState('cartDrawerOpen', true);
    }

    closeCartDrawer() {
        this.stateService.setState('cartDrawerOpen', false);
    }
}
