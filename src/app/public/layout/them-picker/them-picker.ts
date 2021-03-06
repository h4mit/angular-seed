import {Component, ViewEncapsulation, ChangeDetectionStrategy, NgModule} from '@angular/core';
import {StyleManager} from '../style-manager/style-manager';
import {ThemeStorage, DocsSiteTheme} from './theme-storage/theme-storage';
import {CommonModule} from '@angular/common';
import { ShareModule } from '../../../share/share.module';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'them-picker',
  templateUrl: 'them-picker.html',
  styleUrls: ['them-picker.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  // tslint:disable-next-line:use-host-property-decorator
  host: {'aria-hidden': 'true'},
})
export class ThemPicker {
  currentTheme;

  themes = [
    {
      primary: '#673AB7',
      accent: '#FFC107',
      href: 'deeppurple-amber.css',
      isDark: false,
    },
    {
      primary: '#3F51B5',
      accent: '#E91E63',
      href: 'indigo-pink.css',
      isDark: false,
      isDefault: true,
    },
    {
      primary: '#E91E63',
      accent: '#607D8B',
      href: 'pink-bluegrey.css',
      isDark: true,
    },
    {
      primary: '#9C27B0',
      accent: '#4CAF50',
      href: 'purple-green.css',
      isDark: true,
    },
  ];

  constructor(
    public styleManager: StyleManager,
    private _themeStorage: ThemeStorage
  ) {
    const currentTheme = this._themeStorage.getStoredTheme();
    if (currentTheme) {
      this.installTheme(currentTheme);
    }
  }

  installTheme(theme: DocsSiteTheme) {
    this.currentTheme = this._getCurrentThemeFromHref(theme.href);

    if (theme.isDefault) {
      this.styleManager.removeStyle('theme');
    } else {
      this.styleManager.setStyle('theme', `assets/${theme.href}`);
    }

    if (this.currentTheme) {
      this._themeStorage.storeTheme(this.currentTheme);
    }
  }

  private _getCurrentThemeFromHref(href: string): DocsSiteTheme {
    return this.themes.find(theme => theme.href === href);
  }
}

@NgModule({
  imports: [
    ShareModule
  ],
  exports: [ThemPicker],
  declarations: [ThemPicker],
  providers: [StyleManager, ThemeStorage],
})
export class ThemePickerModule { }
