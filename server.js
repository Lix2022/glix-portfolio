const express = require("express");
const router = express.Router();
const cors = require("cors");
const EmailJS = require("emailjs-com");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);

// Configure EmailJS credentials
const serviceID = "service_7pr0dsc";
const templateID = "template_v6oqht8";
const userID = "Kbd5DAscDYv1le_5y";

router.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await EmailJS.send(serviceID, templateID, {
      from_name: `${name}`,
      to_name: "Recipient Name",
      email,
      message,
    }, userID);

    res.json({ code: 200, status: "Message Sent" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ code: 500, status: "Message not sent" });
  }
});

app.listen(5000, () => console.log("Server Running"));
