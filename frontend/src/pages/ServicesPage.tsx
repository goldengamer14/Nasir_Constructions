import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import services from "@/constants/services";

export const ServicesPage = () => {
  return (
    <div className="container mx-auto px-5 pb-20">
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-4xl font-bold text-foreground">
          (आमच्या सेवा / हमारी सेवाएँ)
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          आम्ही आपल्या स्वप्नातील वास्तूला आकार देण्यासाठी खालील सेवा देतो:
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Link key={service.id} to={`/services/${service.id}`} target="_blank">
            <Card className="group cursor-pointer border-border bg-card shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 h-full">
              <CardContent className="p-8 text-center">
                <div className="mb-4 text-6xl transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
                <h5 className="mb-3 text-xl font-bold text-card-foreground">
                  {service.title}
                </h5>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <p className="text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  View Details →
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-20 text-center">
        <a href="/imgs/Logo.jpg" download="Nasir-Constructions-Brochure.jpg">
          <Button
            variant="outline"
            size="lg"
            id="download-brochure-button"
            className="rounded-[var(--radius)] px-10 py-6 text-xl font-bold shadow-lg hover:shadow-xl"
          >
            <span className="icon">📥</span> DOWNLOAD BROCHURE
          </Button>
        </a>
      </div>
    </div>
  );
};