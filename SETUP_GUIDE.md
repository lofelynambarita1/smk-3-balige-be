# Backend Setup Guide - Berita & Informasi Sekolah

## ✅ Apa yang Sudah Dibuat

Anda sekarang memiliki **Backend NestJS yang lengkap dan siap digunakan** dengan semua fitur yang tercermin di frontend:

### 📦 Modules & Features:
- ✅ **Berita (News)** - Featured, Recent, Search, Views tracking
- ✅ **Kategori (Categories)** - Manajemen kategori berita  
- ✅ **Pengumuman (Announcements)** - 4 tipe (Biasa, Penting, Sangat Penting, Mendesak)
- ✅ **Kontak Sekolah (Contacts)** - Berbagai tipe kontak
- ✅ **Pencarian Global (Search)** - Cari berita dan pengumuman

### 📂 Struktur Proyek:
```
src/
├── config/          # Konfigurasi database
├── controllers/     # API endpoints
├── dtos/           # Data validation
├── entities/       # Database models
├── modules/        # Feature modules
├── services/       # Business logic
├── scripts/        # Database seeding
├── main.ts         # Entry point
└── app.module.ts   # Root module
```

---

## 🚀 Langkah Setup PostgreSQL Database

### **Opsi 1: Gunakan PostgreSQL Local (Windows)**

1. **Install PostgreSQL** (jika belum):
   - Download dari: https://www.postgresql.org/download/windows/
   - Install dengan default settings
   - Set password untuk user `postgres` (ingat password ini!)

2. **Buat Database Baru**:
   ```bash
   # Buka Command Prompt atau PowerShell
   psql -U postgres
   
   # Masukkan password saat diminta
   ```

3. **Dalam psql prompt, jalankan:**
   ```sql
   CREATE DATABASE berita_sekolah;
   \l  -- Verifikasi database terbuat
   \q  -- Keluar dari psql
   ```

### **Opsi 2: Gunakan PostgreSQL Docker** (Recommended)

Jika sudah install Docker:

```bash
# Buat container PostgreSQL
docker run --name postgres-sekolah -e POSTGRES_DATABASE=berita_sekolah -e POSTGRES_PASSWORD=password -p 5432:5432 -d postgres:latest

# Verifikasi container berjalan
docker ps
```

---

## 🔧 Setup Backend

### **1. Update File `.env`:**

Lokasi: `c:\Users\Asus\Downloads\backend-beritaiinformasisekolah\.env`

```env
# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=password        # Ganti dengan password Anda
DB_DATABASE=berita_sekolah

# Server Configuration
NODE_ENV=development
PORT=3000
```

### **2. Install Dependencies:**

```bash
cd c:\Users\Asus\Downloads\backend-beritaiinformasisekolah
npm install
```

### **3. Build Project:**

```bash
npm run build
```

### **4. Jalankan Development Server:**

```bash
npm run start:dev
```

**Output yang diharapkan:**
```
✅ Server berjalan di http://localhost:3000
```

---

## 📊 Database Seeding (Populate Sample Data)

Untuk mengisi database dengan sample data:

```bash
# Seeding database
npm run seed
```

Ini akan membuat:
- 4 kategori berita
- 6 kontak sekolah
- 4 pengumuman sampel

---

## 🌐 Test API Endpoints

### Buka Postman atau Browser dan coba endpoints ini:

**1. Health Check:**
```
GET http://localhost:3000/health
```

**2. Dokumentasi API:**
```
GET http://localhost:3000/api/docs
```

**3. List Kategori:**
```
GET http://localhost:3000/api/categories
```

**4. List Berita:**
```
GET http://localhost:3000/api/news
```

**5. Berita Unggulan:**
```
GET http://localhost:3000/api/news/featured/list
```

**6. Cari Berita:**
```
GET http://localhost:3000/api/news/search/query?keyword=sekolah
```

**7. List Pengumuman:**
```
GET http://localhost:3000/api/announcements
```

**8. Kontak Sekolah:**
```
GET http://localhost:3000/api/contacts
```

---

## 🛠 Common Issues & Solutions

### **Error: "connect ECONNREFUSED"**
**Penyebab:** PostgreSQL tidak running
**Solusi:**
```bash
# Windows - Start PostgreSQL service
net start PostgreSQL15  # Sesuaikan versi

# Atau buka Services > Restart postgresql service
```

### **Error: "FATAL: database 'berita_sekolah' does not exist"**
**Solusi:** Buat database terlebih dahulu (lihat langkah Setup PostgreSQL)

### **Error: "ModuleRef" dependency issues**
**Solusi:**
```bash
npm install
npm run build
npm run start:dev
```

---

## 📝 Available Scripts

```bash
# Development dengan auto-reload
npm run start:dev

# Production build
npm run build

# Run production
npm run start

# Testing
npm test

# Linting & Formatting
npm run lint
npm run format

# Database seeding
npm run seed
```

---

## 🔐 Key Features Implemented

### ✅ Berita (News)
- [x] CRUD operations
- [x] Featured news
- [x] Recent news
- [x] Search functionality
- [x] Views counter
- [x] Slug generation
- [x] Category association
- [x] Pagination support

### ✅ Pengumuman (Announcements)
- [x] CRUD operations
- [x] 4 tipe pengumuman
- [x] Expire date handling
- [x] Auto-cleanup expired items
- [x] Filter by type
- [x] Search functionality

### ✅ Kategori (Categories)
- [x] CRUD operations
- [x] Color coding
- [x] Order management
- [x] Activation/Deactivation

### ✅ Kontak (Contacts)
- [x] CRUD operations
- [x] Multiple contact types
- [x] Icon support
- [x] Order management

### ✅ Pencarian (Search)
- [x] Global search
- [x] Separate searches
- [x] Pagination
- [x] Keyword filtering

---

## 🎯 Next Steps

1. ✅ **Database Setup** - Setup PostgreSQL
2. ✅ **Environment Variables** - Configure `.env`
3. ✅ **Install Dependencies** - Run `npm install`
4. ✅ **Start Server** - Run `npm run start:dev`
5. ✅ **Seed Data** - Run `npm run seed` (opsional)
6. ✅ **Test Endpoints** - Use Postman/Browser

---

## 📚 Full API Documentation

Lihat file `API_DOCUMENTATION.md` di direktori root untuk dokumentasi lengkap semua endpoints.

---

## 🚀 Production Deployment

Untuk deployment ke production, ikuti:

1. Buat `.env.production`
2. Set `NODE_ENV=production`
3. Set `synchronize=false` di database config
4. Build project: `npm run build`
5. Deploy ke hosting pilihan Anda

---

## ✨ Backend Sudah Lengkap!

**Semua fitur sudah terimplementasi dengan:**
- ✅ Validasi input yang ketat
- ✅ Error handling yang proper
- ✅ Database relationship yang benar
- ✅ CORS enabled
- ✅ Global validation pipes
- ✅ Modular architecture
- ✅ Service layer pattern
- ✅ TypeORM integration

**Backend siap untuk diintegrasikan dengan frontend!**
