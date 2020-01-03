import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_ICONS } from 'ng-zorro-antd';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';

import { AppComponent } from './app.component';

import { NZ_I18N, en_US } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import {WelcomeComponent} from './pages/welcome/welcome.component'

import { RouterModule, Routes } from '@angular/router';
registerLocaleData(en);

const routes: Routes = [

    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  
    { path: 'welcome', component: WelcomeComponent },
  
  ];

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

@NgModule({
  imports: [  RouterModule.forRoot(routes), BrowserModule, FormsModule, HttpClientModule, HttpClientJsonpModule, ReactiveFormsModule, NgZorroAntdModule, BrowserAnimationsModule, ScrollingModule, DragDropModule ],
  exports: [RouterModule],
  declarations: [ AppComponent,WelcomeComponent ],
  bootstrap:    [ AppComponent ],
  providers   : [ { provide: NZ_I18N, useValue: en_US }, { provide: NZ_ICONS, useValue: icons } ]
})
export class AppModule { }