# Backend Berita & Informasi Sekolah

Backend API lengkap untuk aplikasi Berita & Informasi Sekolah menggunakan NestJS, PostgreSQL, dan TypeORM.

## 🚀 Fitur Utama

### 1. **Manajemen Berita (News)**
- ✅ Buat, baca, update, dan hapus berita
- ✅ Berita unggulan (featured)
- ✅ Berita terbaru
- ✅ Kategorisasi berita
- ✅ Pencarian berita
- ✅ Tracking views
- ✅ Sistem slug otomatis
- ✅ Excerpt otomatis dari konten

### 2. **Kategorisasi (Categories)**
- ✅ Manajemen kategori berita
- ✅ Aktivasi/deaktivasi kategori
- ✅ Urutan kategori yang dapat dikustomisasi
- ✅ Warna kategori untuk UI

### 3. **Pengumuman (Announcements)**
- ✅ 4 tipe pengumuman: Biasa, Penting, Sangat Penting, Mendesak
- ✅ Sistem expire date untuk pengumuman
- ✅ Pembersihan otomatis pengumuman kadaluarsa
- ✅ Filter berdasarkan tipe
- ✅ Pencarian pengumuman

### 4. **Kontak Sekolah (Contacts)**
- ✅ Berbagai tipe kontak: Phone, Email, Address, Website, Social Media
- ✅ Manajemen kontak dengan urutan
- ✅ Ikon custom untuk setiap kontak
- ✅ Aktivasi/deaktivasi kontak

### 5. **Pencarian Global (Search)**
- ✅ Pencarian berita dan pengumuman
- ✅ Filter per tipe konten
- ✅ Pencarian berbasis keyword
- ✅ Limit hasil yang dapat dikustomisasi

## 📋 Requirement

- Node.js v18 atau lebih tinggi
- PostgreSQL v12 atau lebih tinggi
- npm atau yarn

## 🔧 Setup & Instalasi

### 1. Clone atau Download Project
```bash
cd c:\Users\Asus\Downloads\backend-beritaiinformasisekolah
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Konfigurasi Environment
Copy dan buat file `.env`:
```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=your_password
DB_DATABASE=berita_sekolah
NODE_ENV=development
PORT=3000
```

### 4. Migrasi Database
Database akan otomatis termigrasi pada saat pertama kali aplikasi dijalankan (synchronize: true pada development).

### 5. Jalankan Development Server
```bash
npm run start:dev
```

Server akan berjalan di: `http://localhost:3000`

## 📚 API Endpoints

### Health Check
```
GET / - Pesan sambutan
GET /health - Status server
GET /api/docs - Dokumentasi API
```

### 📰 Berita (News)
```
GET    /api/news - Daftar berita (dengan pagination)
GET    /api/news?page=1&limit=10 - Berita dengan custom pagination
GET    /api/news?categoryId=uuid - Berita berdasarkan kategori
GET    /api/news/featured/list - Berita unggulan
GET    /api/news/recent/list - Berita terbaru
GET    /api/news/search/query?keyword=example - Cari berita
GET    /api/news/slug/:slug - Berita berdasarkan slug (auto increment views)
GET    /api/news/:id - Detail berita spesifik
POST   /api/news - Buat berita baru
PUT    /api/news/:id - Update berita
DELETE /api/news/:id - Hapus berita
PUT    /api/news/:id/toggle-featured - Toggle featured
PUT    /api/news/:id/toggle-active - Toggle status aktif
PUT    /api/news/:id/views - Tambah views
```

**Create/Update News Body:**
```json
{
  "title": "Judul Berita",
  "content": "Konten lengkap berita...",
  "excerpt": "Ringkasan berita (opsional, auto-generate jika kosong)",
  "imageUrl": "https://example.com/image.jpg",
  "author": "Nama Penulis",
  "categoryId": "uuid-kategori",
  "isFeatured": true
}
```

### 📂 Kategori (Categories)
```
GET    /api/categories - Daftar kategori
GET    /api/categories/:id - Detail kategori
POST   /api/categories - Buat kategori
PUT    /api/categories/:id - Update kategori
DELETE /api/categories/:id - Hapus kategori
PUT    /api/categories/:id/toggle-active - Toggle aktivitas
```

**Create/Update Category Body:**
```json
{
  "name": "Nama Kategori",
  "description": "Deskripsi kategori",
  "color": "#3b82f6",
  "order": 1
}
```

### 📢 Pengumuman (Announcements)
```
GET    /api/announcements - Daftar pengumuman (dengan pagination)
GET    /api/announcements?page=1&limit=20 - Dengan custom pagination
GET    /api/announcements?type=penting - Filter berdasarkan tipe
GET    /api/announcements/type/:type - Pengumuman spesifik tipe
GET    /api/announcements/active/list - Pengumuman aktif
GET    /api/announcements/not-expired/list - Pengumuman belum kadaluarsa
GET    /api/announcements/:id - Detail pengumuman
POST   /api/announcements - Buat pengumuman
PUT    /api/announcements/:id - Update pengumuman
DELETE /api/announcements/:id - Hapus pengumuman
PUT    /api/announcements/:id/toggle-active - Toggle aktivitas
POST   /api/announcements/clean-expired - Bersihkan pengumuman kadaluarsa
```

