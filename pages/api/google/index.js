import passport from "passport";
import connectDb from "../../../middleware/passport";
import "../../../middleware/passport";

export default async function (req, res, next) {
  await connectDb();
  passport.authenticate("google", {
    scope: ["profile", "email"],
    session: false,
  })(req, res, next);
}