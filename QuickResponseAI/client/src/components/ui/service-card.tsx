import { Icon } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Service } from "@/lib/constants";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const { icon: Icon, title, description, features, color } = service;

  return (
    <Card className="border border-border overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md hover:border-primary/20 h-full">
      <CardHeader className="bg-gray-50 dark:bg-slate-700 p-6">
        <div className="text-center">
          <div className={cn(
            "inline-flex items-center justify-center h-16 w-16 rounded-full mb-4",
            `bg-${color}/10 text-${color}`
          )}>
            <Icon className="h-7 w-7" />
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <p className="text-muted-foreground">
          {description}
        </p>
        <ul className="mt-4 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-primary dark:text-accent mr-2 flex-shrink-0"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
