import { AuthGuard } from './guards/auth.guard';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { AuthService } from './services/auth.service';
import { MaterialModule } from './app.material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PollsComponent } from './components/polls/polls.component';
import { PollService } from './services/poll.service';
import { AddPollComponent } from './components/add-poll/add-poll.component';
import { HomeModalComponent } from './components/home-modal/home-modal.component';
import { LastPollComponent } from './components/last-poll/last-poll.component';
import { ViewPollComponent } from './components/view-poll/view-poll.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    PollsComponent,
    AddPollComponent,
    HomeModalComponent,
    LastPollComponent,
    CapitalizePipe,
    ViewPollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthService,
    PollService,
    AuthGuard
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    HomeModalComponent
  ]
})
export class AppModule { }
