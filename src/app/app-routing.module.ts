import { AuthGuard } from './guards/auth.guard';
import { LastPollComponent } from './components/last-poll/last-poll.component';
import { AddPollComponent } from './components/add-poll/add-poll.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PollsComponent } from './components/polls/polls.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'polls', component: PollsComponent, canActivate: [AuthGuard] },
  { path: 'addPoll', component: AddPollComponent, canActivate: [AuthGuard] },
  { path: 'lastPoll', component: LastPollComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }