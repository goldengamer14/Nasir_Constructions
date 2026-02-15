import { Card, CardContent } from "@/components/ui/card";
import { projectImages } from "@/constants/images";

export const ProjectsDonePage = () => {
  return (
    <div className="container mx-auto px-5 pb-20">
      <h2 className="mb-12 text-center text-4xl font-bold text-foreground">
        COMPLETED PROJECTS
      </h2>
      <Card className="border-border bg-card shadow-sm">
        <CardContent className="p-16 text-center">
          <div className="mb-6 text-6xl">🏗️</div>
          <p className="text-xl text-muted-foreground">Projects gallery coming soon...</p>
          <p className="mt-3 text-sm text-muted-foreground">We're working on showcasing our completed projects.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export const CurrentProjectPage = () => {
  return (
    <div className="container mx-auto px-5 pb-20">
      <h2 className="mb-12 text-center text-4xl font-bold text-foreground">
        SITE PROGRESS
      </h2>
      <Card className="mx-auto max-w-4xl border-border bg-card shadow-lg">
        <CardContent className="p-6">
          <img
            src={projectImages.siteProgress.src}
            alt={projectImages.siteProgress.alt}
            className="w-full rounded-[var(--radius-md)] shadow-md"
          />
        </CardContent>
      </Card>
    </div>
  );
};

export const FutureProjectPage = () => {
  return (
    <div className="container mx-auto px-5 pb-20">
      <h2 className="mb-12 text-center text-4xl font-bold text-foreground">
        FUTURE PROJECT
      </h2>
      <Card className="mx-auto max-w-4xl border-border bg-card shadow-lg">
        <CardContent className="p-6">
          <img
            src={projectImages.construction.src}
            alt={projectImages.construction.alt}
            className="w-full rounded-[var(--radius-md)] shadow-md"
          />
        </CardContent>
      </Card>
    </div>
  );
};

export const ContactPage = () => {
  return (
    <div className="container mx-auto px-5 pb-20">
      <h2 className="mb-12 text-center text-4xl font-bold text-foreground">
        CONTACT US
      </h2>
      <Card className="mx-auto max-w-2xl border-border bg-card shadow-lg">
        <CardContent className="p-10">
          <div className="space-y-8 text-center">
            <div className="space-y-3">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-3xl">
                📞
              </div>
              <h3 className="text-xl font-bold text-card-foreground">Phone</h3>
              <p className="text-lg text-muted-foreground">+91 1234567890</p>
            </div>
            
            <div className="h-px bg-border"></div>
            
            <div className="space-y-3">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-3xl">
                ✉️
              </div>
              <h3 className="text-xl font-bold text-card-foreground">Email</h3>
              <p className="text-lg text-muted-foreground">info@nasirconstructions.com</p>
            </div>
            
            <div className="h-px bg-border"></div>
            
            <div className="space-y-3">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-3xl">
                📍
              </div>
              <h3 className="text-xl font-bold text-card-foreground">Address</h3>
              <p className="text-lg text-muted-foreground">
                Buldhana & Akola District
                <br />
                Maharashtra, India
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};