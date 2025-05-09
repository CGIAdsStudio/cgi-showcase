import { useState, useRef } from "react";
import FilterButton from "@/components/ui/filter-button";
import PortfolioCard from "@/components/ui/portfolio-card";
import PortfolioLightbox from "@/components/PortfolioLightbox";
import { portfolioItems } from "@/lib/constants";

type Category = "all" | "advertising" | "studio" | "design";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<Category>("all");
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(0);
  const filterButtons = [
    { label: "All Work", value: "all" },
    { label: "Advertising", value: "advertising" },
    { label: "Studio", value: "studio" },
    { label: "Design", value: "design" },
  ];

  // Filter items based on active category
  const filteredItems = activeFilter === "all"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  const handleItemClick = (index: number) => {
    setCurrentItem(index);
    setIsLightboxOpen(true);
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-extrabold text-gray-900 dark:text-white">
            Our CGI Portfolio
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 mx-auto text-balance leading-relaxed">
            Explore our high-quality CGI work and creative designs crafted for leading brands.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {filterButtons.map((button) => (
            <FilterButton
              key={button.value}
              label={button.label}
              active={activeFilter === button.value}
              onClick={() => setActiveFilter(button.value as Category)}
            />
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <PortfolioCard
              key={item.id}
              item={item}
              onClick={() => handleItemClick(portfolioItems.findIndex(i => i.id === item.id))}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <PortfolioLightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        items={portfolioItems}
        currentIndex={currentItem}
        setCurrentIndex={setCurrentItem}
      />
    </section>
  );
}
