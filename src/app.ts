import express from "express";

class App {
  public express: express.Application;

  public constructor() {
    this.express = express();
  }

  private middlewares(): void {
    this.express.use(express.json());
  }

  // public routes(): void {
  //   this.express.use(require("./routes"));
  // }

  private listen(port: number | string): void {
    this.express.listen(port || 3000);
    console.log(`Server started on port ${port || 3000}`);
  }

  public start(port: number | string): void {
    this.middlewares();
    // this.routes();
    this.listen(port || 3000);
  }
}

export default new App();
