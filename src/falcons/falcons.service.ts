import { Injectable } from '@nestjs/common';
import { CreateFalconDto } from './dto/create-falcon.dto';
import { UpdateFalconDto } from './dto/update-falcon.dto';

@Injectable()
export class FalconsService {

    private falcons = [
        {id:1, name: "Malindi John", weapon: "stars"},
        {id:2, name: "Mary Mwongeli", weapon: "nunchucks"},
    ];

    getFalcons(weapon?: 'stars' | 'nunchucks'){

        if(weapon){
            return this.falcons.filter((falcon) => falcon.weapon === weapon);
        }

        return this.falcons;
    }

    getFalcon(id: number){

        const falcon = this.falcons.find((falcon) => falcon.id === id);

        if(!falcon){

            throw new Error('Falcon not found');

        } 

        return falcon;
    }

    createFalcon(createFalconDto: CreateFalconDto){

        const newFalcon = {
            ...createFalconDto,
            id: Date.now()
        }

        this.falcons.push(newFalcon);

        return newFalcon;

    }

    updateFalcon(id: number, updateFalconDto: UpdateFalconDto){
        
        this.falcons = this.falcons.map((falcon) => {

            if(falcon.id === id){

                return {...falcon, ...updateFalconDto};

            }

            return falcon;
        })

        return this.getFalcon(id);
    }

    removeFalcon(id: number){

        const toBeRemoved = this.getFalcon(id);

        this.falcons = this.falcons.filter((falcon) => falcon.id !== id);

        return toBeRemoved;

    }
}
