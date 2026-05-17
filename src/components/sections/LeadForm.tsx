"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";




type LeadFormData = {
  name: string;
  contact: string;
  projectType: string;
  budget: string;
  priority: string;
  message: string;
};

const initialFormData: LeadFormData = {
  name: "",
  contact: "",
  projectType: "",
  budget: "",
  priority: "",
  message: "",
};

export function LeadForm() {
    const [formData, setFormData] = useState<LeadFormData>(initialFormData);
    const [submittedData, setSubmittedData] = useState<LeadFormData | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState<string | null>(null);
  
    function updateField(field: keyof LeadFormData, value: string) {
      setFormData((current) => ({
        ...current,
        [field]: value,
      }));
    }
  
    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
  
      try {
        setIsSubmitting(true);
        setSubmitMessage(null);
  
        const response = await fetch("/api/leads", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
  
        const result = await response.json();
  
        if (!response.ok || !result.success) {
          throw new Error(result.error || "Form gönderilemedi.");
        }
  
        setSubmittedData(formData);
        setSubmitMessage("Talebiniz başarıyla kaydedildi.");
        setFormData(initialFormData);
      } catch (error) {
        console.error(error);
        setSubmitMessage("Bir hata oluştu. Lütfen tekrar deneyin.");
      } finally {
        setIsSubmitting(false);
      }
    }
  

  return (
    <section id="on-analiz" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8 max-w-2xl">
        <h2 className="text-3xl font-bold">Ücretsiz Ön Analiz</h2>
        <p className="mt-3 text-muted-foreground">
          Eviniz veya işletmeniz için ihtiyacınızı yazın. Size uygun akıllı
          teknoloji, otomasyon veya ürün danışmanlığı planını çıkarmak için ilk
          bilgileri alalım.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Card>
          <CardHeader>
            <CardTitle>İhtiyaç Formu</CardTitle>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Ad Soyad</Label>
                  <Input
                    id="name"
                    placeholder="Emir Aydın"
                    value={formData.name}
                    onChange={(event) => updateField("name", event.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact">Telefon veya E-posta</Label>
                  <Input
                    id="contact"
                    placeholder="05xx xxx xx xx veya mail"
                    value={formData.contact}
                    onChange={(event) =>
                      updateField("contact", event.target.value)
                    }
                    required
                  />
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                <div className="space-y-2">
                  <Label htmlFor="projectType">Alan</Label>
                  <select
                    id="projectType"
                    className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
                    value={formData.projectType}
                    onChange={(event) =>
                      updateField("projectType", event.target.value)
                    }
                    required
                  >
                    <option value="">Seçiniz</option>
                    <option value="Akıllı Ev">Akıllı Ev</option>
                    <option value="Küçük İşletme">Küçük İşletme</option>
                    <option value="AI Otomasyon">AI Otomasyon</option>
                    <option value="Ürün Danışmanlığı">
                      Ürün Danışmanlığı
                    </option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget">Tahmini Bütçe</Label>
                  <select
                    id="budget"
                    className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
                    value={formData.budget}
                    onChange={(event) =>
                      updateField("budget", event.target.value)
                    }
                    required
                  >
                    <option value="">Seçiniz</option>
                    <option value="5.000 TL altı">5.000 TL altı</option>
                    <option value="5.000 - 15.000 TL">
                      5.000 - 15.000 TL
                    </option>
                    <option value="15.000 - 50.000 TL">
                      15.000 - 50.000 TL
                    </option>
                    <option value="50.000 TL üzeri">50.000 TL üzeri</option>
                    <option value="Kararsız">Kararsız</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="priority">Öncelik</Label>
                  <select
                    id="priority"
                    className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
                    value={formData.priority}
                    onChange={(event) =>
                      updateField("priority", event.target.value)
                    }
                    required
                  >
                    <option value="">Seçiniz</option>
                    <option value="Güvenlik">Güvenlik</option>
                    <option value="Konfor">Konfor</option>
                    <option value="Enerji Verimliliği">
                      Enerji Verimliliği
                    </option>
                    <option value="Otomasyon">Otomasyon</option>
                    <option value="Doğru Ürün Seçimi">
                      Doğru Ürün Seçimi
                    </option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">İhtiyacınızı Anlatın</Label>
                <Textarea
                  id="message"
                  placeholder="Örneğin: Evime kamera, akıllı priz ve ışık sistemi kurmak istiyorum ama hangi ürünleri almam gerektiğini bilmiyorum..."
                  value={formData.message}
                  onChange={(event) =>
                    updateField("message", event.target.value)
                  }
                  required
                />
              </div>

              <Button type="submit" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? "Gönderiliyor..." : "Ön Analiz Talebi Gönder"}
                </Button>

                {submitMessage && (
                    <p className="text-sm font-medium text-muted-foreground">
                        {submitMessage}
                    </p>
                    )}
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Bu form ne işe yarar?</CardTitle>
          </CardHeader>

          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <p>
              Bu form, ileride AI danışman sisteminin ilk veri toplama ekranı
              olacak.
            </p>
            <p>
              Müşteri ihtiyacını, bütçesini ve önceliğini girerek sana potansiyel
              müşteri olarak düşecek.
            </p>
            <p>
              Sonraki adımda bu bilgiler Supabase veya Google Sheets’e
              kaydedilecek.
            </p>

            {submittedData && (
              <div className="mt-6 rounded-lg border bg-muted p-4 text-foreground">
                <p className="font-medium">Son gönderilen test verisi:</p>
                <pre className="mt-3 overflow-auto text-xs">
                  {JSON.stringify(submittedData, null, 2)}
                </pre>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}