
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { Usuario, Prisma } from 'generated/prisma';

@Injectable()
export class UsuarioService {
  constructor(private prisma: PrismaService) {}

  async Usuario(usuarioId: Prisma.UsuarioWhereUniqueInput): Promise<Usuario | null> {
    return this.prisma.usuario.findUnique({
      where: usuarioId,
    });
  }

  async Usuarios(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UsuarioWhereUniqueInput;
    where?: Prisma.UsuarioWhereInput;
    orderBy?: Prisma.UsuarioOrderByWithRelationInput;
  }): Promise<Usuario[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.usuario.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createUsuario(data: Prisma.UsuarioCreateInput): Promise<Usuario> {
    return this.prisma.usuario.create({
      data,
    });
  }

  async updateUsuario(params: {
    where: Prisma.UsuarioWhereUniqueInput;
    data: Prisma.UsuarioUpdateInput;
  }): Promise<Usuario> {
    const { where, data } = params;
    return this.prisma.usuario.update({
      data,
      where,
    });
  }

  async deleteUsuario(where: Prisma.UsuarioWhereUniqueInput): Promise<Usuario> {
    return this.prisma.usuario.delete({
      where,
    });
  }
}
