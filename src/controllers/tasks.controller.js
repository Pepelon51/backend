import Contact from '../models/contact.model.js'


export const getTasks = async (req, res) => { 
    const tasks = await Contact.find()
    res.json(tasks)
};

export const createTasks = async (req, res) => {
    const { asunto, descripcion, nombre, correo } = req.body;
    const newTask = new Contact({
        asunto,
        descripcion,
        nombre,
        correo,
    });
    const savedTask = await newTask.save();
    res.json(savedTask);
 };

export const getTask = async (req, res) => {
    const task = await Contact.findById(req.params.id)
    if(!task) res.status(404).json({message: "Message not found"});
    res.json(task);
 };

export const updateTasks = async (req, res) => {
    const task = await Contact.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    if(!task) res.status(404).json({message: "Message not found"});
    return res.sendStatus(204)
};
;
export const deleteTasks = async (req, res) => {
    const task = await Contact.findByIdAndDelete(req.params.id)
    if(!task) res.status(404).json({message: "Message not found"});
    res.json(task);

 };

