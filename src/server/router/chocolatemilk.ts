import { createRouter } from "./context";
import { z } from "zod";
import { createGzip } from "zlib";

export const chocolatemilkRouter = createRouter()
    .mutation("new", {
        input: z.object({
            name: z.string(),
            location: z.string(),
            notes: z.string().nullish(),
        }
        ),
        resolve({ ctx, input }) {
            return ctx.prisma.chocolateMilk.create({
                data: input
            });
        }
    })
    .query("getAll", {
        async resolve({ ctx }) {
            console.log("hello")
            return await ctx.prisma.chocolateMilk.findMany();
        },
    });
