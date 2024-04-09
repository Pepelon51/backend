import { z } from 'zod'

export const registerSchema = z.object({
    nombre: z.string({
        required_error: "Ingresa tu nombre"
    }),
    ap: z.string({
        required_error: "Ingresa tu apellido paterno"
    }),
    am: z.string({
        required_error: "Ingresa tu apellido materno"
    }),
    edad: z.string({
        required_error: "Ingresa tu edad"
    }),
    
})