import { NgModule } from "@angular/core";
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from "./app.component";
import { FormularioAltaComponent } from './formulario-alta/formulario-alta.component';
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, RouterOutlet } from "@angular/router";
import { routes } from "./app.routes";




@NgModule({
    declarations: [   
    ],

    imports:[
        BrowserModule,
        
        ReactiveFormsModule,
        RouterOutlet,
        FormularioAltaComponent,
        AppComponent
         
    ],

    
    providers: [],
    bootstrap: []

})

export class AppModule { }