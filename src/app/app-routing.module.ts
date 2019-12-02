import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {TemplateLiteralsComponent} from './template-literals/template-literals.component';
import {DestructuringObjectsComponent} from './destructuring-objects/destructuring-objects.component';
import {ArrowFunctionsComponent} from './arrow-functions/arrow-functions.component';
import {ForOfComponent} from './for-of/for-of.component';
import {ExtendedParameterHandlingComponent} from './extended-parameter-handling/extended-parameter-handling.component';


const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'templateLiterals', component: TemplateLiteralsComponent},
  {path: 'destructuringObjects', component: DestructuringObjectsComponent},
  {path: 'arrowFunction', component: ArrowFunctionsComponent},
  {path: 'forOf', component: ForOfComponent},
  {path: 'extendedParameterHandling', component: ExtendedParameterHandlingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
