import { 
  portfolioItems,
  services,
  contacts,
  type InsertPortfolioItem,
  type InsertContact,
  type InsertService,
  type PortfolioItem,
  type Contact,
  type Service
} from "@shared/schema";

export interface IStorage {
  // Portfolio methods
  createPortfolioItem(item: InsertPortfolioItem): Promise<PortfolioItem>;
  getPortfolioItemById(id: number): Promise<PortfolioItem | undefined>;
  getAllPortfolioItems(): Promise<PortfolioItem[]>;
  
  // Contact methods
  createContact(contact: InsertContact): Promise<Contact>;
  getContactById(id: number): Promise<Contact | undefined>;
  getAllContacts(): Promise<Contact[]>;
  
  // Service methods
  createService(service: InsertService): Promise<Service>;
  getServiceById(id: number): Promise<Service | undefined>;
  getAllServices(): Promise<Service[]>;
}

export class MemStorage implements IStorage {
  private portfolioItems: Map<number, PortfolioItem>;
  private contacts: Map<number, Contact>;
  private services: Map<number, Service>;
  
  private portfolioItemsId: number;
  private contactsId: number;
  private servicesId: number;

  constructor() {
    this.portfolioItems = new Map();
    this.contacts = new Map();
    this.services = new Map();
    
    this.portfolioItemsId = 1;
    this.contactsId = 1;
    this.servicesId = 1;
    
    // Initialize with some demo data
    this.initializeData();
  }

  private initializeData() {
    // This will be called when the storage is initialized
    // We could add default data here if needed
  }

  // Portfolio CRUD operations
  async createPortfolioItem(item: InsertPortfolioItem): Promise<PortfolioItem> {
    const id = this.portfolioItemsId++;
    const now = new Date();
    const portfolioItem: PortfolioItem = { ...item, id, createdAt: now };
    this.portfolioItems.set(id, portfolioItem);
    return portfolioItem;
  }

  async getPortfolioItemById(id: number): Promise<PortfolioItem | undefined> {
    return this.portfolioItems.get(id);
  }

  async getAllPortfolioItems(): Promise<PortfolioItem[]> {
    return Array.from(this.portfolioItems.values());
  }

  // Contact CRUD operations
  async createContact(contact: InsertContact): Promise<Contact> {
    const id = this.contactsId++;
    const now = new Date();
    const newContact: Contact = { ...contact, id, createdAt: now };
    this.contacts.set(id, newContact);
    return newContact;
  }

  async getContactById(id: number): Promise<Contact | undefined> {
    return this.contacts.get(id);
  }

  async getAllContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }

  // Service CRUD operations
  async createService(service: InsertService): Promise<Service> {
    const id = this.servicesId++;
    const newService: Service = { ...service, id };
    this.services.set(id, newService);
    return newService;
  }

  async getServiceById(id: number): Promise<Service | undefined> {
    return this.services.get(id);
  }

  async getAllServices(): Promise<Service[]> {
    return Array.from(this.services.values());
  }
}

export const storage = new MemStorage();
