import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GithubAuthInterceptor } from './githubauth.interceptor';
 import {AngularFireModule} from'angularfire2';
 import {AngularFireDatabaseModule} from'angularfire2/database';
import {environment} from'./../environments/environment';
import { AppComponent } from './app.component';
import { MyComponent } from './my.component';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { MySeComponent } from './my-second-component/my-second-component.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
const ROUTES: Routes= [

{path:'about', component: AboutComponent},
{path:'home', component: HomeComponent},
{path:'contactus', component: ContactusComponent},
{path:'login', component: LoginComponent},
{path: 'register', component:RegisterComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    MyNewComponentComponent,
    MySeComponent,
    AboutComponent,
    HomeComponent,
    ContactusComponent,
    LoginComponent,
    RegisterComponent

  ],
  imports: [
    BrowserModule,
    RouterModule .forRoot(ROUTES),
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule

  ],
  providers: [{
 provide: HTTP_INTERCEPTORS,
 useClass: GithubAuthInterceptor,
 multi: true

  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
