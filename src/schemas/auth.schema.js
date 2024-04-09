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
    correo: z.string({
        required_error: "Ingresa un email"
    }).email({
        message: "Ingresa un email válido"
    }),
    lugar_nacimiento: z.string({
        required_error: "Ingresa tu lugar de nacimiento"
    }),
    telefono: z.number({
        required_error: "Ingresa tu número de telefono"
    }).gt(8),
    nombre_emergencia: z.string({
        required_error : "Ingresa el nombre de tu contacto de emergencia"
    }),
    correo_emergencia: z.string({
        required_error : "Ingresa el correo de tu contacto de emergencia"
    }).email({
        message: "Ingresa un correo válido"
    }),
    telefono_emergencia: z.string({
        required_error : "Ingresa el telefono de tu contacto de emergencia"
    }),
    tipo_sangre : z.string({
        required_error: "Ingresa tu tipo de sangre"
    }),
    transtornos_psicologicos: z.string(),
    enfermedades_cronicas: z.string(),
    alergias: z.string(),
    calle: z.string({
        required_error: "Ingresa la calle donde vives actualmente"
    }),
    cp: z.string({
        required_error: "Ingresa tu código postal"
    }),
    numero: z.string({
        required_error: "Ingresa el número de tu domicilio"
    }),
    ciudad: z.string({
        required_error: "Ingresa tu ciudad"
    }),
    colonia: z.string({
        required_error: "Ingresa la colonia en la que vives"
    }),
    password: z.string({
        required_error: "Ingresa una contraseña"
    }).min(8,{
        message: "La contraseña debe de ser almenos de 8 caracteres"
    })

});

export const loginSchema = z.object({
    correo: z.string({
        required_error: "Ingresa tu correo"
    }).email({
        message: "Ingresa un correo válido"
    }),
    password: z.string({
        required_error: "Ingresa tu contraseña"
    }).min(8,{
        message: "La contraseña debe de ser almenos de 8 caracteres"
    }),
})