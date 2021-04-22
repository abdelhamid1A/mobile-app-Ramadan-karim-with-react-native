import {Assistance} from '../../shared/models/assistance.model'
import {BreakFastService} from '../services/breakfast.service'

export class FtourController{
    private BreakFastService:BreakFastService
    constructor(){ }

    addFtour(ftour:Assistance){
        new BreakFastService().addBreakFast(ftour)
    }

    async getBreakFast(){
        let ftour = await new BreakFastService().getAllBreakFast()
        console.log(ftour);
        
        return ftour
    }
}