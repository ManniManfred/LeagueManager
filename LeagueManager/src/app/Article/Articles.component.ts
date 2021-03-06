import { Component } from '@angular/core';
import { Http } from "@angular/http";
import { AbstractDataComponent } from '../AbstractDataComponent';
import { SettingsService } from '../Services/SettingsService';
import { environment } from '../../environments/environment';

@Component({
    selector: 'Articles',
    templateUrl: './Articles.html'
})
export class ArticlesComponent extends AbstractDataComponent {
    
    constructor(http: Http, settings: SettingsService) {
        super('article', http, settings);
    }

    protected getUrl(): string {
        let url = super.getUrl() + '?order=created,desc';

        if (environment.teamId < 0)
            url += '&filter=team_id,isnull';
        else
            url += '&filter=team_id,eq,' + environment.teamId;
        
        return url;
    }
}