import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageSquare, Send, X, ArrowRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatMessage {
  message: string;
  isBot: boolean;
  timestamp: Date;
}

const predefinedResponses = {
  greeting: "Hello! Welcome to CGI Ad's Studio. How can I help you today?",
  services: "We offer a range of CGI services including 3D modeling, product visualization, architectural rendering, and animation. Would you like more information about any specific service?",
  pricing: "Our pricing varies based on project requirements. For a custom quote, please provide details about your project or schedule a consultation through our contact form.",
  timeline: "Project timelines depend on complexity and scope. Simple visualizations may take 1-2 weeks, while complex projects can take 4-6 weeks. We're happy to discuss your specific needs.",
  portfolio: "You can explore our portfolio on our website to see examples of our work across advertising, studio photography, and design projects. Is there a specific type of work you're interested in?",
  contact: "You can reach us by phone at +1 (555) 123-4567, by email at contact@cgiadsstudio.com, or by filling out the contact form on our website.",
  process: "Our process typically includes an initial consultation, concept development, preliminary renders for approval, and final production. We maintain clear communication throughout.",
  fallback: "I'm not sure I understood that. Could you rephrase or ask about our services, pricing, timeline, portfolio, or contact information?"
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      message: predefinedResponses.greeting,
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, isMinimized]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
  };

  const minimizeChat = () => {
    setIsMinimized(!isMinimized);
  };

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage = {
      message: input,
      isBot: false,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput("");

    // Generate bot response after a short delay
    setTimeout(() => {
      const response = generateResponse(input.toLowerCase());
      const botMessage = {
        message: response,
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 500);
  };

  const generateResponse = (query: string): string => {
    // Check for keywords in the query and return appropriate responses
    if (query.includes("hello") || query.includes("hi") || query.includes("hey")) {
      return predefinedResponses.greeting;
    } else if (query.includes("service") || query.includes("offer") || query.includes("provide")) {
      return predefinedResponses.services;
    } else if (query.includes("price") || query.includes("cost") || query.includes("quote") || query.includes("how much")) {
      return predefinedResponses.pricing;
    } else if (query.includes("time") || query.includes("long") || query.includes("duration") || query.includes("when")) {
      return predefinedResponses.timeline;
    } else if (query.includes("portfolio") || query.includes("work") || query.includes("example") || query.includes("project")) {
      return predefinedResponses.portfolio;
    } else if (query.includes("contact") || query.includes("reach") || query.includes("call") || query.includes("email")) {
      return predefinedResponses.contact;
    } else if (query.includes("process") || query.includes("workflow") || query.includes("step") || query.includes("how do you")) {
      return predefinedResponses.process;
    } else {
      return predefinedResponses.fallback;
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  const quickResponses = [
    "What services do you offer?",
    "How much do your services cost?",
    "How long does a project take?",
    "How can I contact you?"
  ];

  const handleQuickResponse = (response: string) => {
    setInput(response);
    setTimeout(() => {
      handleSend();
    }, 100);
  };

  return (
    <>
      {/* Chat button */}
      <Button
        onClick={toggleChat}
        className="fixed bottom-8 right-8 z-50 rounded-full h-14 w-14 shadow-lg"
        size="icon"
        aria-label="Chat with us"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </Button>

      {/* Chat window */}
      <div
        className={cn(
          "fixed bottom-24 right-8 z-50 transition-all transform duration-300 ease-in-out",
          isOpen
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-4 opacity-0 scale-95 pointer-events-none"
        )}
      >
        <Card className="w-80 md:w-96 overflow-hidden shadow-xl border border-primary/10 dark:border-primary/20">
          {/* Chat header */}
          <div className="bg-primary text-white p-3 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <MessageSquare size={18} />
              <h3 className="font-medium">Customer Support</h3>
            </div>
            <div className="flex gap-1">
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 text-white hover:text-white hover:bg-white/20"
                onClick={minimizeChat}
                aria-label={isMinimized ? "Maximize chat" : "Minimize chat"}
              >
                <ChevronDown size={16} className={isMinimized ? "rotate-180" : ""} />
              </Button>
            </div>
          </div>

          {/* Chat body */}
          <div
            className={cn(
              "transition-all duration-300 ease-in-out overflow-hidden",
              isMinimized ? "max-h-0" : "max-h-96"
            )}
          >
            <div className="p-3 max-h-72 overflow-y-auto bg-gray-50 dark:bg-slate-900">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={cn(
                    "mb-3 max-w-[85%] p-3 rounded-lg",
                    msg.isBot
                      ? "bg-white dark:bg-slate-800 shadow-sm ml-0 mr-auto"
                      : "bg-primary/10 dark:bg-primary/20 mr-0 ml-auto"
                  )}
                >
                  <p className="text-sm">{msg.message}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {msg.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit"
                    })}
                  </p>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick responses */}
            <div className="p-2 bg-gray-100 dark:bg-slate-800 border-t border-gray-200 dark:border-slate-700 flex overflow-x-auto gap-2 no-scrollbar">
              {quickResponses.map((response, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="whitespace-nowrap flex-shrink-0 text-xs py-1 px-2 h-auto"
                  onClick={() => handleQuickResponse(response)}
                >
                  {response}
                </Button>
              ))}
            </div>

            {/* Chat input */}
            <div className="p-3 bg-background border-t flex gap-2">
              <Input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button
                size="icon"
                onClick={handleSend}
                disabled={!input.trim()}
                aria-label="Send message"
              >
                <Send size={18} />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}