import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { TaskModule } from './tasks/task.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, UserComponent], // --> non standalone components
  bootstrap: [AppComponent],
  imports: [
    BrowserModule, // --> every module app needs to import BrowserModule
    SharedModule,
    TaskModule,
  ], // --> register standalone components
})
export class AppModule {}
