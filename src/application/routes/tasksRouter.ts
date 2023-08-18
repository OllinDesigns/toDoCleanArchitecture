import express from 'express';
import { DbModel } from '../../infrastructure/dBModel';

const router = express.Router();

router.get('/', async (_req, res)=> {
    try{
        const data = await DbModel.find({});
        res.json(data);
    } catch (err) {
        console.error("Error retrieving data from MongoDB:", err);
        res.status(500).send("Internal Server Error");
      }
});

export default router;