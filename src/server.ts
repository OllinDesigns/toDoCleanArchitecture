import createApp from "../app";

const port = process.env.PORT || 3000;
const app = createApp(); // Call createApp to get the express.Application instance

const server = app.listen(port, () => {
  console.log(`Gurrus is using express and sleeping in port ${port}`);
});

export default server;