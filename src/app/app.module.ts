import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {I18nService, setupTranslateFactory} from '../services/i18n.service';
import {HttpClientModule} from '@angular/common/http';
import {LoadingComponent} from '../shared/designsystem/components/loading.component';
import {SidebarComponent} from '../shared/designsystem/components/sidebar.component';
import {ToolbarComponent} from '../shared/designsystem/components/toolbar.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // COMPONENTS
    LoadingComponent,
    SidebarComponent,
    ToolbarComponent,
  ],
  providers: [
    I18nService,
    {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateFactory,
      deps: [ I18nService ],
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
