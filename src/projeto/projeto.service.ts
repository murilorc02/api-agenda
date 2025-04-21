import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import { Projeto as ModeloProjeto} from "generated/prisma";

@Injectable()
export class ProjetoService {

    constructor(private prisma: PrismaService){}

    async criarProjeto(dados: ModeloProjeto){
        return this.prisma.projeto.create({data: dados});
    }
    
    async listarProjetos(){
        return this.prisma.projeto.findMany();
    }
    
    async encontrarProjeto(id: Number) {
        const resultProjeto = await this.prisma.projeto.findUnique({
            where: {
                id: Number(id)
            }
        });

        if(!resultProjeto) {
            throw new NotFoundException(`O projeto de ID ${id} não foi encontrado`);
        }

        return resultProjeto;

    }
    
    async encontrarTarefasProjeto(id: Number) {
        const resultProjeto = await this.prisma.projeto.findUnique({
            where: {
                id: Number(id)
            }
        }).tarefas();

        if(!resultProjeto) {
            throw new NotFoundException(`O projeto de ID ${id} não foi encontrado`);
        }

        return resultProjeto;

    }
    
    async atualizarProjeto(id: Number, dados: {nome?: string}) {
        return this.prisma.projeto.update({
            where: {id: Number(id)},
            data: dados
        });
    }
    
    async excluirProjeto(id: Number){
        return this.prisma.projeto.delete({
            where: {id: Number(id)}
        });
    }
}