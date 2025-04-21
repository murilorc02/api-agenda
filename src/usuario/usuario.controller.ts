import { Body, Controller, Delete, Get, Patch, Post, Param, NotFoundException } from '@nestjs/common';
//import { Usuario } from 'src/dtos/Usuario/usuario';
import { PrismaService } from 'src/database/prisma.service';
import { Usuario as ModelUsuario } from 'generated/prisma';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';
import { UsuarioService } from './usuario.service';

@Controller('usuario')
export class UsuarioController {

    constructor(
        private prismaService: PrismaService,
        private usuarioService: UsuarioService
    ) {}

    @Get()
    async getUsuarios() : Promise<ModelUsuario[]> {
        return this.usuarioService.listarUsuarios();
    }
    
    @Get(':id')
    async getUsuarioById(@Param('id') idUsuario: Number): Promise<ModelUsuario>  {
        return this.usuarioService.encontrarUsuario(idUsuario);
    }

    @Post()
    async postUsuario(@Body() body: ModelUsuario) : Promise<ModelUsuario> {
        
/*         try{
            var novoUsuario = await this.prismaService.usuario.create({data: body});
        } catch (e) {
            if(e instanceof ExceptionsHandler) {
                
            }
        }

        return novoUsuario; */
        return this.usuarioService.criarUsuario(body);

    }

    @Patch(':id')
    async updateUsuario(@Param('id') idUsuario: Number, @Body() dados: {nome?: string, email?: string, senha?: string}) : Promise<ModelUsuario> {
        /* return this.prismaService.usuario.update({
            where: { id: Number(idUsuario) },
            data: dados
        }); */
        return this.usuarioService.atualizarUsuario(idUsuario, dados);
    }

    @Delete(':id')
    async deleteUsuario(@Param('id') idUsuario: Number) {
        /* try{
        await this.prismaService.usuario.delete({
                where: {
                    id: Number(idUsuario)
                }
            });
        } catch (e) {
            throw new NotFoundException(`O usuário de ID ${idUsuario} não foi encontrado`)
        } */
       return this.usuarioService.excluirUsuario(idUsuario);
    }
}