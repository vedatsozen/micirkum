document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Görünür olunca yazianimasyonu ekle
            entry.target.classList.add("yazianimasyonu");
          } else {
            // Görünmez olunca yazianimasyonu kaldır
            entry.target.classList.remove("yazianimasyonu");
          }
        });
      },
      {
        threshold: 0.2, // Elemanın %20’si görünür olunca tetiklenecek
      }
    );
  
    // İzlenecek öğeleri seçelim
    const elements = document.querySelectorAll(".yazi");
  
    elements.forEach((el) => observer.observe(el));
  });
  