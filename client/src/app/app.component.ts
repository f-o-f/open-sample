import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';
  constructor(private translate: TranslateService) {
    translate.setDefaultLang(environment.defaultLang);
    translate.use(environment.defaultLang);
  }
}
