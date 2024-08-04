//msw가 next서버와 매끄럽게 호환이 안되는 이유로 node서버를 따로 띄워야함
import { createMiddleware } from "@mswjs/http-middleware";
import cors from "cors";
import express from "express";

import { handlers } from "./handlers";

const app = express();
const port = 9090;

app.use(
  cors({
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
    credentials: true,
  })
);
app.use(express.json());
app.use(createMiddleware(...handlers));
app.listen(port, () => console.log(`Mock server is running on port: ${port}`));
