import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderCvComponent } from './components/header-cv/header-cv.component';
import { WorkExerienceCvComponent } from './components/work-exerience-cv/work-exerience-cv.component';
import { SkillsCvComponent } from './components/skills-cv/skills-cv.component';
import { CertificatesCvComponent } from './components/certificates-cv/certificates-cv.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderCvComponent,
    WorkExerienceCvComponent,
    SkillsCvComponent,
    CertificatesCvComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
