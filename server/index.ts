import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    console.error(err);
    const responseMessage = app.get("env") === "production" ? "Internal Server Error" : message;
    res.status(status).json({ message: responseMessage });
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ALWAYS serve the app on the port specified in the environment variable PORT
  // Other ports are firewalled. Default to 5000 if not specified.
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = parseInt(process.env.PORT || '5007', 10); // Changed default to 5007 to avoid common conflicts

  if (process.env.NODE_ENV !== 'production') {
    const startServer = (p: number) => {
      server.listen(p, "0.0.0.0", () => {
        log(`serving on port ${p}`);
      });
    };

    server.on('error', (err: any) => {
      if (err.code === 'EADDRINUSE' || err.code === 'ENOTSUP') {
        log(`Port ${port} is busy or unsupported, trying ${port + 1}...`);
        // We need to close the server before trying another port if it partially opened
        server.close(() => {
          server.listen(port + 1, "0.0.0.0");
        });
      } else {
        console.error('Server error:', err);
      }
    });

    try {
      startServer(port);
    } catch (err) {
      console.error('Failed to start server:', err);
    }
  } else {
    // In production, we must use the provided PORT
    server.listen(port, "0.0.0.0", () => {
      log(`serving on port ${port}`);
    });
  }
})();

export default app;
