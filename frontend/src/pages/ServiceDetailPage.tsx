import { useParams, Navigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ContactForm from "@/components/ContactForm";
import services from "@/constants/services";
import { ServiceOption } from "@/types";

export const ServiceDetailPage = () => {
    const { serviceId } = useParams<{ serviceId: string }>();

    const service = services.find((s) => s.id === serviceId);

    if (!service) {
        return <Navigate to="/services" replace />;
    }

    return (
        <div className="container mx-auto px-5 py-12 space-y-12">
            {/* Hero Section */}
            <Card className="border-2 border-primary bg-gradient-to-br from-card to-muted shadow-xl">
                <CardHeader className="text-center pb-8">
                    <div className="mb-6 text-8xl">{service.icon}</div>
                    <CardTitle className="text-4xl md:text-5xl font-bold text-primary">
                        {service.title}
                    </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        {service.description}
                    </p>
                </CardContent>
            </Card>

            {/* Details Grid */}
            <div className="grid gap-8 md:grid-cols-2">
                {/* What We Offer */}
                <Card className="border-border bg-card shadow-md hover:shadow-lg transition-shadow">
                    <CardHeader>
                        <CardTitle className="text-2xl flex items-center gap-3">
                            <span className="text-3xl">📋</span>
                            What We Offer
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {service.details?.offers?.map((offer, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <span className="text-primary text-xl mt-1 flex-shrink-0">✓</span>
                                <p className="text-muted-foreground leading-relaxed">{offer}</p>
                            </div>
                        )) || (
                                <p className="text-muted-foreground">
                                    Professional {service.title.toLowerCase()} services.
                                </p>
                            )}
                    </CardContent>
                </Card>

                {/* Why Choose Us */}
                <Card className="border-border bg-card shadow-md hover:shadow-lg transition-shadow">
                    <CardHeader>
                        <CardTitle className="text-2xl flex items-center gap-3">
                            <span className="text-3xl">⭐</span>
                            Why Choose Us
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {service.details?.benefits?.map((benefit, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <span className="text-primary text-xl mt-1 flex-shrink-0">✓</span>
                                <p className="text-muted-foreground leading-relaxed">{benefit}</p>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>

            {/* Process Timeline */}
            {service.details?.process && (
                <Card className="border-border bg-card shadow-md">
                    <CardHeader>
                        <CardTitle className="text-2xl flex items-center gap-3">
                            <span className="text-3xl">🔄</span>
                            Our Process
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-6">
                            {service.details.process.map((step, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                                        {index + 1}
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-foreground mb-1">{step.title}</h4>
                                        <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* Contact Form */}
            <div className="pt-8">
                <h2 className="text-3xl font-bold text-center mb-2 text-foreground">
                    Interested in {service.title}?
                </h2>
                <p className="text-center text-muted-foreground mb-8">
                    Fill out the form below and we'll get back to you within 24 hours
                </p>
                <ContactForm defaultRequirement={service.id as ServiceOption} />
            </div>
        </div>
    );
};