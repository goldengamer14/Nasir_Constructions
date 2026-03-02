import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect } from "react";
import type { UserFormData, ServiceOption } from "@/types";
import services from "@/constants/services";

interface ContactFormProps {
    defaultRequirement?: ServiceOption;
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
        requirement: defaultRequirement || "new-construction" as ServiceOption,
    });

    const [showCustomDomain, setShowCustomDomain] = useState(false);

    // Update requirement when defaultRequirement changes
    useEffect(() => {
        if (defaultRequirement) {
            setFormData((prev) => ({ ...prev, requirement: defaultRequirement }));
        }
    }, [defaultRequirement]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Here you would typically send the data to your backend
        alert("Thank you for your inquiry! We will contact you soon.");
    };

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
                                onValueChange={(value) => setFormData({ ...formData, requirement: value as ServiceOption })}
                                className="space-y-2"
                            >
                                {services.map((service) => {
                                    const isDisabled = formData.requirement !== service.id && formData.requirement !== "other";
                                    return (
                                        <div key={service.id} className="flex items-center space-x-2">
                                            <RadioGroupItem value={service.id} id={service.id} disabled={isDisabled} />
                                            <Label htmlFor={service.id}
                                                className={"font-normal cursor-pointer".concat(formData.requirement === service.id ? " text-primary" : " text-muted-foreground")}
                                            >
                                                {service.title}
                                            </Label>
                                        </div>
                                    );
                                })}
                            </RadioGroup>
                        </div>

                        <Button type="submit" className="w-full text-foreground" size="lg">
                            Submit Inquiry
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default ContactForm;