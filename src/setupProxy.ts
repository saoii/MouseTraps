// setupProxy.ts
import { createProxyMiddleware } from 'http-proxy-middleware';

export default function setupProxy(app: any) {
  app.use(
    '/', // Specify the path you want to proxy
    createProxyMiddleware({
      target: 'http://localhost:3000', // Set the target URL
      changeOrigin: true, // Change the origin of the request
      // Additional options if needed
    })
  );
}
