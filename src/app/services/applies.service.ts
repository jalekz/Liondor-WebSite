import { Injectable } from '@angular/core';
import { MainService } from '../services/main.service'

@Injectable()
export class AppliesService {

    constructor(private _mainService: MainService) { }

    public getApplies = () => {
        return this._mainService.getRequest("/Vacant/getApplies");
    }
}

export interface Apply {
    filterID: string;
    category: string;
    title: string;
    imgPath: string;
    modalTitle: string;
    modalBody: string;
};