type RecommendationInput = {
    projectType: string;
    budget: string;
    priority: string;
    message: string;
  };
  
  export type PackageRecommendation = {
    title: string;
    summary: string;
    estimatedBudget: string;
    recommendedDevices: string[];
    nextStep: string;
  };
  
  export function getPackageRecommendation(
    input: RecommendationInput
  ): PackageRecommendation {
    const priority = input.priority.toLowerCase();
    const projectType = input.projectType.toLowerCase();
    const message = input.message.toLowerCase();
  
    if (
      priority.includes("güvenlik") ||
      message.includes("kamera") ||
      message.includes("hırsız") ||
      message.includes("kapı")
    ) {
      return {
        title: "Güvenlik Odaklı Akıllı Ev Paketi",
        summary:
          "Ev güvenliğini artırmak, uzaktan takip sağlamak ve temel güvenlik senaryoları oluşturmak için önerilir.",
        estimatedBudget: input.budget || "Bütçeye göre değişir",
        recommendedDevices: [
          "İç/dış mekan güvenlik kamerası",
          "Akıllı kapı/pencere sensörü",
          "Hareket sensörü",
          "Akıllı priz",
          "Mobil bildirim destekli kontrol uygulaması",
        ],
        nextStep:
          "Evinizin oda sayısı, internet altyapısı ve kamera konumlarına göre net ürün listesi çıkarılmalı.",
      };
    }
  
    if (
      priority.includes("enerji") ||
      message.includes("fatura") ||
      message.includes("elektrik") ||
      message.includes("tasarruf")
    ) {
      return {
        title: "Enerji Verimliliği Paketi",
        summary:
          "Elektrik tüketimini takip etmek, gereksiz tüketimi azaltmak ve cihaz kullanımını daha verimli hale getirmek için önerilir.",
        estimatedBudget: input.budget || "Bütçeye göre değişir",
        recommendedDevices: [
          "Enerji ölçümlü akıllı priz",
          "Akıllı termostat veya klima kontrol cihazı",
          "Zamanlayıcı otomasyon senaryoları",
          "Tüketim takip paneli",
          "AI destekli tasarruf önerileri",
        ],
        nextStep:
          "Önce en çok elektrik tüketen cihazlar belirlenmeli, ardından ölçüm ve otomasyon planı hazırlanmalı.",
      };
    }
  
    if (
      priority.includes("konfor") ||
      message.includes("ışık") ||
      message.includes("aydınlatma") ||
      message.includes("perde") ||
      message.includes("klima")
    ) {
      return {
        title: "Konfor ve Otomasyon Paketi",
        summary:
          "Günlük ev kullanımını kolaylaştırmak, ışık/klima/priz gibi cihazları senaryolarla yönetmek için önerilir.",
        estimatedBudget: input.budget || "Bütçeye göre değişir",
        recommendedDevices: [
          "Akıllı ampul veya anahtar",
          "Akıllı priz",
          "Klima kontrol modülü",
          "Hareket sensörü",
          "Sesli asistan veya merkezi kontrol uygulaması",
        ],
        nextStep:
          "Günlük kullanım alışkanlıklarınıza göre sabah, gece, evden çıkış ve eve dönüş senaryoları tasarlanmalı.",
      };
    }
  
    if (
      projectType.includes("işletme") ||
      projectType.includes("otomasyon") ||
      message.includes("müşteri") ||
      message.includes("randevu") ||
      message.includes("teklif")
    ) {
      return {
        title: "AI İşletme Otomasyon Paketi",
        summary:
          "Müşteri karşılama, lead toplama, otomatik kayıt ve operasyon takibi için önerilir.",
        estimatedBudget: input.budget || "Bütçeye göre değişir",
        recommendedDevices: [
          "Web chatbot",
          "Google Sheets / CRM kayıt sistemi",
          "Otomatik e-posta bildirimi",
          "Müşteri ihtiyaç sınıflandırması",
          "Haftalık raporlama akışı",
        ],
        nextStep:
          "İşletmenizin müşteri akışı analiz edilip ilk otomasyon senaryosu belirlenmeli.",
      };
    }
  
    return {
      title: "Başlangıç Akıllı Teknoloji Paketi",
      summary:
        "İhtiyacınız netleştikçe güvenlik, konfor, enerji veya işletme otomasyonu tarafında özelleştirilebilir başlangıç paketi.",
      estimatedBudget: input.budget || "Bütçeye göre değişir",
      recommendedDevices: [
        "Akıllı priz",
        "Temel güvenlik kamerası",
        "Akıllı aydınlatma",
        "Mobil kontrol uygulaması",
        "İhtiyaca göre ek sensörler",
      ],
      nextStep:
        "Kısa bir ön görüşme ile ihtiyaçlar netleştirilip size özel ürün ve kurulum planı çıkarılmalı.",
    };
  }