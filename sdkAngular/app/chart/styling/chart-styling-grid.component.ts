// >> chart-angular-axis-styling-component
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-services/data.service';
import { Country } from '../data-services/country';
import { ObservableArray } from "data/observable-array";

@Component({
    moduleId: module.id,
    selector: 'chart-styling-grid',
    providers: [DataService],
    templateUrl: 'chart-styling-grid.component.html'
})
export class ChartStylingGridComponent implements OnInit {
    private _categoricalSource: ObservableArray<Country>;

    constructor(private _dataService: DataService) { }

    get categoricalSource(): ObservableArray<Country> {
        return this._categoricalSource;
    }

    ngOnInit() {
        this._categoricalSource = new ObservableArray(this._dataService.getCategoricalSource());
    }
}
// << chart-angular-axis-styling-component