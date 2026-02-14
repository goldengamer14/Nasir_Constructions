import { Card, CardContent } from "@/components/ui/Card";

export const AboutPage = () => {
  return (
    <div className="container mx-auto px-5 pb-20">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-5xl font-bold text-primary">
          Al Nasir Group Of India
        </h1>
        <p className="text-2xl font-light tracking-wide text-muted-foreground">
          अनुभव और गुणवत्ता का संगम
        </p>
        <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-primary to-primary/60"></div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-5xl space-y-8">
        {/* Introduction Card */}
        <Card className="border-border bg-card shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
          <CardContent className="p-8">
            <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
              <div className="text-6xl flex-shrink-0">🏢</div>
              <div>
                <h4 className="mb-4 text-2xl font-bold text-primary">हमारे बारे में</h4>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Al Nasir Group Of India एक अग्रणी कंस्ट्रक्शन और सर्विस फर्म है, जो महाराष्ट्र के बुलढाणा और अकोला जिले में कार्यरत है। हमारे प्रमुख नासिर खान के नेतृत्व में, हमारी टीम ग्राहकों को उनकी उम्मीद से बेहतर परिणाम देने के लिए प्रतिबद्ध है।
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Working Model Card */}
        <Card className="border-border bg-card shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
          <CardContent className="p-8">
            <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
              <div className="text-6xl flex-shrink-0">🔨</div>
              <div>
                <h4 className="mb-4 text-2xl font-bold text-primary">हमारा कार्य मॉडल</h4>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  हम <strong className="text-foreground">"Material + Labour"</strong> मॉडल पर काम करते हैं, जिससे हमारे ग्राहकों को अलग से भागदौड़ करने की जरूरत नहीं पड़ती। पुरानी इमारत को गिराने से लेकर, नई इमारत की सजावट तक, हम हर काम पूरी जिम्मेदारी के साथ निभाते हैं।
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Mission Card */}
        <Card className="border-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <CardContent className="p-8">
            <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
              <div className="text-6xl flex-shrink-0">🎯</div>
              <div>
                <h4 className="mb-4 text-2xl font-bold text-primary-foreground">आमचे उद्दिष्ट (Our Mission)</h4>
                <p className="text-lg leading-relaxed text-primary-foreground/95">
                  अत्यंत कमी वेळात आणि रास्त दरात उत्कृष्ट दर्जाचे बांधकाम पूर्ण करून ग्राहकांचे समाधान मिळवणे हेच आमचे ध्येय आहे.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Section */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <Card className="border-2 border-border bg-card shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-primary">
            <CardContent className="p-8 text-center">
              <div className="mb-4 text-6xl">👥</div>
              <h3 className="mb-2 text-4xl font-bold text-primary">500+</h3>
              <p className="text-muted-foreground font-medium">संतुष्ट ग्राहक</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-border bg-card shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-primary">
            <CardContent className="p-8 text-center">
              <div className="mb-4 text-6xl">🏗️</div>
              <h3 className="mb-2 text-4xl font-bold text-primary">100+</h3>
              <p className="text-muted-foreground font-medium">पूर्ण प्रोजेक्ट्स</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-border bg-card shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-primary">
            <CardContent className="p-8 text-center">
              <div className="mb-4 text-6xl">⭐</div>
              <h3 className="mb-2 text-4xl font-bold text-primary">10+</h3>
              <p className="text-muted-foreground font-medium">वर्षों का अनुभव</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};