;
import { UsersComponent } from './users/users.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { ProfileComponent } from './profile/profile.component';


const appRoutes: Routes=[
  {path: 'users',component: UsersComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  {path: 'profile',component: ProfileComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/users', pathMatch: 'full' }
  
  
]

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    UsersComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
