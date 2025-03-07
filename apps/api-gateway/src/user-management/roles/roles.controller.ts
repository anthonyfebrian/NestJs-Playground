import { Controller, Get, Logger, Param } from '@nestjs/common';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {
    private readonly logger = new Logger(RolesController.name);
    constructor(private service: RolesService) { }

    @Get()
    findAll() {
        return this.service.findAll();
    }

    @Get(':id')
    findOne(@Param() params: any) {
        return this.service.findOne(params.id);
    }
}
