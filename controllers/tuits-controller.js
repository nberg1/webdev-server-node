// import posts from "./tuits.js";
import * as tuitsDao from "../tuits/tuits-dao.js";
// let tuits = posts;

const tuitsController =  (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}

const createTuit = async (req, res) => {
    const newTuit = req.body;
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    // const newTuit = req.body;
    // newTuit._id = (new Date()).getTime() + '';
    // newTuit.likes = 0;
    // tuits.push(newTuit);
    res.json(insertedTuit);
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
    res.sendStatus(200);
}

const deleteTuit = async (req, res) => {
    const tuitIdToDelete = req.params.tid;
    const status = await tuitsDao.deleteTuit(tuitIdToDelete);
    // tuits = tuits.filter(t => t._id !== tuitIdToDelete);
    res.sendStatus(200);
}

export default tuitsController;