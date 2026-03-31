import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect } from "react";
import type { UserFormData } from "@/types";
import services from "@/constants/services";

interface ContactFormProps {
  defaultRequirement?: string;
}

const ContactForm = ({ defaultRequirement }: ContactFormProps) => {
  const [formData, setFormData] = useState<UserFormData>({
    email: "",
    emailDomain: "@gmail.com",
    phoneCountry: "91",
    phoneNumber: "",
    address: "",
    city: "",
    state: "",
    requirement: defaultRequirement || "new-construction",
  });

  const [BuyExtraData, setBuyExtraData] = useState({
    // Buy Property specific fields
    propertyType: "",
    budgetRange: "",
    propertyLocation: "",
    propertySize: "",
    timeframe: "",
    // Sell Property specific fields
    sellPropertyType: "",
    sellPropertyAge: "",
    sellExpectedPrice: "",
    sellPropertyCondition: "",
    additionalNotes: "",
  });

  const [showCustomDomain, setShowCustomDomain] = useState(false);

  useEffect(() => {
    if (defaultRequirement) {
      setFormData((prev) => ({ ...prev, requirement: defaultRequirement }));
    }
  }, [defaultRequirement]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! We will contact you within 24 hours.");
  };

  const isBuyProperty = formData.requirement === "buy-property";
  const isSellProperty = formData.requirement === "sell-property";

  return (
    <div>
      <Card className="mx-auto max-w-2xl border-t-4 border-primary shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Contact Us</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <div className="flex gap-2">
                <Input
                  id="email"
                  type="text"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Username"
                  className="flex-1"
                  required
                />
                <Select
                  value={formData.emailDomain}
                  onValueChange={(value) => {
                    setFormData({ ...formData, emailDomain: value });
                    setShowCustomDomain(value === "@custom.com");
                  }}
                >
                  <SelectTrigger className="w-[150px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="@custom.com">@custom.com</SelectItem>
                    <SelectItem value="@gmail.com">@gmail.com</SelectItem>
                    <SelectItem value="@yahoo.com">@yahoo.com</SelectItem>
                    <SelectItem value="@outlook.com">@outlook.com</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {showCustomDomain && (
                <Input
                  type="text"
                  value={formData.customDomain}
                  onChange={(e) => setFormData({ ...formData, customDomain: e.target.value })}
                  placeholder="@domain.com"
                />
              )}
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <div className="flex gap-2">
                <div className="flex items-center">
                  <span className="flex h-9 items-center rounded-l-md border border-r-0 border-input bg-background px-3 text-sm text-muted-foreground">
                    +
                  </span>
                  <Input
                    type="number"
                    value={formData.phoneCountry}
                    onChange={(e) => setFormData({ ...formData, phoneCountry: e.target.value })}
                    className="w-[70px] rounded-l-none"
                    required
                  />
                </div>
                <Input
                  id="phone"
                  type="number"
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  placeholder="1234567890"
                  className="flex-1"
                  required
                />
              </div>
            </div>

            {/* Address */}
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                type="text"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                placeholder="Street, Apartment, or Landmark"
                required
              />
              <div className="grid gap-3 md:grid-cols-2">
                <Input
                  type="text"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  placeholder="City"
                  required
                />
                <Input
                  type="text"
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  placeholder="State"
                  required
                />
              </div>
            </div>

            {/* Service Requirement */}
            <div className="space-y-3">
              <Label>Service Interested In</Label>
              <RadioGroup
                value={formData.requirement}
                onValueChange={(value) => setFormData({ ...formData, requirement: value })}
                className="space-y-2"
              >
                {services.map((service) => (
                  <div key={service.id} className="flex items-center space-x-2">
                    <RadioGroupItem value={service.id} id={service.id} />
                    <Label htmlFor={service.id} className="font-normal cursor-pointer">
                      {service.title}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            {/* Buy Property Specific Fields */}
            {isBuyProperty && (
              <div className="space-y-6 p-6 bg-muted/30 rounded-lg border border-border">
                <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <span className="text-2xl">🏠</span>
                  Property Requirements
                </h3>

                <div className="space-y-2">
                  <Label htmlFor="propertyType">Property Type *</Label>
                  <Select
                    value={BuyExtraData.propertyType}
                    onValueChange={(value) => setBuyExtraData({ ...BuyExtraData, propertyType: value })}
                    required
                  >
                    <SelectTrigger id="propertyType">
                      <SelectValue placeholder="Select property type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential-plot">Residential Plot</SelectItem>
                      <SelectItem value="commercial-plot">Commercial Plot</SelectItem>
                      <SelectItem value="independent-house">Independent House</SelectItem>
                      <SelectItem value="apartment">Apartment/Flat</SelectItem>
                      <SelectItem value="villa">Villa</SelectItem>
                      <SelectItem value="farmhouse">Farmhouse</SelectItem>
                      <SelectItem value="commercial-space">Commercial Space</SelectItem>
                      <SelectItem value="office-space">Office Space</SelectItem>
                      <SelectItem value="warehouse">Warehouse/Godown</SelectItem>
                      <SelectItem value="agricultural-land">Agricultural Land</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budgetRange">Budget Range *</Label>
                  <Select
                    value={BuyExtraData.budgetRange}
                    onValueChange={(value) => setBuyExtraData({ ...BuyExtraData, budgetRange: value })}
                    required
                  >
                    <SelectTrigger id="budgetRange">
                      <SelectValue placeholder="Select your budget" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-10L">Under ₹10 Lakhs</SelectItem>
                      <SelectItem value="10L-20L">₹10 - ₹20 Lakhs</SelectItem>
                      <SelectItem value="20L-30L">₹20 - ₹30 Lakhs</SelectItem>
                      <SelectItem value="30L-50L">₹30 - ₹50 Lakhs</SelectItem>
                      <SelectItem value="50L-75L">₹50 - ₹75 Lakhs</SelectItem>
                      <SelectItem value="75L-1Cr">₹75 Lakhs - ₹1 Crore</SelectItem>
                      <SelectItem value="1Cr-2Cr">₹1 - ₹2 Crore</SelectItem>
                      <SelectItem value="above-2Cr">Above ₹2 Crore</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="propertyLocation">Preferred Location *</Label>
                  <Select
                    value={BuyExtraData.propertyLocation}
                    onValueChange={(value) => setBuyExtraData({ ...BuyExtraData, propertyLocation: value })}
                    required
                  >
                    <SelectTrigger id="propertyLocation">
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="buldhana-city">Buldhana City</SelectItem>
                      <SelectItem value="buldhana-rural">Buldhana Rural Areas</SelectItem>
                      <SelectItem value="akola-city">Akola City</SelectItem>
                      <SelectItem value="akola-rural">Akola Rural Areas</SelectItem>
                      <SelectItem value="malkapur">Malkapur</SelectItem>
                      <SelectItem value="khamgaon">Khamgaon</SelectItem>
                      <SelectItem value="shegaon">Shegaon</SelectItem>
                      <SelectItem value="jalgaon-jamod">Jalgaon Jamod</SelectItem>
                      <SelectItem value="chikhli">Chikhli</SelectItem>
                      <SelectItem value="other">Other Location</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="propertySize">Property Size</Label>
                    <Select
                      value={BuyExtraData.propertySize}
                      onValueChange={(value) => setBuyExtraData({ ...BuyExtraData, propertySize: value })}
                    >
                      <SelectTrigger id="propertySize">
                        <SelectValue placeholder="Select size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-500sqft">Under 500 sq.ft</SelectItem>
                        <SelectItem value="500-1000sqft">500 - 1000 sq.ft</SelectItem>
                        <SelectItem value="1000-1500sqft">1000 - 1500 sq.ft</SelectItem>
                        <SelectItem value="1500-2000sqft">1500 - 2000 sq.ft</SelectItem>
                        <SelectItem value="2000-3000sqft">2000 - 3000 sq.ft</SelectItem>
                        <SelectItem value="above-3000sqft">Above 3000 sq.ft</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timeframe">Purchase Timeframe</Label>
                    <Select
                      value={BuyExtraData.timeframe}
                      onValueChange={(value) => setBuyExtraData({ ...BuyExtraData, timeframe: value })}
                    >
                      <SelectTrigger id="timeframe">
                        <SelectValue placeholder="When to buy?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediate">Immediately</SelectItem>
                        <SelectItem value="1-3months">Within 1-3 months</SelectItem>
                        <SelectItem value="3-6months">Within 3-6 months</SelectItem>
                        <SelectItem value="6-12months">Within 6-12 months</SelectItem>
                        <SelectItem value="just-exploring">Just Exploring</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            )}

            {/* Sell Property Specific Fields */}
            {isSellProperty && (
              <div className="space-y-6 p-6 bg-muted/30 rounded-lg border border-border">
                <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <span className="text-2xl">🏷️</span>
                  Property Details
                </h3>

                <div className="space-y-2">
                  <Label htmlFor="sellPropertyType">Property Type *</Label>
                  <Select
                    value={BuyExtraData.sellPropertyType}
                    onValueChange={(value) => setBuyExtraData({ ...BuyExtraData, sellPropertyType: value })}
                    required
                  >
                    <SelectTrigger id="sellPropertyType">
                      <SelectValue placeholder="What are you selling?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential-plot">Residential Plot</SelectItem>
                      <SelectItem value="commercial-plot">Commercial Plot</SelectItem>
                      <SelectItem value="independent-house">Independent House</SelectItem>
                      <SelectItem value="apartment">Apartment/Flat</SelectItem>
                      <SelectItem value="villa">Villa</SelectItem>
                      <SelectItem value="farmhouse">Farmhouse</SelectItem>
                      <SelectItem value="commercial-building">Commercial Building</SelectItem>
                      <SelectItem value="office-space">Office Space</SelectItem>
                      <SelectItem value="warehouse">Warehouse/Godown</SelectItem>
                      <SelectItem value="agricultural-land">Agricultural Land</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="sellPropertyAge">Property Age</Label>
                    <Select
                      value={BuyExtraData.sellPropertyAge}
                      onValueChange={(value) => setBuyExtraData({ ...BuyExtraData, sellPropertyAge: value })}
                    >
                      <SelectTrigger id="sellPropertyAge">
                        <SelectValue placeholder="How old?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">New/Under Construction</SelectItem>
                        <SelectItem value="0-5years">0-5 Years</SelectItem>
                        <SelectItem value="5-10years">5-10 Years</SelectItem>
                        <SelectItem value="10-20years">10-20 Years</SelectItem>
                        <SelectItem value="above-20years">Above 20 Years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="sellPropertyCondition">Property Condition</Label>
                    <Select
                      value={BuyExtraData.sellPropertyCondition}
                      onValueChange={(value) => setBuyExtraData({ ...BuyExtraData, sellPropertyCondition: value })}
                    >
                      <SelectTrigger id="sellPropertyCondition">
                        <SelectValue placeholder="Current condition" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="excellent">Excellent</SelectItem>
                        <SelectItem value="good">Good</SelectItem>
                        <SelectItem value="average">Average</SelectItem>
                        <SelectItem value="needs-repair">Needs Repair</SelectItem>
                        <SelectItem value="needs-renovation">Needs Renovation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="sellExpectedPrice">Expected Price Range *</Label>
                  <Select
                    value={BuyExtraData.sellExpectedPrice}
                    onValueChange={(value) => setBuyExtraData({ ...BuyExtraData, sellExpectedPrice: value })}
                    required
                  >
                    <SelectTrigger id="sellExpectedPrice">
                      <SelectValue placeholder="Your expected price" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-10L">Under ₹10 Lakhs</SelectItem>
                      <SelectItem value="10L-20L">₹10 - ₹20 Lakhs</SelectItem>
                      <SelectItem value="20L-30L">₹20 - ₹30 Lakhs</SelectItem>
                      <SelectItem value="30L-50L">₹30 - ₹50 Lakhs</SelectItem>
                      <SelectItem value="50L-75L">₹50 - ₹75 Lakhs</SelectItem>
                      <SelectItem value="75L-1Cr">₹75 Lakhs - ₹1 Crore</SelectItem>
                      <SelectItem value="1Cr-2Cr">₹1 - ₹2 Crore</SelectItem>
                      <SelectItem value="2Cr-5Cr">₹2 - ₹5 Crore</SelectItem>
                      <SelectItem value="above-5Cr">Above ₹5 Crore</SelectItem>
                      <SelectItem value="negotiable">Open to Negotiation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="additionalNotes">Additional Information</Label>
                  <Textarea
                    id="additionalNotes"
                    value={BuyExtraData.additionalNotes}
                    onChange={(e) => setBuyExtraData({ ...BuyExtraData, additionalNotes: e.target.value })}
                    placeholder="Property size, location details, special features, urgency to sell, etc."
                    rows={4}
                    className="resize-none"
                  />
                  <p className="text-xs text-muted-foreground">
                    Include property size, exact location, unique features, or any other relevant details
                  </p>
                </div>
              </div>
            )}

            <Button type="submit" className="w-full" size="lg">
              Submit Inquiry
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactForm;