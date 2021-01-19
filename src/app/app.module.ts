//Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Bootstrap
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

//Components
import { AppComponent } from './app.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { HowtoComponent } from './components/howto/howto.component';
import { ApplyComponent } from './components/apply/apply.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { PrivacyComponent } from "./components/privacy/privacy.component";

//Services
import { AppliesService } from "./services/applies.service";
import { UniqueJsonPipe } from './pipes/unique-json.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    HowtoComponent,
    ApplyComponent,
    SolutionsComponent,
    ContactComponent,
    FooterComponent,
    UniqueJsonPipe,
    PrivacyComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AppliesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class AppBootstrapModule { }
