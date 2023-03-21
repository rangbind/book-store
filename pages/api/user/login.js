import userLoginRouter from '../routers/user.login.router';

export default async function handler(req, res) {    
  if (userLoginRouter[req.method] === undefined) {
    res.status(404).json({message: "Not found"});
  } else {
    const {status, data} = userLoginRouter[req.method](req.body);
    res.status(status).json(data);
  }
}
