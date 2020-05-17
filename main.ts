import { serve } from './deps.ts';

const PORT = 8000;

const server = serve({ port: 8000 });

const body = new TextEncoder().encode("Test Deno Playground :3");

console.log(`Server started on port ${PORT}`);
for await (const req of server) {
    req.respond({ body });
}