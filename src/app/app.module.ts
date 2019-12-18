import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { ManagerModule } from './manager/manager.module';
import { TesterModule } from './tester/tester.module';
import { DeveloperModule } from './developer/developer.module';
import { AnyComponent } from './newFolder/any/any.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    AnyComponent,
    
  ],
  imports: [AuthModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule //Reactive forms provide a model-driven approach to handling form inputs whose values change over time
    ,HttpClientModule,
    ManagerModule,
    TesterModule,
    DeveloperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
