import * as tuitsDao from "../tuits/tuits-dao.js";
import userController from "./user-controller.js";

const tuitsController =  (app) => {
    // const findAllTuits = (req, res) => tuitsDao.findAllTuits().then(tuits => res.json(tuits));
    // const createTuit = (req, res) => {}
    // const deleteTuit = (req, res) => {}
    // const updateTuit = (req, res) => {}

    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}

const createTuit = async (req, res) => {
    const newTuit = req.body;
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    // newTuit._id = (new Date()).getTime() + '';
    // newTuit.likes = 0;
    // tuits.push(newTuit);
    res.json(newTuit);
}

const findAllTuits = async (req, res) => {
    const tuits = await tuitsDao.findAllTuits();
    res.json(tuits);
}

const updateTuit = async (req, res) => {
    const tuitIdToUpdate = req.params.tid;
    const updatedTuit = req.body;
    const status = await tuitsDao.updateTuit(tuitIdToUpdate, updatedTuit);
    // tuits = tuits.map(t=> t._id === tuitIdToUpdate ? updatedTuit : t);
    res.sendStatus(status);
}

const deleteTuit = async (req, res) => {
    const tuitIdToDelete = req.params.tid;
    const status = await tuitsDao.deleteTuit(tuitIdToDelete);
    // tuits = tuits.filter(t => t._id !== tuitIdToDelete);
    res.sendStatus(status);
}

export default tuitsController;