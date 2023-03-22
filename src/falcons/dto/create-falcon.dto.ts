import { IsEnum, MinLength } from "class-validator";

export class CreateFalconDto {
    
    @MinLength(3)
    name: string;

    @IsEnum(['stars', 'nunchucks'], {message: 'Use correct weapon!'})
    weapon: 'starts' | 'nunchucks';
}
