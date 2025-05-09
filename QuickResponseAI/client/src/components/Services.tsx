import ServiceCard from "@/components/ui/service-card";
import { services } from "@/lib/constants";

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white dark:bg-slate-800 border-t border-gray-100 dark:border-slate-700">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-extrabold text-gray-900 dark:text-white">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 mx-auto text-balance leading-relaxed">
            Comprehensive CGI and design solutions tailored to elevate your brand's visual presence.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
