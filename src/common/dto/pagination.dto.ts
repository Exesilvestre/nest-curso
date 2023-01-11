import { IsNumber, IsPositive, Min } from "@nestjs/class-validator";
import { IsOptional } from "class-validator";


export class PaginationDto{
    @IsOptional()
    @IsPositive()
    @IsNumber()
    @Min(1)
    limit?: number;

    @IsOptional()
    @IsNumber()
    @IsPositive()
    offset?: number
}