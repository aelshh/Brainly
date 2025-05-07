import express from "express";
import jwt from "jsonwebtoken";
import { z } from "zod";
import { contentModel, linkModel, userModel } from "./db";
import bcrypt from "bcrypt";
import "dotenv/config";
import { userAuthorization } from "./Middleware";
import cors from "cors";

const app = express();
const JWT_SECRET = process.env.JWT_SECRET ?? "";
app.use(express.json());
app.use(cors());

app.post("/api/v1/signup", async (req, res) => {
  const requiredBody = z.object({
    username: z.string().min(3).max(23),
    password: z.string().min(3).max(23),
  });

  const data = req.body;
  const inputValidation = requiredBody.safeParse(data);
  if (inputValidation.success) {
    const { username, password } = data;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      await userModel.create({
        username: username,
        password: hashedPassword,
      });

      res.status(201).json({
        message: "You have signed up succesfully",
      });
    } catch (e) {
      res.status(409).json({
        message: "User already exists",
      });
    }
  } else {
    res.status(401).json({
      error: "Invalid Input",
    });
  }
});
app.post("/api/v1/signin", async (req, res) => {
  const requiredBody = z.object({
    username: z.string().min(3).max(23),
    password: z.string().min(3).max(23),
  });

  const data = req.body;
  const inputValidation = requiredBody.safeParse(data);
  if (inputValidation.success) {
    const { username, password } = data;

    try {
      const existingUser = await userModel.findOne({
        username: username,
      });

      if (!existingUser) {
        res.json({
          message: "Incorrect Username",
        });
        return;
      }

      const isMatch = await bcrypt.compare(
        password,
        existingUser.password as string
      );

      if (isMatch) {
        const userId = existingUser.id as string;
        const token = jwt.sign({ userId }, JWT_SECRET);

        res.status(200).json({
          message: "You have signed in succesfully",
          token: token,
        });
      } else {
        res.json({
          message: "Incorrect Password",
        });
      }
    } catch (e) {
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  } else {
    res.status(400).json({
      error: "Invalid Input",
    });
  }
});
app.post("/api/v1/content", userAuthorization, async (req, res) => {
  const { title, link, type } = req.body;
  console.log("Received body:", req.body);

  try {
    await contentModel.create({
      title,
      link,
      type,
      userId: req.userId,
    });
    res.json({
      message: "Content created succesfully",
    });
  } catch (e) {
    res.json({
      message: "Internal Sercver Error",
    });
  }
});
app.get("/api/v1/content", userAuthorization, async (req, res) => {
  const userId = req.userId;

  try {
    const content = await contentModel
      .find({
        userId: userId,
      })
      .populate("userId", "username");
    res.json({
      content,
    });

    res.json({
      message: "Internal Server Error",
    });
  } catch (e) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});
app.delete("/api/v1/content", userAuthorization, async (req, res) => {
  const userId = req.userId;
  const contentId = req.body.contentId;

  try {
    await contentModel.deleteMany({
      userId: userId,
      _id: contentId,
    });

    res.json({
      message: "Deleted ",
    });

    res.json({
      message: "Internal Server Error",
    });
  } catch (e) {
    res.json({
      message: "Internal Server Error",
    });
  }
});

app.post("/api/v1/brain/share", userAuthorization, async (req, res) => {
  const isShare: boolean = req.body.share;
  if (isShare) {
    const isLinkGenerated = await linkModel.findOne({
      userId: req.userId,
    });

    if (isLinkGenerated) {
      const hash = isLinkGenerated.hash;
      res.json({
        hash,
      });
      return;
    }

    const hash: string = crypto.randomUUID();
    await linkModel.create({
      hash: hash,
      userId: req.userId,
    });
    res.json({
      hash,
    });
  } else {
    await linkModel.deleteOne({
      userId: req.userId,
    });
  }

  res.json({
    message: "Updated the shareLink status",
  });
});
app.get("/api/v1/brain/:shareLink", async (req, res) => {
  const hash: string = req.params.shareLink;

  const userLink = await linkModel.findOne({
    hash: hash,
  });

  if (userLink) {
    const content = await contentModel.find({
      userId: userLink.userId,
    });

    const user = await userModel.findOne({
      _id: userLink.userId,
    });

    if (!user) {
      res.json({
        message: "No user found ideally it should not happen",
      });
    }

    const username = user?.username;

    res.json({
      username,
      content,
    });
  } else {
    res.json({
      message: "Link is not valid",
    });
  }
});

app.listen(3000);
