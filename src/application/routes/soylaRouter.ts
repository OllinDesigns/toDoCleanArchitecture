import express from 'express';

const router = express.Router();

router.get('/', (_req, res) => {
    console.log('yo salgo solo si se accede a soyla  ' + new Date().toLocaleDateString());
    res.send('la gurrugurrunyaus');
});

export default router;