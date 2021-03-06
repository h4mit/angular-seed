import { FooterLayout } from './public/layout/footer/footer-layout';
import { HeaderLayout } from './public/layout/header/header-layout';
import { PublicLayout } from './public/layout/public.layout';
import { NgModule } from '@angular/core';
import { ShareModule } from './share/share.module';
import { routing } from './app.routes';
import { PanelLayout } from './panel/layout/panel.layout';
import { NotFoundPage } from './public/not-found-page/not-found-page';
import { AppComponent } from './app';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemePickerModule } from './public/layout/them-picker/them-picker';

@NgModule({
  declarations: [
    PublicLayout,
    HeaderLayout,
    FooterLayout,
    PanelLayout,
    NotFoundPage,
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    ShareModule,
    ThemePickerModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
