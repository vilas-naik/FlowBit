import { registerService, loginService } from "./auth.service.js";

export const register = async(req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password required" });
    }

    const user = await registerService({ email, password });

    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
}

export const login = async(req, res, next)=> {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password required" });
    }

    const result = await loginService({ email, password });

    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
}