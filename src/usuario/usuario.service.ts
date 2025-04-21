import { ConflictException, Injectable, NotAcceptableException, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import { Usuario as ModeloUsuario} from "generated/prisma";

@Injectable()
export class UsuarioService {

    constructor(private prisma: PrismaService){}

    async criarUsuario(dados: ModeloUsuario){
        try {
            return this.prisma.usuario.create({data: dados});
        } catch (e) {
            if (e.code === "P2002") throw new ConflictException("O email informado já está em uso");
            if (e.code === "P2012") throw new NotFoundException("Insira todos os valores para criação de usuário");
            throw e;
        }
    }
    
    async listarUsuarios(){
        return this.prisma.usuario.findMany();
    }
    
    async encontrarUsuario(id: Number) {
        const resultUsuario = await this.prisma.usuario.findUnique({
            where: {
                id: Number(id)
            }
        });

        if(!resultUsuario) {
            throw new NotFoundException(`O usuário de ID ${id} não foi encontrado`);
        }

        return resultUsuario;

    }
    
    async atualizarUsuario(id: Number, dados: {email?: string, senha?: string, nome?: string}) {
        try {
            return this.prisma.usuario.update({
                where: {id: Number(id)},
                data: dados
            });
        } catch (e) {
            if (e.code === "P2001") throw new NotFoundException(`O usuário de ID ${id} não foi encontrado`);
            if (e.code === "P2002") throw new NotFoundException("O email informado já está em uso");
        }
    }
    
    async excluirUsuario(id: Number){
        try {
            return this.prisma.usuario.delete({
                where: {id: Number(id)}
            });
        } catch (e) {
            if (e.code === "P2001") throw new NotFoundException(`O usuário de ID ${id} não foi encontrado`);
        }
    }
    
}