// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { exampleRouter } from "./example";
import { authRouter } from "./auth";
import { chocolatemilkRouter } from "./chocolatemilk";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("example.", exampleRouter)
  .merge("auth.", authRouter)
  .merge("chocolatemilk.", chocolatemilkRouter)

// export type definition of API
export type AppRouter = typeof appRouter;
