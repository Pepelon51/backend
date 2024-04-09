import User from '../models/user.model.js';
import bcrypt from 'bcryptjs'
import { createAccesToken } from '../libs/jwt.js';


export const register = async (req, res) => {
    
    const { nombre, ap, am, lugar_nacimiento, correo, telefono, nombre_emergencia, correo_emergencia, telefono_emergencia, peso, tipo_sangre, transtornos_psicologicos, enfermedades_cronicas, alergias, calle, numero, cp, ciudad, colonia, password } = req.body

    try {

        const passwordHash = await bcrypt.hash(password, 15)
        const newUser = new User({
            nombre,
            ap,
            am,
            lugar_nacimiento,
            correo,
            telefono,
            nombre_emergencia,
            correo_emergencia,
            telefono_emergencia,
            peso,
            tipo_sangre,
            transtornos_psicologicos,
            enfermedades_cronicas,
            alergias,
            calle,
            cp,
            numero,
            ciudad,
            colonia,
            password: passwordHash
        })
    
        
        const userSaved = await newUser.save();
        const token = await createAccesToken({id: userSaved._id});
        res.cookie("token", token);
        res.json({
            id: userSaved._id,
            nombre: userSaved.nombre,
            ap: userSaved.ap,
            am: userSaved.am,
        }); 
        
    } catch (error) {
        res.status(500).json({message: error.message});
    }


};

export const login = async (req, res) => {
    
    const { correo, password } = req.body

    try {

        const userFound = await User.findOne({ correo });
        if(!userFound) return res.status(404).json({message: "User not found"});

        const isMatch = await bcrypt.compare(password, userFound.password);
        if(!isMatch) return res.status(400).json({message: "wrong password"});
        
        const token = await createAccesToken({id: userFound._id});
        res.cookie("token", token);
        res.json({
            id: userFound._id,
            nombre: userFound.nombre,
            ap: userFound.ap,
            am: userFound.am,
        }); 
        
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const logout = (req, res) => {
    res.cookie('token', "",{
        expires: new Date(0)
    });
    return res.sendStatus(200);
}

export const profile = async (req, res) => {
    const userFound = await User.findById(req.user.id)
 
    if (!userFound) return res.status(400).json({message: "User not found"});
    console.log(userFound);
    
    console.log(req.user);
    return res.json({
        id: userFound._id,
        correo: userFound.correo,
        colonia: userFound.colonia,
        tipo_sangre: userFound.tipo_sangre,
        nombre: userFound.nombre,
        ap: userFound.ap,
        am: userFound.am,
        transtornos_psicologicos: userFound.transtornos_psicologicos,
        calle: userFound.calle,
        lugar_nacimiento: userFound.lugar_nacimiento,
        telefono: userFound.telefono,
        peso: userFound.peso,
        edad: userFound.edad,
    })
 
}