import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ImageCarousel } from "@/components/ImageCarousel";
import { Header } from "@/components/Header";
import { Link } from "react-router-dom";
import services from "@/constants/services";
import { carouselImages } from "@/constants/images";
import ContactForm from "@/components/ContactForm";

export const HomePage = () => {
  return (
    <div className="container mx-auto space-y-8 px-4 py-8">
      <Header />

      {/* Tagline Card */}
      <Card id="tagline-background" className="border-0 bg-background">
        <CardContent className="py-6 text-center">
          <h1 id="tagline" className="text-2xl font-bold text-primary-foreground md:text-3xl">
            STRONG CONSTRUCTION, YOUR UNBREAKABLE TRUST
          </h1>
        </CardContent>
      </Card>

      {/* Clickable Service Cards Carousel */}
      <div className="flex flex-row gap-4 overflow-x-auto pb-4 scrollbar-hide">
        {services.map((service) => (
          <Link
            key={service.id}
            to={`/services/${service.id}`}
            className="block w-[220px] flex-shrink-0"
            target="_blank"
          >
            <Card className="group relative cursor-pointer border-border bg-card shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full overflow-hidden">
              <CardContent className="relative z-10 p-5 text-center">
                <div className="mb-3 text-4xl transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
                <h5 className="mb-2 text-lg font-bold text-card-foreground leading-tight">
                  {service.title}
                </h5>
                <p className="text-xs text-muted-foreground leading-normal">
                  {service.description}
                </p>
                <div className="mt-3 text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more →
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Carousel */}
      <ImageCarousel images={carouselImages} />

      {/* Hero Card */}
      <Card className="border-0 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 shadow-xl">
        <CardContent className="py-10 text-center text-white">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            (मुख्य पृष्ठ)
            <br />
            Al Nasir Group Of India
          </h2>
          <p className="text-lg text-white/90">- Nirman Se Vishwas Tak.</p>
        </CardContent>
      </Card>

      {/* Features Section */}
      <div className="space-y-8">
        <Card className="border-border hover:shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-primary">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl">Al Nasir Group Of India</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              बुलढाणा आणि अकोला जिल्ह्यात निर्माण (Construction) आणि दुरुस्ती (Repairing) च्या क्षेत्रात एक विश्वासार्ह नाव.
              आम्ही केवळ इमारतीच नाही तर <strong className="text-foreground">मजबूती आणि विश्वास</strong> यांचाही आधारस्तंभ बनवतो.
            </p>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="border-border hover:shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-primary">
            <CardContent className="pt-6 text-center">
              <div className="mb-4 text-5xl">✅</div>
              <h5 className="mb-2 font-bold">गुणवत्ता सामग्री</h5>
              <p className="text-muted-foreground text-sm">
                आम्ही नेहमी उच्च श्रेणीच्या मटेरियलचा वापर करतो.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border hover:shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-primary">
            <CardContent className="pt-6 text-center">
              <div className="mb-4 text-5xl">✅</div>
              <h5 className="mb-2 font-bold">जलद वितरण</h5>
              <p className="text-muted-foreground text-sm">
                काम निश्चित वेळेत आणि पूर्ण गतीने पूर्ण करणे.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border hover:shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-primary">
            <CardContent className="pt-6 text-center">
              <div className="mb-4 text-5xl">✅</div>
              <h5 className="mb-2 font-bold">तज्ञ टीम</h5>
              <p className="text-muted-foreground text-sm">
                आमच्याकडे अनुभवी कामगार आणि डिझाइनर्सची टीम आहे.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Contact Form Card */}
      {/* <ContactForm /> */}
    </div>
  );
};