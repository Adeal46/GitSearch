import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';
import { AppComponent } from './app.component';
import {RoutingModule} from './routing/routing.module';
import { RouterModule } from '@angular/router';
import { SearchFormComponent } from './search-form/search-form.component';
import {FormsModule} from '@angular/forms';
import {SearchRequestService} from './search-request.service';
import {MatMenuModule} from '@angular/material/menu';






@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
  ],
  imports: [
    BrowserModule,
      RoutingModule,
      RouterModule,
      FormsModule,
      NgProgressModule.forRoot(),
      NgProgressHttpModule.forRoot(),
      HttpClientModule
  ],
  providers: [SearchRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
