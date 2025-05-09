import { Card, CardContent } from "@/components/ui/card";
import LazyImage from "@/components/ui/lazy-image";
import { PortfolioItem } from "@/lib/constants";

interface PortfolioCardProps {
  item: PortfolioItem;
  onClick: () => void;
}

export default function PortfolioCard({ item, onClick }: PortfolioCardProps) {
  return (
    <div className="gallery-item">
      <Card className="overflow-hidden h-full bg-white dark:bg-slate-800 cursor-pointer shadow-sm hover:shadow-md transition-all duration-300" onClick={onClick}>
        <div className="h-64 overflow-hidden">
          <LazyImage
            src={item.imageSrc}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="text-lg font-bold">{item.title}</h3>
          <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
        </CardContent>
      </Card>
    </div>
  );
}
