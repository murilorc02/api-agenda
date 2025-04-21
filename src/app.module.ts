import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './database/prisma.service';
import { UsuarioController } from './usuario/usuario.controller';
import { UsuarioService } from './usuario/usuario.service';
import { ProjetoController } from './projeto/projeto.controller';
import { ProjetoService } from './projeto/projeto.service';
import { TarefaController } from './tarefas/tarefa.controller';
import { TarefaService } from './tarefas/tarefa.service';

@Module({
  imports: [],
  controllers: [AppController, UsuarioController, ProjetoController,TarefaController],
  providers: [AppService, PrismaService, UsuarioService, ProjetoService, TarefaService] 
})
export class AppModule {}
