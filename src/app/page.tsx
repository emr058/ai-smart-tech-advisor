import { siteConfig, services, processSteps } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LeadForm } from "@/components/sections/LeadForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            {siteConfig.owner}
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            {siteConfig.name}
          </h1>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {siteConfig.description}
          </p>

          <p className="mt-4 text-xl font-medium">
            {siteConfig.tagline}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <a href="#on-analiz">Ön Analiz Al</a>
            </Button>
            <Button size="lg" variant="outline">
              Hizmetleri Gör
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-3xl font-bold">Hizmetler</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Akıllı ev, AI otomasyon ve teknoloji danışmanlığı hizmetlerini tek
          çatı altında topluyoruz.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title}>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-3xl font-bold">Nasıl Çalışır?</h2>
        <LeadForm />

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {processSteps.map((step) => (
            <Card key={step.title}>
              <CardHeader>
                <CardTitle>{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <Card>
          <CardHeader>
            <CardTitle>İlk hedefimiz</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Bu platformun ilk versiyonu, müşterinin ihtiyacını analiz eden,
              uygun teknoloji paketini öneren ve potansiyel müşteri bilgisini
              kaydeden bir AI danışman sistemi olarak geliştirilecektir.
            </p>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}