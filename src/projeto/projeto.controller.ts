import { Body, Controller, Delete, Get, Patch, Post, Param } from '@nestjs/common';
//import { Projeto } from 'src/dtos/Projeto/projeto';
import { Projeto as ModelProjeto } from 'generated/prisma';
import { ProjetoService } from './projeto.service';

@Controller('projeto')
export class ProjetoController {

    constructor(
        private projetoService: ProjetoService
    ) {}

    @Get()
    async getProjetos() : Promise<ModelProjeto[]> {
        return this.projetoService.listarProjetos();
    }
    
    @Get(':id')
    async getProjetoById(@Param('id') idProjeto: Number): Promise<ModelProjeto>  {
        return this.projetoService.encontrarProjeto(idProjeto);
    }
    
    @Get('tarefas/:id')
    async getTarefasProjetoById(@Param('id') idProjeto: Number): Promise<any>  {
        return this.projetoService.encontrarTarefasProjeto(idProjeto);
    }

    @Post()
    async postProjeto(@Body() body: ModelProjeto) : Promise<ModelProjeto> {
        return this.projetoService.criarProjeto(body);
    }

    @Patch(':id')
    async updateProjeto(@Param('id') idProjeto: Number, @Body() dados: {nome?: string}) : Promise<ModelProjeto> {
        return this.projetoService.atualizarProjeto(idProjeto, dados);
    }

    @Delete(':id')
    async deleteProjeto(@Param('id') idProjeto: Number) {
       return this.projetoService.excluirProjeto(idProjeto);
    }
}