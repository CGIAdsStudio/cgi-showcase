import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800 overflow-hidden py-24 md:py-36">
      <div className="container">
        <div className="max-w-3xl">
          <h1 className="font-extrabold tracking-tight">
            <span className="block text-gray-900 dark:text-white mb-2">Professional</span>
            <span className="block gradient-text">
              CGI Advertising
            </span>
          </h1>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed text-balance">
            Elevate your brand with high-quality CGI visuals that captivate and inspire. 
            Our portfolio showcases premium advertising work for leading brands across industries.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="shadow-sm font-medium">
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button size="lg" variant="outline" asChild className="font-medium">
              <a href="#portfolio">View Portfolio</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Abstract decoration */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden xl:block opacity-10">
        <svg
          width="400"
          height="400"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="text-primary dark:text-accent"
        >
          <path
            fill="currentColor"
            d="M40,-52.7C54.9,-43.9,71.5,-35.8,77.9,-22.2C84.3,-8.6,80.5,10.6,73.2,27.5C65.9,44.5,55.2,59.3,40.3,69.7C25.5,80.1,6.6,86,-11.3,83.7C-29.2,81.4,-46.1,70.8,-56.4,56.2C-66.7,41.6,-70.4,23,-71.9,4.8C-73.4,-13.3,-72.7,-30.9,-64.1,-42.6C-55.5,-54.2,-39.1,-60,-24.1,-68.8C-9.1,-77.5,4.5,-89.3,15.8,-85.4C27.1,-81.5,36.1,-61.9,40,-52.7Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
    </section>
  );
}
