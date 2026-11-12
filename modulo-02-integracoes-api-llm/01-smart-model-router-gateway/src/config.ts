console.assert(
    process.env.OPENROUTER_API_KEY,
    "Please set the OPENROUTER_API_KEY environment variable."
);

export type ModelConfig = {
    apiKey: string;
    httpReferer: string;
    xTitle: string;
    port: number;
    models: string[];
    temperature: number;
    maxTokens: number;
    systemPrompt: string;

    provider: {
        sort: {
            by: string;
            partition: string;
        }
    }
};

export const config: ModelConfig = {
    apiKey: process.env.OPENROUTER_API_KEY!,
    httpReferer: 'http://pos-ia.com',
    xTitle: 'SmartModelRouterGateway',
    port: 3000,
    models: [
        'baidu/ernie-5.5-flash-preview:free',
        'liquid/lfm-3-1.7b:free',
        'thinkingmachines/inkling-2-small:free'
    ],
    temperature: 0.2,
    maxTokens: 50,
    systemPrompt: "Y",
    provider: {
        sort: {
            by: "price",
            partition: "none"
        }
    }
}