import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint for submitting contact form
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate form data
      const validatedData = insertContactSchema.parse(req.body);
      
      // Store contact submission
      const contact = await storage.createContact(validatedData);
      
      res.status(201).json({
        success: true,
        message: "Contact form submitted successfully",
        id: contact.id
      });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      res.status(400).json({ 
        success: false,
        message: "Invalid form data"
      });
    }
  });

  // Get portfolio items
  app.get("/api/portfolio", async (req, res) => {
    try {
      const portfolioItems = await storage.getAllPortfolioItems();
      res.json(portfolioItems);
    } catch (error) {
      console.error("Error fetching portfolio items:", error);
      res.status(500).json({ 
        success: false,
        message: "Error fetching portfolio items" 
      });
    }
  });

  // Get portfolio item by ID
  app.get("/api/portfolio/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const portfolioItem = await storage.getPortfolioItemById(id);
      
      if (!portfolioItem) {
        return res.status(404).json({ 
          success: false,
          message: "Portfolio item not found" 
        });
      }
      
      res.json(portfolioItem);
    } catch (error) {
      console.error("Error fetching portfolio item:", error);
      res.status(500).json({ 
        success: false,
        message: "Error fetching portfolio item" 
      });
    }
  });

  // Get services
  app.get("/api/services", async (req, res) => {
    try {
      const services = await storage.getAllServices();
      res.json(services);
    } catch (error) {
      console.error("Error fetching services:", error);
      res.status(500).json({ 
        success: false,
        message: "Error fetching services" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
