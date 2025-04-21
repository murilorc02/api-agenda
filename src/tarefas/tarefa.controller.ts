import { Body, Controller, Delete, Get, Patch, Post, Param } from '@nestjs/common';
//import { Tarefa } from 'src/dtos/Tarefa/tarefa';
import { Tarefa as ModelTarefa } from 'generated/prisma';
import { TarefaService } from './tarefa.service';

@Controller('tarefa')
export class TarefaController {

    constructor(
        private tarefaService: TarefaService
    ) {}

    @Get()
    async getTarefas() : Promise<ModelTarefa[]> {
        return this.tarefaService.listarTarefas();
    }
    
    @Get(':id')
    async getTarefaById(@Param('id') idTarefa: Number): Promise<ModelTarefa>  {
        return this.tarefaService.encontrarTarefa(idTarefa);
    }

    @Post()
    async postTarefa(@Body() body: ModelTarefa) : Promise<ModelTarefa> {
        return this.tarefaService.criarTarefa(body);
    }

    @Patch(':id')
    async updateTarefa(@Param('id') idTarefa: Number, @Body() dados: {nome?: string}) : Promise<ModelTarefa> {
        return this.tarefaService.atualizarTarefa(idTarefa, dados);
    }

    @Delete(':id')
    async deleteTarefa(@Param('id') idTarefa: Number) {
       return this.tarefaService.excluirTarefa(idTarefa);
    }
}