**Tipe Pengumuman:** `biasa`, `penting`, `sangat_penting`, `mendesak`

**Create/Update Announcement Body:**
```json
{
  "title": "Judul Pengumuman",
  "content": "Isi pengumuman lengkap",
  "type": "penting",
  "author": "Administrator",
  "expiredAt": "2025-12-31T23:59:59Z"
}
```

### 📱 Kontak Sekolah (Contacts)
```
GET    /api/contacts - Daftar kontak
GET    /api/contacts/type/:type - Kontak berdasarkan tipe
GET    /api/contacts/:id - Detail kontak
POST   /api/contacts - Buat kontak
PUT    /api/contacts/:id - Update kontak
DELETE /api/contacts/:id - Hapus kontak
PUT    /api/contacts/:id/toggle-active - Toggle aktivitas
```

**Tipe Kontak:** `phone`, `email`, `address`, `website`, `social_media`

**Create/Update Contact Body:**
```json
{
  "label": "Telepon",
  "type": "phone",
  "value": "+62274-123456",
  "icon": "phone-icon",
  "order": 1
}
```

### 🔍 Pencarian (Search)
```
GET /api/search?q=keyword - Cari semua (berita & pengumuman)
GET /api/search/news?q=keyword - Cari berita saja
GET /api/search/announcements?q=keyword - Cari pengumuman saja
GET /api/search?q=keyword&limit=50 - Custom limit hasil
```

Contoh Response:
```json
{
  "news": [...],
  "announcements": [...],
  "keyword": "cari saya"
}
```

## 📊 Database Schema

### News Table
```
- id (UUID, Primary Key)
- title (VARCHAR 255)
- content (TEXT)
- excerpt (TEXT)
- slug (VARCHAR 255, auto-generate)
- imageUrl (VARCHAR 255)
- author (VARCHAR 255)
- views (INT, default: 0)
- isFeatured (BOOLEAN, default: false)
- isActive (BOOLEAN, default: true)
- categoryId (UUID, Foreign Key)
- createdAt (TIMESTAMP)
- updatedAt (TIMESTAMP)
```

### Category Table
```
- id (UUID, Primary Key)
- name (VARCHAR 100, Unique)
- description (TEXT)
- color (VARCHAR 50, default: #3b82f6)
- order (INT)
- isActive (BOOLEAN, default: true)
- createdAt (TIMESTAMP)
- updatedAt (TIMESTAMP)
```

### Announcement Table
```
- id (UUID, Primary Key)
- title (VARCHAR 255)
- content (TEXT)
- type (ENUM: biasa, penting, sangat_penting, mendesak)
- author (VARCHAR 255)
- isActive (BOOLEAN, default: true)
- expiredAt (TIMESTAMP)
- createdAt (TIMESTAMP)
- updatedAt (TIMESTAMP)
```

### Contact Table
```
- id (UUID, Primary Key)
- label (VARCHAR 50)
- type (ENUM: phone, email, address, website, social_media)
- value (VARCHAR 500)
- icon (VARCHAR 100)
- order (INT)
- isActive (BOOLEAN, default: true)
- createdAt (TIMESTAMP)
- updatedAt (TIMESTAMP)
```

## 🔐 Validasi & Error Handling

Semua endpoint dilengkapi dengan:
- ✅ Validasi input menggunakan class-validator
- ✅ Error handling yang konsisten
- ✅ HTTP Status codes yang sesuai
- ✅ Response format yang terstruktur

## 📦 Scripts

```bash
# Development dengan auto-reload
npm run start:dev

# Build production
npm run build

# Run production
npm run start

# Testing
npm test

# Testing coverage
npm run test:cov
```

## 🛠 Teknologi Stack

- **Framework:** NestJS v11.x
- **Database:** PostgreSQL
- **ORM:** TypeORM
- **Validation:** class-validator, class-transformer
- **Configuration:** @nestjs/config
- **Other:** Node.js, TypeScript

## 📝 Catatan Penting

1. **Database Synchronization:** Pada development mode, schema akan otomatis tersinkronisasi
2. **Slug Generation:** Slug secara otomatis di-generate dari judul berita
3. **Excerpt Auto-Generate:** Jika excerpt tidak diberikan, akan di-generate dari konten
4. **Views Tracking:** Views otomatis bertambah saat berita diakses via endpoint slug
5. **Expired Announcements:** Dapat dibersihkan manual melalui endpoint `/api/announcements/clean-expired`

## 🚀 Deployment

Untuk deployment ke production:

1. Set `NODE_ENV=production`
2. Set `synchronize=false` di TypeORM config
3. Jalankan migrasi database secara manual
4. Setup PostgreSQL server di production
5. Configure environment variables dengan nilai production
6. Deploy ke hosting pilihan Anda

## 📞 Support

Jika ada pertanyaan atau issues, silakan hubungi atau buat issue di repository.

## 📄 License

MIT
