import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const services = [
  {
    icon: "🏚️",
    title: "Old Building Demolition",
    description: "जुन्या इमारतींचे सुरक्षित आणि जलद पाडकाम।",
  },
  {
    icon: "🔧",
    title: "Old Building Repairing",
    description: "गळती, तडे किंवा मजबूतीसाठी जुन्या इमारतींची आधुनिक पद्धतीने दुरुस्त।",
  },
  {
    icon: "🏗️",
    title: "New Construction",
    description: "नवीन प्लॉटवर मजबूत पाया आणि मॉडर्न स्ट्रक्चरसह बांधकाम।",
  },
  {
    icon: "🅿️",
    title: "Parking Development",
    description: "रहिवासी आणि व्यावसायिक इमारतींसाठी शिस्तबद्ध पार्किंग झोन निर्मिती।",
  },
  {
    icon: "🎨",
    title: "Internal & External Painting",
    description: "घराला नवीन लूक देण्यासाठी उच्च दर्जाचे वॉल पेंटिंग।",
  },
  {
    icon: "✨",
    title: "Interior & Exterior Design",
    description: "घराच्या आतली आणि बाहेरची आकर्षक सजावट (POP, कपाट, मॉड्युलर डिझाइन)।",
  },
];

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
        {services.map((service, index) => (
          <Card
            key={index}
            className="group cursor-pointer border-border bg-card shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
          >
            <CardContent className="p-8 text-center">
              <div className="mb-4 text-6xl transition-transform duration-300 group-hover:scale-110">{service.icon}</div>
              <h5 className="mb-3 text-xl font-bold text-card-foreground">{service.title}</h5>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-20 text-center">
        <a href="/imgs/Logo.jpg" download="Nasir-Constructions-Brochure.jpg">
          <Button
            variant="brand"
            size="lg"
            className="rounded-[var(--radius)] px-10 py-6 text-xl font-bold shadow-lg hover:shadow-xl"
          >
            📥 DOWNLOAD BROCHURE
          </Button>
        </a>
      </div>
    </div>
  );
};