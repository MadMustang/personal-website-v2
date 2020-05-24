import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ResumeViewComponent } from './components/resume-view/resume-view.component';
import { DataServiceService } from './services/data-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ResumeViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    DataServiceService,
    {
      provide: APP_INITIALIZER, 
      useFactory: dataProviderFactory,
      multi: true,
      deps: [DataServiceService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function dataProviderFactory(provider: DataServiceService) {
  return () => provider.loadData();
}