import Alert from '../models/alert.model.js'


export const getTasks = async (req, res) => { 
    const tasks = await Alert.find()
    res.json(tasks)
};

export const createTasks = async (req, res) => {
    const { latitud, altitud } = req.body;
    const newTask = new Contact({
        latitud,
        altitud,
    });
    const savedTask = await newTask.save();
    res.json(savedTask);
 };

export const getTask = async (req, res) => {
    const task = await Alert.findById(req.params.id)
    if(!task) res.status(404).json({message: "Coords not found"});
    res.json(task);
 };

export const updateTasks = async (req, res) => {
    const task = await Alert.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    if(!task) res.status(404).json({message: "Coords not found"});
    res.json(task);
};
;
export const deleteTasks = async (req, res) => {
    const task = await Alert.findByIdAndDelete(req.params.id)
    if(!task) res.status(404).json({message: "Coords not found"});
    return res.sendStatus(204)
 };

