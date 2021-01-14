import calculator from './calculator'
import express from 'express';

const app = express()

app.get('/ping', (_req, res) => {
    res.send('this is to test the');
});

const PORT = 3003;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})