import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { 
  MdButtonModule, 
  MdInputModule, 
  MdCardModule, 
  MdListModule, 
  MdToolbarModule,
  MdExpansionModule,
  MdRadioModule,
  MdDialogModule
} from '@angular/material'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component'
import { QuestionComponent } from './question.component'
import { ApiService } from './api.service'
import { QuestionsComponent } from './questions.component'
import { HomeComponent } from './home.component'
import { NavComponent } from './nav.component'
import { QuizComponent } from './quiz.component'
import { QuizzesComponent } from './quizzes.component'
import { RegisterComponent } from './register.component'
import { LoginComponent } from './login.component'
import { AuthService } from './auth.service'
import { AuthInterceptor } from './auth.interceptor'
import { PlayComponent } from './play.component'
import { PlayQuizComponent } from './playQuiz.component'
import { FinishedComponent } from './finished.component'
import { UsersComponent } from './users/users.component';
import { TeachersComponent } from './teachers/teachers.component';
import { ShowTeachersComponent } from './show-teachers/show-teachers.component';
import { ShowTeacherDetailsComponent } from './show-teacher-details/show-teacher-details.component';


const routes = [
  { path: '', component: HomeComponent},
  { path: 'question', component: QuestionComponent},
  { path: 'question/:quizId', component: QuestionComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'quiz', component: QuizComponent},
  { path: 'play', component: PlayComponent},
  { path: 'playQuiz/:quizId', component: PlayQuizComponent},
  { path: 'user', component: UsersComponent},
  { path :'teacher', component:TeachersComponent} ,
  { path :'showteacher', component:ShowTeachersComponent},
  { path :'showteacherDetails/:teacherId', component:ShowTeacherDetailsComponent}
]

@NgModule({
  declarations: [
    AppComponent, 
    QuestionComponent, 
    QuestionsComponent, 
    HomeComponent, 
    NavComponent, 
    QuizComponent,
    QuizzesComponent, 
    RegisterComponent,
    LoginComponent,
    PlayComponent,
    PlayQuizComponent,
    FinishedComponent,
    UsersComponent,
    TeachersComponent,
    ShowTeachersComponent,
    ShowTeacherDetailsComponent,
    
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, 
    MdButtonModule, 
    MdInputModule ,
    MdCardModule,
    MdListModule,
    MdToolbarModule,
    MdExpansionModule,
    MdRadioModule,
    MdDialogModule
  ],
  providers: [ApiService, AuthService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
  entryComponents: [FinishedComponent]
})
export class AppModule { }
