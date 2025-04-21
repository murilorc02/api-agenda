import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import { Tarefa as ModeloTarefa} from "generated/prisma";

@Injectable()
export class TarefaService {

    constructor(private prisma: PrismaService){}

    async criarTarefa(dados: ModeloTarefa){
        return this.prisma.tarefa.create({data: dados});
    }
    
    async listarTarefas(){
        return this.prisma.tarefa.findMany();
    }
    
    async encontrarTarefa(id: Number) {
        const resultTarefa = await this.prisma.tarefa.findUnique({
            where: {
                id: Number(id)
            }
        });

        if(!resultTarefa) {
            throw new NotFoundException(`O tarefa de ID ${id} não foi encontrado`);
        }

        return resultTarefa;

    }
    
    async atualizarTarefa(id: Number, dados: {nome?: string}) {
        return this.prisma.tarefa.update({
            where: {id: Number(id)},
            data: dados
        });
    }
    
    async excluirTarefa(id: Number){
        return this.prisma.tarefa.delete({
            where: {id: Number(id)}
        });
    }
}