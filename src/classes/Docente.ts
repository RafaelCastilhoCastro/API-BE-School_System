import { Usuario } from "./Usuario"

export class Docente extends Usuario {
    constructor(
        id:string,
        nome:string,
        email:string,
        data_nasc:string,
        turma_id:string,
    ) {
        super(
            id,
            nome,
            email,
            data_nasc,
            turma_id
        )
    }

    public static createDocente = async(novoDocente: Docente) => {
        await Docente
            .connection(Docente.tableDocente)
            .insert(novoDocente)
    }

    public static getDocentes = async () => {
        const result = await Docente
            .connection(Docente.tableDocente)
            .select()
        return result
    }
}
