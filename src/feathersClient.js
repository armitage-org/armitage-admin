import feathers from "@feathersjs/client";
import config from "./config";

const app = feathers().configure(
  feathers.rest(config.api).fetch(window.fetch.bind(window))
);

app.configure(
  feathers.authentication({
    // storageKey: 'auth'
  })
);

export default app;
