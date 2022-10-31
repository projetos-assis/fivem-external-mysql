import App from "./app";
import { PORT } from "@configs/server.json";

const port = PORT || 3000;

App.start(port);
