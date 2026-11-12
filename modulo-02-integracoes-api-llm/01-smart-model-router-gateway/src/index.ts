import { createServer } from "./server.ts" 
import { config } from './config.ts'
import { OpenRouterService } from './OpenRouterService.ts'

const routerService = new OpenRouterService(config);

const app = createServer(routerService);

await app.listen({ port: config.port, host: "0.0.0.0"});

app.inject({
    method: "POST",
    url: "/chat",
    body: { question: "What is the capital of France?" }
}).then((response) => {
    console.log("Response status code:", response.statusCode);
    //console.log("Response headers:", response);
    console.log("Response body:", response.body);
});