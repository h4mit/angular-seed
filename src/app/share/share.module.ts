import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NgModule} from '@angular/core';
import {HhttpProvider} from '../../h4mit/http/Hhttp';
import {InternationalizationModule} from '../../h4mit/internationalization/internationalization.module';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSelectModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatTabsModule,
  MatToolbarModule,
  MatSnackBarModule,
  MatGridListModule
} from '@angular/material';
/**
 * Created by h4mit on 26/08/2017.
 */

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    HhttpProvider,
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpModule,
    InternationalizationModule,
    // Material
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatGridListModule,
  ]
})
export class ShareModule {
}
