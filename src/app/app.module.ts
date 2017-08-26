import { NgModule } from '@angular/core';

import {ShareModule} from "./share.module";
import {routing} from "./app.routes";
import {PublicLayout} from "./public/layout/public.layout";
import {PanelLayout} from "./panel/layout/panel.layout";
import {PanelDashboard} from "./panel/dashboard/dashboard";
import {NotFoundPage} from "./public/not-found-page/not-found-page";

@NgModule({
  declarations: [
    PublicLayout,
    PanelLayout,
    PanelDashboard,
    NotFoundPage
  ],
  imports: [
    ShareModule,
    routing,
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
