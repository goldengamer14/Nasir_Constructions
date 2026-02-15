import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ImageCarousel } from "@/components/ImageCarousel";
import { Header } from "@/components/Header";
import type { CarouselImage, UserFormData } from "@/types";

import { carouselImages } from "@/constants/images";

export const HomePage = () => {
  const [formData, setFormData] = useState<UserFormData>({
    email: "",
    emailDomain: "@gmail.com",
    phoneCountry: "91",
    phoneNumber: "",
    address: "",
    city: "",
    state: "",
    requirement: "plot",
  });

  const [showCustomDomain, setShowCustomDomain] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="container mx-auto space-y-8 px-4 py-8">
      <Header />

      {/* Tagline Card */}
      <Card id="tagline-background" className="border-0 shadow-lg">
        <CardContent className="py-6 text-center">
          <h1 id="tagline" className="text-2xl font-bold text-primary-foreground md:text-3xl">
            STRONG CONSTRUCTION, YOUR UNBREAKABLE TRUST
          </h1>
        </CardContent>
      </Card>

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
                  />
                </div>
                <Input
                  id="phone"
                  type="number"
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  placeholder="1234567890"
                  className="flex-1"
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
              />
              <div className="grid gap-3 md:grid-cols-2">
                <Input
                  type="text"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  placeholder="City"
                />
                <Input
                  type="text"
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  placeholder="State"
                />
              </div>
            </div>

            {/* Requirements */}
            <div className="space-y-3">
              <Label>Requirement</Label>
              <RadioGroup
                value={formData.requirement}
                onValueChange={(value: any) => setFormData({ ...formData, requirement: value })}
                className="space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="plot" id="plot" />
                  <Label htmlFor="plot" className="font-normal cursor-pointer">
                    Plot
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="layout" id="layout" />
                  <Label htmlFor="layout" className="font-normal cursor-pointer">
                    Layout
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="construction" id="construction" />
                  <Label htmlFor="construction" className="font-normal cursor-pointer">
                    Construction
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="repair" id="repair" />
                  <Label htmlFor="repair" className="font-normal cursor-pointer">
                    Repair
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="other" id="other" />
                  <Label htmlFor="other" className="font-normal cursor-pointer">
                    Other
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <Button type="submit" className="w-full" size="lg">
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};