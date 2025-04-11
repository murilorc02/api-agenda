import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { Usuario } from 'src/dtos/Usuario/usuario';
import { PrismaService } from 'src/database/prisma.service';

@Controller('usuario')
export class UsuarioController {

    constructor(private prisma: PrismaService) {}

    @Get()
    async getUsuario() {

    }
    
    @Get('email:')
    async getUsuarioById() {

    }

    @Post()
    async postUsuario(@Body() body: Usuario) {

    }

    @Patch('email:')
    async updateUsuario() {

    }

    @Delete('email:')
    async deleteUsuario() {

    }
}