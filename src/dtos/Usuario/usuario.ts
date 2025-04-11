import { IsNotEmpty, Length } from "class-validator";

export class Usuario {

    @IsNotEmpty()
    @Length(5, 100)
    email: string;
    
    @IsNotEmpty()
    @Length(5, 100)
    nome: string;
    
    @IsNotEmpty()
    @Length(5, 100)
    senha: string;

}