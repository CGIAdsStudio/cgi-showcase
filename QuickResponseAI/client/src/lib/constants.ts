import { LucideIcon, MonitorSmartphone, Layers3, PenTool, Image, Camera, FileVideo2 } from "lucide-react";

// Types
export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  category: 'advertising' | 'studio' | 'design';
}

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  color: string;
}

// Portfolio Data
export const portfolioItems: PortfolioItem[] = [
  {
    id: "ad1",
    title: "Future Tech Campaign",
    description: "Advanced CGI product visualization",
    imageSrc: "https://images.unsplash.com/photo-1535303311164-664fc9ec6532?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    category: "advertising"
  },
  {
    id: "ad2",
    title: "Automotive Excellence",
    description: "High-fidelity vehicle rendering",
    imageSrc: "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    category: "advertising"
  },
  {
    id: "ad3",
    title: "Essence of Luxury",
    description: "Premium product visualization",
    imageSrc: "https://pixabay.com/get/g0d8c7d52da6a0c81f23ff65a2cbadceb196a3538004f1a7d1a2b8795b204c623379f6e685e30b4bf18af85bbe97285725cf7b4414bcd98856bb6092c623b97a9_1280.jpg",
    category: "advertising"
  },
  {
    id: "studio1",
    title: "Premium Studio Setup",
    description: "Professional environment for creative work",
    imageSrc: "https://pixabay.com/get/g08b37c8e473b3cc0f151c4283a6d2cd3dd34b36a0bf985612fa5569e8db0d3f28f74f8766db33ee9cac29255c6569d4e1e81cc4302bee1afd330a5ddeb2c76fd_1280.jpg",
    category: "studio"
  },
  {
    id: "studio2",
    title: "Creative Workspace",
    description: "Ergonomic environment for designers",
    imageSrc: "https://images.unsplash.com/photo-1537726235470-8504e3beef77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    category: "studio"
  },
  {
    id: "design1",
    title: "Minimalist Portfolio",
    description: "Clean design for creative professionals",
    imageSrc: "https://images.unsplash.com/photo-1618788372246-79faff0c3742?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    category: "design"
  },
  {
    id: "design2",
    title: "Grid Portfolio",
    description: "Organized display of creative projects",
    imageSrc: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    category: "design"
  },
  {
    id: "ad4",
    title: "Product Excellence",
    description: "High-end CGI product rendering",
    imageSrc: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    category: "advertising"
  },
  {
    id: "ad5",
    title: "Architectural Vision",
    description: "Photorealistic building rendering",
    imageSrc: "https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    category: "advertising"
  },
  {
    id: "design3",
    title: "App Interface",
    description: "Clean and intuitive mobile design",
    imageSrc: "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    category: "design"
  },
  {
    id: "studio3",
    title: "Professional Equipment",
    description: "High-end tools for content creation",
    imageSrc: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    category: "studio"
  }
];

// Services Data
export const services: Service[] = [
  {
    id: "s1",
    icon: MonitorSmartphone,
    title: "CGI Product Visualization",
    description: "Photorealistic 3D renderings of products for advertising and marketing materials.",
    features: [
      "High-resolution product renders",
      "360° product views",
      "Environment integration",
      "Product customization"
    ],
    color: "primary"
  },
  {
    id: "s2",
    icon: Layers3,
    title: "3D Modeling & Design",
    description: "Custom 3D modeling and design services for various applications and industries.",
    features: [
      "Product modeling from sketches",
      "CAD to 3D model conversion",
      "Photorealistic texturing",
      "Technical visualization"
    ],
    color: "accent"
  },
  {
    id: "s3",
    icon: Camera,
    title: "Virtual Photography",
    description: "Create virtual photoshoots with CGI models, removing the constraints of physical photography.",
    features: [
      "Studio lighting simulation",
      "Multiple camera angles",
      "Background customization",
      "Material variations"
    ],
    color: "purple"
  },
  {
    id: "s4",
    icon: FileVideo2,
    title: "CGI Animation",
    description: "Bring your products and concepts to life with fluid, realistic animations.",
    features: [
      "Product showcases",
      "Mechanical animations",
      "Process visualizations",
      "Promotional content"
    ],
    color: "secondary"
  },
  {
    id: "s5",
    icon: Image,
    title: "Architectural Visualization",
    description: "Stunning architectural renderings for real estate, development, and design projects.",
    features: [
      "Exterior renderings",
      "Interior visualizations",
      "Aerial perspectives",
      "VR-ready environments"
    ],
    color: "red"
  },
  {
    id: "s6",
    icon: PenTool,
    title: "Creative Concept Development",
    description: "Develop creative concepts and visualizations for advertising campaigns and brand experiences.",
    features: [
      "Concept art and ideation",
      "Storyboard development",
      "Brand identity integration",
      "Creative consulting"
    ],
    color: "yellow"
  },
];
