import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateLiteralsComponent } from './template-literals/template-literals.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DestructuringObjectsComponent } from './destructuring-objects/destructuring-objects.component';
import { ArrowFunctionsComponent } from './arrow-functions/arrow-functions.component';
import { ForOfComponent } from './for-of/for-of.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateLiteralsComponent,
    LandingPageComponent,
    DestructuringObjectsComponent,
    ArrowFunctionsComponent,
    ForOfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
