import { AuthGuard } from './guards/auth.guard';
import { LastPollComponent } from './components/last-poll/last-poll.component';
import { AddPollComponent } from './components/add-poll/add-poll.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PollsComponent } from './components/polls/polls.component';
import { ViewPollComponent } from './components/view-poll/view-poll.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'polls/view', component: ViewPollComponent, canActivate: [AuthGuard] },
  { path: 'polls/add', component: AddPollComponent, canActivate: [AuthGuard] },
  { path: 'polls/last', component: LastPollComponent },
  { path: 'polls', component: PollsComponent, canActivate: [AuthGuard] },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }