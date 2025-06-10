import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js"
import { initDocsResources } from "./resources/docs.js"
import { initGenerateBounceEasingTool } from "./tools/generate-bounce-easing.js"
import { initGenerateSpringTool } from "./tools/generate-spring.js"

// Create an MCP server
const server = new McpServer(
    {
        name: "Motion",
        version: "0.0.1",
    },
    {
        capabilities: {
            resources: {},
        },
    }
)

initGenerateSpringTool(server)
initGenerateBounceEasingTool(server)

initDocsResources(server)

// Static resource
server.resource("motion", "motion://app", async (uri) => ({
    contents: [
        {
            uri: uri.href,
            text: "Hello this is motion!",
        },
    ],
}))

// Start receiving messages on stdin and sending messages on stdout
const transport = new StdioServerTransport()
await server.connect(transport)
