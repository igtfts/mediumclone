import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {StoreModule} from '@ngrx/store'
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
import {AuthModule} from './auth/auth.module'

import {environment} from 'src/environments/environment'
import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      // autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
