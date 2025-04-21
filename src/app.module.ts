import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './database/prisma.service';
import { UsuarioController } from './usuario/usuario.controller';
import { UsuarioService } from './usuario/usuario.service';

@Module({
  imports: [],
  controllers: [AppController, UsuarioController],
  providers: [AppService, PrismaService, UsuarioService] 
})
export class AppModule {}
