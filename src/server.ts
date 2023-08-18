import app from '../index';

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log(`Gurrus is using express and sleeping in port ${port}`)
})

export default server