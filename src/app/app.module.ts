import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddSenderComponent } from './add-sender/add-sender.component';
import { ListSenderComponent } from './list-sender/list-sender.component';
import { DeleteSenderComponent } from './delete-sender/delete-sender.component';
import { AddParcelComponent } from './add-parcel/add-parcel.component';
import { ListParcelComponent } from './list-parcel/list-parcel.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const appRoutes: Routes = [
  { path: "listsender", component: ListSenderComponent },
  { path: "addsender", component: AddSenderComponent },
  { path: "deletesender", component: DeleteSenderComponent },
  { path: "listparcel", component: ListParcelComponent },
  { path: "addparcel", component: AddParcelComponent },
  { path: "", redirectTo: "/", pathMatch: "full" },
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  declarations: [
    AppComponent,
    AddSenderComponent,
    ListSenderComponent,
    DeleteSenderComponent,
    AddParcelComponent,
    ListParcelComponent,
    PageNotFoundComponentComponent,
    PageNotFoundComponent
  ],
  imports: [BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
