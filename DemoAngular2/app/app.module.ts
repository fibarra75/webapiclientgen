﻿import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HttpBackend, HttpXhrBackend, HttpRequest } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroSearchComponent } from './hero-search.component';

import * as namespaces from '../clientapi/WebApiNG2ClientAuto';
const DemoWebApi_Controllers_Client = namespaces.DemoWebApi_Controllers_Client;

export function clientFactory(http: HttpClient) {
    return new DemoWebApi_Controllers_Client.Heroes('http://localhost:10965/', http);
}

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        //   InMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        HeroDetailComponent,
        HeroesComponent,
        HeroSearchComponent
    ],
    providers: [
        {
            provide: HttpClient,
            useClass: HttpClient
        },
        {
            provide: DemoWebApi_Controllers_Client.Heroes,
            useFactory: clientFactory,
            deps: [HttpClient],

        },
    ],

    bootstrap: [AppComponent]
})
export class AppModule { }