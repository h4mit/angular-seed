import {Component} from "@angular/core";
import {TranslateService} from "@ngx-translate/core";
/**
 * Created by h4mit on 27/08/2017.
 */

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.html'
})
export class AppComponent {
  constructor(translate: TranslateService) {
    translate.addLangs(["en", "fa"]);
    translate.setDefaultLang('fa');
  }
}
