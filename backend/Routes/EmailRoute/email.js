const { Router } = require("express");
const { sendEmail } = require("../utils/mailer");

const router = Router();

router.post("/", (req, res) => {
  console.log({ bd: req.body });
  const { email, phone, subject, message } = req.body;
  sendEmail(email, phone, subject, message);
  res.json({ check: true });
});
module.exports.emailRouter = router;
