import { PORT } from "@configs/server.json";
import App from "./app";

const port = PORT || 3000;

App.start(port);
