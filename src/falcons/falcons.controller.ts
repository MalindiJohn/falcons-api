import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put, Query, UseGuards, ValidationPipe } from '@nestjs/common';
import { BeltGuard } from 'src/belt/belt.guard';
import { CreateFalconDto } from './dto/create-falcon.dto';
import { UpdateFalconDto } from './dto/update-falcon.dto';
import { FalconsService } from './falcons.service';

@Controller('falcons')
@UseGuards(BeltGuard)
export class FalconsController {

    constructor(private readonly falconService: FalconsService){}

    //get /falcons -->[]
    @Get()
    getFalcons(@Query('weapon') weapon: 'stars' | 'nunchucks'){

        // const falconsService = new FalconsService();

        return this.falconService.getFalcons(weapon);

    }

    //get /falcons/:id --->{}
    @Get(':id')
    getOneFalcon(@Param('id', ParseIntPipe) id:number){

        try {

            return this.falconService.getFalcon(id)
            
        } catch (error) {

            throw new NotFoundException()
            
        }

    }

    //post /falcons
    @Post()
    createFalcon(@Body(new ValidationPipe()) createNinjaDto: CreateFalconDto){

        return this.falconService.createFalcon(createNinjaDto)

    }

    //put /falcons/:id --->{}
    @Put(':id')
    updateFalcon(@Param('id') id:string, @Body() updateFalconDto: UpdateFalconDto){

        return this.falconService.updateFalcon(+id, updateFalconDto)

    }

    //delete /falcons/:id
    @Delete(':id')
    removeFalcon(@Param('id') id:string){

        return this.falconService.removeFalcon(+id);

    }
}

