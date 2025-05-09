import { useEffect, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import LazyImage from "@/components/ui/lazy-image";
import { PortfolioItem } from "@/lib/constants";

interface PortfolioLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  items: PortfolioItem[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}

export default function PortfolioLightbox({
  isOpen,
  onClose,
  items,
  currentIndex,
  setCurrentIndex,
}: PortfolioLightboxProps) {
  const [touching, setTouching] = useState(false);
  const [touchStart, setTouchStart] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % items.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === "ArrowLeft") {
        handlePrevious();
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex, items.length]);

  // Touch navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouching(true);
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touching) return;
    
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    
    // Detect swipe (threshold of 50px)
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swipe left, go to next
        handleNext();
      } else {
        // Swipe right, go to previous
        handlePrevious();
      }
    }
    
    setTouching(false);
  };

  const currentItem = items[currentIndex];

  if (!currentItem) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent 
        className="max-w-5xl p-0 bg-black/95 border-none"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <Button 
          variant="ghost" 
          className="absolute right-4 top-4 text-white hover:text-white hover:bg-white/20 z-10" 
          onClick={onClose}
          size="icon"
        >
          <X className="h-6 w-6" />
          <span className="sr-only">Close</span>
        </Button>
        
        <div className="relative flex items-center justify-center p-2 md:p-6">
          <Button 
            variant="ghost" 
            className="absolute left-4 text-white hover:text-white hover:bg-white/20 z-10 h-12 w-12 rounded-full p-0"
            onClick={handlePrevious}
          >
            <ChevronLeft className="h-8 w-8" />
            <span className="sr-only">Previous</span>
          </Button>
          
          <div className="mx-12 flex flex-col items-center">
            <div className="relative w-full h-[50vh] md:h-[70vh] flex items-center justify-center">
              <LazyImage 
                src={currentItem.imageSrc} 
                alt={currentItem.title} 
                className="max-h-full max-w-full object-contain" 
              />
            </div>
            <div className="text-white mt-4 text-center">
              <h3 className="text-xl font-bold">{currentItem.title}</h3>
              <p className="text-gray-300 mt-1">{currentItem.description}</p>
            </div>
          </div>
          
          <Button 
            variant="ghost" 
            className="absolute right-4 text-white hover:text-white hover:bg-white/20 z-10 h-12 w-12 rounded-full p-0"
            onClick={handleNext}
          >
            <ChevronRight className="h-8 w-8" />
            <span className="sr-only">Next</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
