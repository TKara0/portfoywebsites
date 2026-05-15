# Kişisel Portföy Web Sitesi

Vanilla HTML5, CSS3 ve JavaScript ile oluşturulan modern, responsive ve dark mode temalı kişisel portföy web sitesi.

## 🚀 Özellikler

- **Responsive Tasarım**: Mobil, tablet ve desktop cihazlara uygun
- **Dark Mode**: Gözler açısından rahat koyu tema
- **Modern UI/UX**: Smooth animasyonlar ve geçişler
- **Portfolio Filtreleme**: Proje türlerine göre filtreleme
- **Lightbox Modal**: Proje resimlerini zoom yaparak görüntüleme
- **Blog Sistemi**: Blog yazıları ve kategori yönetimi
- **Smooth Navigation**: Sayfa içi smooth scroll
- **Hamburger Menu**: Mobile uyumlu menu
- **Lazy Loading**: Resimler için lazy loading desteği
- **SEO Optimized**: Meta taglar ve semantic HTML

## 📁 Proje Yapısı

```
portfolio/
├── index.html          # Ana sayfa
├── blog.html           # Blog sayfası
├── css/
│   ├── styles.css      # Global stiller ve dark mode
│   ├── hero.css        # Hero section
│   ├── portfolio.css   # Portfolio ve about sections
│   └── blog.css        # Blog sayfası
├── js/
│   ├── main.js         # Navigation ve global funktiyonlar
│   ├── portfolio.js    # Portfolio filtering ve lightbox
│   └── blog.js         # Blog yönetimi
├── assets/
│   ├── images/         # Resim dosyaları
│   └── data/
│       ├── projects.json        # Proje verileri
│       └── blog-posts.json      # Blog yazıları
├── README.md           # Bu dosya
└── .github/
    └── copilot-instructions.md
```

## 🛠️ Kullanılan Teknolojiler

- **HTML5**: Semantic markup
- **CSS3**: Grid, Flexbox, Gradients, Animations
- **JavaScript**: ES6+, Fetch API, Intersection Observer
- **JSON**: Proje ve blog verisi

## 🎨 Tasarım Özellikleri

### Renkler (Dark Mode)
- **Primary Background**: `#0a0e27`
- **Secondary Background**: `#16213e`
- **Text Primary**: `#e8e8ff`
- **Accent Color**: `#00d4ff`

### Animasyonlar
- Fade-in/Fade-out
- Slide-in/Slide-out
- Hover efektleri
- Scroll animasyonları

## 📋 Bölümler

### 1. Hero Section
- Profil resmi
- Başlık ve açıklama
- CTA butonları
- Floating animasyon

### 2. About Section
- Hakkımda metni
- Teknoloji tagları
- Sosyal medya linkler
- CV download

### 3. Portfolio Section
- Proje kartları (Grid layout)
- Kategori filtreleri
- Lightbox modal
- Responsive tasarım

### 4. Blog Section
- Blog yazıları listesi
- Kategori filtreleme
- Pagination
- Blog post detay sayfası
- Recent posts sidebar
- Search functionality

### 5. Contact Section
- İletişim formu
- İletişim bilgileri

## 🚀 Kullanım

### 1. Proje verilerini güncelleyin
`assets/data/projects.json` dosyasını kendi projeleriniz ile doldurunuz.

### 2. Blog yazılarını ekleyin
`assets/data/blog-posts.json` dosyasına blog yazılarınızı ekleyin.

### 3. Resimleri ekleyin
`assets/images/` klasörüne profil resimleri ve proje görselleri ekleyin.

### 4. İletişim bilgilerini güncelleyin
`index.html` dosyasındaki contact section'ı kendi bilgileriniz ile değiştirin.

### 5. Sosyal medya linklerini ekleyin
`index.html` ve `css/portfolio.css` dosyalarındaki sosyal medya linklerini güncelleyin.

## 📱 Responsive Breakpoints

- **Desktop**: 1200px ve üstü
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: 480px ve altı

## ⚡ Performance

- Lighthouse Performance Score: > 80
- First Contentful Paint (FCP): < 2s
- Cumulative Layout Shift (CLS): < 0.1
- Lazy Loading: Evet

## 🔧 Deployment

### Netlify ile Deploy
1. Repository'nizi GitHub'a push edin
2. Netlify'da yeni site oluşturun
3. GitHub repository'nizi bağlayın
4. Build settings: (boş bırakın, statik site)
5. Deploy edin

### Vercel ile Deploy
1. Repository'nizi GitHub'a push edin
2. Vercel'da yeni project oluşturun
3. GitHub repository'nizi seçin
4. Deploy edin

### Manual Deployment
1. `index.html`, `blog.html`, `css/`, `js/`, `assets/` dosyalarını upload edin
2. Web sunucunuza (Apache, Nginx vb.) yükleyin

## 📝 Notlar

- Proje verileri JSON formatında saklanır (backend'e gerek yok)
- Blog yazıları HTML formatında saklanır
- İletişim formu için Formspree veya Netlify Forms kullanılabilir
- Resimler external CDN'den yüklenmektedir (placeholder olarak)

## 🔐 Güvenlik

- XSS koruması
- Form validasyonu
- HTTPS önerilir

## 📄 Lisans

Bu proje açık kaynak kodludur. Özgürce kullanabilirsiniz.

## 👨‍💻 Geliştirici

Sizin adınız - [LinkedIn](https://linkedin.com) | [GitHub](https://github.com)

---

**Son güncelleme**: 15 Mayıs 2024
