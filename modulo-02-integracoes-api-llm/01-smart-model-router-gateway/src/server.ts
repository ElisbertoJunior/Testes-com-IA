import { OpenRouterService } from './OpenRouterService.ts';
import Fastify from "fastify";

export const createServer = (OpenRouterService: OpenRouterService) => {
    const app = Fastify({
        logger: false,
    });

    app.post("/chat", {
        schema: {
                body: {
                    type: "object",
                    required: ["question"],
                    properties: {
                        question: { type: "string", minLength: 5 },
                    } 
                } 
            }
        }, async (request, reply) => {
            try {
                const { question } = request.body as { question: string };
                const response = await OpenRouterService.generate(question);
                return reply.send(response);
            } catch (error) {
                console.error("Error processing request:", error);
                return reply.code(500).send({ error: "Internal Server Error" });
            }
        }
    ) 

    return app;
}