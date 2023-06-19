import { setCookie } from "cookies-next";
import passport from "passport";
import connectDb from "../../../middleware/passport";
import "../../../middleware/passport";

export default async function (req, res, next) {
  await connectDb();
  passport.authenticate("google", (err, user, info) => {
    if (err || !user) {
      return res.redirect("http://localhost:3000");
    }

    // set cookie and send redirect
    setCookie("token", info.token, {
      req,
      res,
    });
    res.redirect("http://localhost:3000/Home");
  })(req, res, next);
}