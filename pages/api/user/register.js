import userRegisterRouter from '../routers/user.register.router';

export default async function handler(req, res) {
  if (userRegisterRouter[req.method] === undefined) {
    res.status(404).json({message: "Not found"});
  } else {
    const {status, data} = await userRegisterRouter[req.method](req.body);
    res.status(status).json(data);
  }
}
