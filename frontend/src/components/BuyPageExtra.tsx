import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BuyPageExtra = ({ service }: { service: any }) => {
    return (
        <div className="container py-12">
            {/* Details Grid */}
            <div className="grid gap-8 md:grid-cols-2">
                {/* What We Offer */}
                <Card className="border-border bg-card shadow-md hover:shadow-lg transition-shadow">
                    <CardHeader>
                        <CardTitle className="text-2xl flex items-center gap-3">
                            <span className="text-3xl">📋</span>
                            Building Materials
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {service.details?.offers?.map((offer, index) => index > 5 ? (
                            <div key={index} className="flex items-start gap-3">
                                <span className="text-primary text-xl mt-1 flex-shrink-0">✓</span>
                                <p className="text-muted-foreground leading-relaxed">{offer}</p>
                            </div>
                        ) : null) || (
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
                            Real Estate
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
        </div>
    );
}

export default BuyPageExtra;