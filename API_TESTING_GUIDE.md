# 📚 API TESTING GUIDE - SCHOOL NEWS SYSTEM

Panduan lengkap untuk testing semua operasi API di Postman.
**⭐ CATATAN PENTING**: Sekarang semua ID menggunakan angka simple (1, 2, 3) bukan UUID!

---

## 📰 BERITA (NEWS)

### 1️⃣ GET - Lihat Semua Berita
```
METHOD: GET
URL: http://localhost:3000/api/news
HEADERS: (tidak perlu)
BODY: (kosong)

Query Parameters (opsional):
- page=1 (default)
- limit=10 (default)
- categoryId=1 (filter by category)

Expected Status: 200 OK
```

### 2️⃣ GET - Lihat 1 Berita by ID
```
METHOD: GET
URL: http://localhost:3000/api/news/1

Expected Status: 200 OK
```

### 3️⃣ GET - Lihat Berita Featured
```
METHOD: GET
URL: http://localhost:3000/api/news/featured/list

Query Parameters (opsional):
- limit=5 (default)

Expected Status: 200 OK
```

### 4️⃣ GET - Lihat Berita Recent/Terbaru
```
METHOD: GET
URL: http://localhost:3000/api/news/recent/list

Query Parameters (opsional):
- limit=10 (default)

Expected Status: 200 OK
```

### 5️⃣ GET - Cari Berita by Keyword
```
METHOD: GET
URL: http://localhost:3000/api/news/search/query

Query Parameters (WAJIB):
- keyword=berita (kata pencarian)
- limit=20 (default)

Expected Status: 200 OK
```

### 6️⃣ GET - Lihat Berita by Slug
```
METHOD: GET
URL: http://localhost:3000/api/news/slug/judul-berita-baru

Expected Status: 200 OK
```

### 7️⃣ POST - Buat Berita Baru
```
METHOD: POST
URL: http://localhost:3000/api/news

HEADERS:
Content-Type: application/json

BODY (raw JSON):
{
  "title": "Berita Lama",
  "content": "Ini adalah konten berita yang panjang minimal 10 karakter",
  "description": "Deskripsi singkat",
  "imageUrl": "berita.jpg",
  "author": "Admin",
  "categoryId": 1 (opsional),
  "isFeatured": false (opsional)
}

Expected Status: 201 Created
Response akan include: id (1, 2, 3...)
```

### 8️⃣ PUT - Edit Berita
```
METHOD: PUT
URL: http://localhost:3000/api/news/1

HEADERS:
Content-Type: application/json

BODY (raw JSON):
{
  "title": "Judul Sudah Diubah",
  "description": "Deskripsi baru",
  "isFeatured": true
}

Expected Status: 200 OK
```

### 9️⃣ PUT - Toggle Featured Status
```
METHOD: PUT
URL: http://localhost:3000/api/news/1/toggle-featured

BODY: (kosong)

Expected Status: 200 OK
```

### 🔟 PUT - Toggle Active Status
```
METHOD: PUT
URL: http://localhost:3000/api/news/1/toggle-active

BODY: (kosong)

Expected Status: 200 OK
```

### 1️⃣1️⃣ PUT - Increment Views
```
METHOD: PUT
URL: http://localhost:3000/api/news/1/views

BODY: (kosong)

Expected Status: 200 OK
```

### 1️⃣2️⃣ DELETE - Hapus Berita
```
METHOD: DELETE
URL: http://localhost:3000/api/news/1

BODY: (kosong)

Expected Status: 204 No Content
```

---

## 📢 PENGUMUMAN (ANNOUNCEMENTS)

### 1️⃣ GET - Lihat Semua Pengumuman
```
METHOD: GET
URL: http://localhost:3000/api/announcements

Query Parameters (opsional):
- page=1 (default)
- limit=20 (default)
- type=penting (filter by type: biasa, penting, sangat_penting, mendesak)

Expected Status: 200 OK
```

### 2️⃣ GET - Lihat 1 Pengumuman by ID
```
METHOD: GET
URL: http://localhost:3000/api/announcements/1

Expected Status: 200 OK
```

### 3️⃣ GET - Filter Pengumuman by Type
```
METHOD: GET
URL: http://localhost:3000/api/announcements/type/penting

Query Parameters (opsional):
- limit=10 (default)

TYPE options: biasa, penting, sangat_penting, mendesak

Expected Status: 200 OK
```

### 4️⃣ GET - Lihat Pengumuman yang Aktif
```
METHOD: GET
URL: http://localhost:3000/api/announcements/active/list

Expected Status: 200 OK
```

### 5️⃣ GET - Lihat Pengumuman Belum Expired
```
METHOD: GET
URL: http://localhost:3000/api/announcements/not-expired/list

Expected Status: 200 OK
```

### 6️⃣ POST - Buat Pengumuman Baru
```
METHOD: POST
URL: http://localhost:3000/api/announcements

HEADERS:
Content-Type: application/json

BODY (raw JSON):
{
  "title": "Pengumuman Penting",
  "content": "Isi pengumuman yang panjang minimal 10 karakter",
  "description": "Deskripsi singkat",
  "imageUrl": "pengumuman.jpg",
  "type": "penting",
  "author": "Admin",
  "expiredAt": "2026-04-30T23:59:59Z" (opsional, format ISO8601)
}

TYPE options: biasa, penting, sangat_penting, mendesak

Expected Status: 201 Created
Response akan include: id (1, 2, 3...)
```

### 7️⃣ PUT - Edit Pengumuman
```
METHOD: PUT
URL: http://localhost:3000/api/announcements/1

HEADERS:
Content-Type: application/json

BODY (raw JSON):
{
  "title": "Pengumuman Sudah Diubah",
  "type": "sangat_penting",
  "expiredAt": "2026-05-31T23:59:59Z"
}

Expected Status: 200 OK
```

### 8️⃣ PUT - Toggle Active Status Pengumuman
```
METHOD: PUT
URL: http://localhost:3000/api/announcements/1/toggle-active

BODY: (kosong)

Expected Status: 200 OK
```

### 9️⃣ DELETE - Hapus Pengumuman
```
METHOD: DELETE
URL: http://localhost:3000/api/announcements/1

BODY: (kosong)

Expected Status: 204 No Content
```

---

## 📅 AGENDA (SCHEDULES)

### 1️⃣ GET - Lihat Semua Agenda
```
METHOD: GET
URL: http://localhost:3000/api/schedules

Query Parameters (opsional):
- page=1 (default)
- limit=10 (default)
- category=akademik (filter by category)

CATEGORY options: akademik, ekstrakurikuler, outing, libur, ujian, kegiatan, lainnya

Expected Status: 200 OK
```

### 2️⃣ GET - Lihat 1 Agenda by ID
```
METHOD: GET
URL: http://localhost:3000/api/schedules/1

Expected Status: 200 OK
```

### 3️⃣ GET - Lihat Agenda Upcoming (Mendatang)
```
METHOD: GET
URL: http://localhost:3000/api/schedules/upcoming

Query Parameters (opsional):
- days=30 (default, dalam berapa hari ke depan)

Expected Status: 200 OK
```

### 4️⃣ GET - Lihat Agenda Hari Ini
```
METHOD: GET
URL: http://localhost:3000/api/schedules/today

Expected Status: 200 OK
```

### 5️⃣ GET - Lihat Agenda by Bulan
```
METHOD: GET
URL: http://localhost:3000/api/schedules/by-month

Query Parameters (WAJIB):
- month=4 (bulan, 1-12)
- year=2026 (tahun)

Expected Status: 200 OK
```

### 6️⃣ GET - Lihat Agenda by Tanggal Tertentu
```
METHOD: GET
URL: http://localhost:3000/api/schedules/by-date

Query Parameters (WAJIB):
- date=2026-04-06 (format YYYY-MM-DD)

Expected Status: 200 OK
```

### 7️⃣ GET - Lihat Agenda by Kategori
```
METHOD: GET
URL: http://localhost:3000/api/schedules/by-category/akademik

CATEGORY options: akademik, ekstrakurikuler, outing, libur, ujian, kegiatan, lainnya

Expected Status: 200 OK
```

### 8️⃣ GET - Lihat Statistik Agenda
```
METHOD: GET
URL: http://localhost:3000/api/schedules/statistics

Expected Status: 200 OK
Response: { total: number, byCategory: {...} }
```

### 9️⃣ POST - Buat Agenda Baru
```
METHOD: POST
URL: http://localhost:3000/api/schedules

HEADERS:
Content-Type: application/json

BODY (raw JSON):
{
  "title": "Upacara Bendera",
  "description": "Upacara bendera rutin setiap Senin pagi",
  "date": "2026-04-06",
  "startTime": "07:00",
  "endTime": "08:00",
  "location": "Lapangan Sekolah",
  "participants": "Seluruh siswa dan guru",
  "category": "akademik",
  "imageUrl": "upacara.jpg"
}

CATEGORY options: akademik, ekstrakurikuler, outing, libur, ujian, kegiatan, lainnya

Expected Status: 201 Created
Response akan include: id (1, 2, 3...)
```

### 🔟 PATCH - Edit Agenda
```
METHOD: PATCH
URL: http://localhost:3000/api/schedules/1

HEADERS:
Content-Type: application/json

BODY (raw JSON):
{
  "title": "Agenda Sudah Diubah",
  "date": "2026-04-07",
  "category": "ekstrakurikuler"
}

Expected Status: 200 OK
```

### 1️⃣1️⃣ PATCH - Toggle Active Status Agenda
```
METHOD: PATCH
URL: http://localhost:3000/api/schedules/1/toggle-active

BODY: (kosong)

Expected Status: 200 OK
```

### 1️⃣2️⃣ DELETE - Hapus Agenda
```
METHOD: DELETE
URL: http://localhost:3000/api/schedules/1

BODY: (kosong)

Expected Status: 204 No Content
```

---

## 📋 KATEGORI (CATEGORIES)

### 1️⃣ GET - Lihat Semua Kategori
```
METHOD: GET
URL: http://localhost:3000/api/categories

Expected Status: 200 OK
```

### 2️⃣ GET - Lihat 1 Kategori by ID
```
METHOD: GET
URL: http://localhost:3000/api/categories/1

Expected Status: 200 OK
```

### 3️⃣ POST - Buat Kategori Baru
```
METHOD: POST
URL: http://localhost:3000/api/categories

HEADERS:
Content-Type: application/json

BODY (raw JSON):
{
  "name": "Prestasi",
  "description": "Kategori untuk berita tentang prestasi sekolah",
  "color": "#10B981",
  "order": 1
}

Expected Status: 201 Created
Response akan include: id (1, 2, 3...)
```

### 4️⃣ PUT - Edit Kategori
```
METHOD: PUT
URL: http://localhost:3000/api/categories/1

HEADERS:
Content-Type: application/json

BODY (raw JSON):
{
  "name": "Prestasi Sekolah",
  "color": "#059669",
  "order": 2
}

Expected Status: 200 OK
```

### 5️⃣ PUT - Toggle Active Status Kategori
```
METHOD: PUT
URL: http://localhost:3000/api/categories/1/toggle-active

BODY: (kosong)

Expected Status: 200 OK
```

### 6️⃣ DELETE - Hapus Kategori
```
METHOD: DELETE
URL: http://localhost:3000/api/categories/1

BODY: (kosong)

Expected Status: 204 No Content
```

---

## 📞 KONTAK (CONTACTS)

### 1️⃣ GET - Lihat Semua Kontak
```
METHOD: GET
URL: http://localhost:3000/api/contacts

Expected Status: 200 OK
```

### 2️⃣ GET - Lihat Kontak by Type
```
METHOD: GET
URL: http://localhost:3000/api/contacts/type/email

TYPE options: phone, email, address, website, social_media

Expected Status: 200 OK
```

### 3️⃣ GET - Lihat 1 Kontak by ID
```
METHOD: GET
URL: http://localhost:3000/api/contacts/1

Expected Status: 200 OK
```

### 4️⃣ POST - Tambah Kontak Baru
```
METHOD: POST
URL: http://localhost:3000/api/contacts

HEADERS:
Content-Type: application/json

BODY (raw JSON):
{
  "label": "Email Sekolah",
  "type": "email",
  "value": "sekolah@example.com",
  "icon": "📧",
  "order": 1
}

TYPE options: phone, email, address, website, social_media

Expected Status: 201 Created
Response akan include: id (1, 2, 3...)
```

### 5️⃣ PUT - Edit Kontak
```
METHOD: PUT
URL: http://localhost:3000/api/contacts/1

HEADERS:
Content-Type: application/json

BODY (raw JSON):
{
  "label": "Email Utama",
  "value": "main@sekolah.com",
  "icon": "📧"
}

Expected Status: 200 OK
```

### 6️⃣ PUT - Toggle Active Status Kontak
```
METHOD: PUT
URL: http://localhost:3000/api/contacts/1/toggle-active

BODY: (kosong)

Expected Status: 200 OK
```

### 7️⃣ DELETE - Hapus Kontak
```
METHOD: DELETE
URL: http://localhost:3000/api/contacts/1

BODY: (kosong)

Expected Status: 204 No Content
```

---

## 🔍 SEARCH

### 1️⃣ GET - Cari Semua (News, Announcements, Schedules)
```
METHOD: GET
URL: http://localhost:3000/api/search

Query Parameters (WAJIB):
- query=kata (kata pencarian)
- limit=50 (default)

Expected Status: 200 OK
Response: { news: [...], announcements: [...], schedules: [...] }
```

---

## ✅ CHECKLIST TESTING LENGKAP

Untuk setiap endpoint, test dalam urutan (RECOMMENDED):

### Testing Kategori:
```
☐ 1. GET Semua Kategori
☐ 2. POST Buat Kategori Baru (SIMPAN ID=1)
☐ 3. GET Semua Kategori (lihat data baru)
☐ 4. GET By ID 1 (gunakan ID yang disimpan)
☐ 5. PUT Edit Kategori 1
☐ 6. GET By ID 1 lagi (lihat perubahan)
☐ 7. PUT Toggle Active Kategori 1
☐ 8. ⚠️ JANGAN HAPUS DULU! (tunggu sampai berita terhapus)
☐ 9. DELETE Kategori 1 (SETELAH tidak ada berita yang pakai kategori)
```

### Testing Berita:
```
☐ 1. GET Semua Berita
☐ 2. POST Buat Berita Baru dengan categoryId=1 (SIMPAN ID=1)
☐ 3. GET Semua Berita (lihat data baru)
☐ 4. GET By ID 1
☐ 5. GET Featured Berita
☐ 6. GET Recent Berita
☐ 7. GET by Slug
☐ 8. PUT Edit Berita 1
☐ 9. PUT Toggle Featured Berita 1
☐ 10. PUT Toggle Active Berita 1
☐ 11. PUT Increment Views Berita 1
☐ 12. GET Search dengan keyword
☐ 13. DELETE Berita 1
☐ 14. GET Semua Berita (pastikan terhapus)
```

### Testing Pengumuman:
```
☐ 1. GET Semua Pengumuman
☐ 2. POST Buat Pengumuman Baru (SIMPAN ID=1)
☐ 3. GET Semua Pengumuman (lihat data baru)
☐ 4. GET By ID 1
☐ 5. GET by Type (filter: penting, sangat_penting, dll)
☐ 6. GET Active Pengumuman
☐ 7. GET Not Expired Pengumuman
☐ 8. PUT Edit Pengumuman 1
☐ 9. PUT Toggle Active Pengumuman 1
☐ 10. DELETE Pengumuman 1
☐ 11. GET Semua Pengumuman (pastikan terhapus)
```

### Testing Agenda:
```
☐ 1. GET Semua Agenda
☐ 2. POST Buat Agenda Baru (SIMPAN ID=1)
☐ 3. GET Semua Agenda (lihat data baru)
☐ 4. GET By ID 1
☐ 5. GET Upcoming Agenda
☐ 6. GET Today Agenda
☐ 7. GET by Month
☐ 8. GET by Date
☐ 9. GET by Category
☐ 10. GET Statistics
☐ 11. PATCH Edit Agenda 1
☐ 12. PATCH Toggle Active Agenda 1
☐ 13. DELETE Agenda 1
☐ 14. GET Semua Agenda (pastikan terhapus)
```

### Testing Kontak:
```
☐ 1. GET Semua Kontak
☐ 2. POST Tambah Kontak Baru (SIMPAN ID=1)
☐ 3. GET Semua Kontak (lihat data baru)
☐ 4. GET by Type
☐ 5. GET By ID 1
☐ 6. PUT Edit Kontak 1
☐ 7. PUT Toggle Active Kontak 1
☐ 8. DELETE Kontak 1
☐ 9. GET Semua Kontak (pastikan terhapus)
```

### Testing Search:
```
☐ 1. GET Search dengan keyword (search across all)
```

---

## 💡 TIPS PENTING

1. **ID Format** = Semua ID sekarang angka simple (1, 2, 3) bukan UUID panjang ✨
2. **Response Status**:
   - 200 OK = GET/PUT/PATCH/DELETE sukses
   - 201 Created = POST sukses (create), jangan lupa SIMPAN ID dari response!
   - 204 No Content = DELETE sukses (tanpa response body)
   - 404 Not Found = Data tidak ditemukan
   - 400 Bad Request = Data tidak valid (cek validasi)
3. **Headers WAJIB**:
   - Content-Type: application/json (untuk POST/PUT/PATCH)
4. **Query Parameters** vs **Path Parameters**:
   - Path: `/api/news/1` (ID di URL)
   - Query: `/api/news?page=1&limit=10` (filter di query string)
5. **Format Tanggal**:
   - Date: YYYY-MM-DD (2026-04-06)
   - DateTime: ISO8601 (2026-04-30T23:59:59Z)
   - Time: HH:mm (07:00)
6. **Validation Rules**:
   - Title minimum 5 karakter, maksimal 255
   - Content minimum 10 karakter
   - Color format: #RRGGBB (hex color)
   - Type announcements: biasa, penting, sangat_penting, mendesak
   - Category schedules: akademik, ekstrakurikuler, outing, libur, ujian, kegiatan, lainnya
   - Contact type: phone, email, address, website, social_media

---

## 🚀 TESTING ORDER (RECOMMENDED)

**URUTAN TESTING YANG BENAR** (karena ada dependency):

1. ✅ **KATEGORI** (independen, test dulu) → GET, POST (ID=1), GET, PUT, DELETE
2. ✅ **BERITA** (butuh kategori) → GET, POST dengan categoryId=1, GET, PUT, DELETE
3. ✅ **PENGUMUMAN** (independen) → GET, POST (ID=1), GET, PUT, DELETE
4. ✅ **AGENDA** (independen) → GET, POST (ID=1), GET, PUT, DELETE
5. ✅ **KONTAK** (independen) → GET, POST (ID=1), GET, PUT, DELETE
6. ✅ **SEARCH** (optional) → GET search semua

**Kenapa kategori duluan?** Karena berita bisa link ke kategori!

---

## 📱 LIHAT DI FRONTEND

Setelah semua testing selesai di backend, buka frontend:
```
http://localhost:5173/berita
http://localhost:5173/pengumuman
http://localhost:5173/agenda
```

Semua data yang dibuat di Postman seharusnya tampil di halaman! ✅

---

## 🐛 TROUBLESHOOTING

| Error | Penyebab | Solusi |
|-------|---------|--------|
| **500 Foreign Key Constraint** | Kategori masih direferensi berita | Hapus berita dulu, baru kategori |
| 404 Not Found | ID tidak ada | Pastikan ID yang digunakan sudah dibuat dengan POST terlebih dahulu |
| 400 Bad Request | Data tidak valid | Cek format data, validation rules, content-type header |
| 500 Internal Server | Error di backend | Lihat console backend untuk error message |
| CORS Error | Origin tidak diizinkan | Pastikan frontend dan backend running di URL yang benar |
| Database Error | Connection gagal | Pastikan database (PostgreSQL) running dan konfigurasi benar |

### Detail: Foreign Key Constraint Error (500)

**Error Message:**
```json
{
  "statusCode": 500,
  "message": "update or delete on table \"categories\" violates foreign key constraint"
}
```

**Debugging:**
- Berita → memiliki `categoryId` (foreign key ke kategori)
- Saat hapus kategori, database check: "Ada berita yang pakai kategori ini?"
- Jika ada → Error! (Foreign Key Violation)

**Solusi:**
```
1. Cek: DELETE dari Berita dulu (semua berita yang pakai kategori itu)
2. Terus: DELETE kategori (sekarang sudah aman, tidak ada referensi)
```

---

## 📌 QUICK REFERENCE

| Operasi | HTTP Method | URL Format | Catatan |
|---------|------------|-----------|---------|
| Lihat Semua | GET | `/api/{resource}` | Bisa pakai pagination & filter |
| Lihat Detail | GET | `/api/{resource}/{id}` | Ambil 1 item by ID |
| Buat Baru | POST | `/api/{resource}` | Jangan kirim ID, biarkan auto-generate |
| Edit | PUT / PATCH | `/api/{resource}/{id}` | PUT = replace, PATCH = partial update |
| Hapus | DELETE | `/api/{resource}/{id}` | Hati-hati, data akan hilang! |
| Special Actions | PUT / PATCH | `/api/{resource}/{id}/action` | Contoh: toggle, increment, filter |

---

## 💾 CONTOH COPY-PASTE KE POSTMAN

### 🎯 KATEGORI - STEP BY STEP

**Step 1: POST - Buat Kategori Baru**
```
METHOD: POST
URL: http://localhost:3000/api/categories
Content-Type: application/json

{
  "name": "Prestasi",
  "description": "Kategori untuk berita tentang prestasi sekolah",
  "color": "#10B981",
  "order": 1
}
```
**Simpan response ID-nya! Misal: id = 1**

---

**Step 2: GET - Lihat Semua Kategori**
```
METHOD: GET
URL: http://localhost:3000/api/categories
```

---

**Step 3: GET - Lihat Kategori by ID**
```
METHOD: GET
URL: http://localhost:3000/api/categories/1
```

---

**Step 4: PUT - Edit Kategori**
```
METHOD: PUT
URL: http://localhost:3000/api/categories/1
Content-Type: application/json

{
  "name": "Prestasi Sekolah",
  "color": "#059669",
  "order": 2
}
```

---

**Step 5: PUT - Toggle Active Kategori**
```
METHOD: PUT
URL: http://localhost:3000/api/categories/1/toggle-active
```

---

**Step 6: DELETE - Hapus Kategori**
```
METHOD: DELETE
URL: http://localhost:3000/api/categories/1
```

---

### 📰 BERITA - STEP BY STEP

**Step 1: POST - Buat Kategori Dulu (Jika belum)**
```
METHOD: POST
URL: http://localhost:3000/api/categories
Content-Type: application/json

{
  "name": "Berita Terbaru",
  "description": "Kategori berita terbaru",
  "color": "#2563EB",
  "order": 1
}
```

---

**Step 2: POST - Buat Berita Baru**
```
METHOD: POST
URL: http://localhost:3000/api/news
Content-Type: application/json

{
  "title": "Siswa SMA Menang Kompetisi Robotik Nasional",
  "content": "Siswa dari SMA kami berhasil memenangkan kompetisi robotik nasional yang diadakan di Jakarta. Tim kami terdiri dari 5 orang siswa yang telah berlatih selama 3 bulan.",
  "description": "Prestasi gemilang siswa SMA di kompetisi robotik nasional",
  "imageUrl": "robotik-2026.jpg",
  "author": "Admin",
  "categoryId": 1,
  "isFeatured": true
}
```
**Simpan ID! Misal: id = 1**

---

**Step 3: GET - Lihat Semua Berita**
```
METHOD: GET
URL: http://localhost:3000/api/news
```

---

**Step 4: GET - Lihat Berita by ID**
```
METHOD: GET
URL: http://localhost:3000/api/news/1
```

---

**Step 5: GET - Lihat Berita Featured**
```
METHOD: GET
URL: http://localhost:3000/api/news/featured/list?limit=5
```

---

**Step 6: GET - Lihat Berita Recent**
```
METHOD: GET
URL: http://localhost:3000/api/news/recent/list?limit=10
```

---

**Step 7: GET - Cari Berita by Keyword**
```
METHOD: GET
URL: http://localhost:3000/api/news/search/query?keyword=robotik&limit=20
```

---

**Step 8: GET - Lihat Berita by Slug (auto-generated)**
```
METHOD: GET
URL: http://localhost:3000/api/news/slug/siswa-sma-menang-kompetisi-robotik-nasional
```

---

**Step 9: PUT - Edit Berita**
```
METHOD: PUT
URL: http://localhost:3000/api/news/1
Content-Type: application/json

{
  "title": "Siswa SMA Raih Juara 1 Kompetisi Robotik Nasional 2026",
  "description": "Update: Prestasi gemilang siswa SMA kami di kompetisi robotik nasional tingkat nasional",
  "isFeatured": true
}
```

---

**Step 10: PUT - Toggle Featured Status**
```
METHOD: PUT
URL: http://localhost:3000/api/news/1/toggle-featured
```

---

**Step 11: PUT - Toggle Active Status**
```
METHOD: PUT
URL: http://localhost:3000/api/news/1/toggle-active
```

---

**Step 12: PUT - Increment Views**
```
METHOD: PUT
URL: http://localhost:3000/api/news/1/views
```

---

**Step 13: DELETE - Hapus Berita**
```
METHOD: DELETE
URL: http://localhost:3000/api/news/1
```

---

### 📢 PENGUMUMAN - STEP BY STEP

**Step 1: POST - Buat Pengumuman Baru**
```
METHOD: POST
URL: http://localhost:3000/api/announcements
Content-Type: application/json

{
  "title": "Pengumuman: Libur Semester Genap 2026",
  "content": "Kepada seluruh siswa, guru, dan karyawan sekolah, kami sampaikan bahwa libur semester genap akan dimulai pada tanggal 15 Juni 2026 dan berakhir pada 30 Juni 2026.",
  "description": "Informasi libur semester genap tahun ajaran 2025-2026",
  "imageUrl": "libur-semester.jpg",
  "type": "penting",
  "author": "Kepala Sekolah",
  "expiredAt": "2026-06-30T23:59:59Z"
}
```
**Simpan ID! Misal: id = 1**

---

**Step 2: GET - Lihat Semua Pengumuman**
```
METHOD: GET
URL: http://localhost:3000/api/announcements
```

---

**Step 3: GET - Lihat Pengumuman by ID**
```
METHOD: GET
URL: http://localhost:3000/api/announcements/1
```

---

**Step 4: GET - Filter Pengumuman by Type (Penting)**
```
METHOD: GET
URL: http://localhost:3000/api/announcements/type/penting?limit=10
```

---

**Step 5: GET - Lihat Pengumuman Aktif**
```
METHOD: GET
URL: http://localhost:3000/api/announcements/active/list
```

---

**Step 6: GET - Lihat Pengumuman Belum Expired**
```
METHOD: GET
URL: http://localhost:3000/api/announcements/not-expired/list
```

---

**Step 7: PUT - Edit Pengumuman**
```
METHOD: PUT
URL: http://localhost:3000/api/announcements/1
Content-Type: application/json

{
  "title": "PERBARUAN: Libur Semester Genap Dimundurkan",
  "type": "sangat_penting",
  "expiredAt": "2026-07-15T23:59:59Z"
}
```

---

**Step 8: PUT - Toggle Active Status**
```
METHOD: PUT
URL: http://localhost:3000/api/announcements/1/toggle-active
```

---

**Step 9: DELETE - Hapus Pengumuman**
```
METHOD: DELETE
URL: http://localhost:3000/api/announcements/1
```

---

### 📅 AGENDA - STEP BY STEP

**Step 1: POST - Buat Agenda Baru**
```
METHOD: POST
URL: http://localhost:3000/api/schedules
Content-Type: application/json

{
  "title": "Upacara Bendera Hari Senin",
  "description": "Upacara bendera rutin setiap Senin pagi untuk melatih disiplin dan menghormati bendera negara.",
  "date": "2026-04-06",
  "startTime": "07:00",
  "endTime": "08:00",
  "location": "Lapangan Sekolah",
  "participants": "Seluruh siswa dan guru",
  "category": "akademik",
  "imageUrl": "upacara-bendera.jpg"
}
```
**Simpan ID! Misal: id = 1**

---

**Step 2: POST - Buat Agenda Lain (Ujian)**
```
METHOD: POST
URL: http://localhost:3000/api/schedules
Content-Type: application/json

{
  "title": "Ujian Akhir Semester (UAS) Genap",
  "description": "Ujian akhir semester untuk menguji pemahaman siswa terhadap materi selama semester genap.",
  "date": "2026-05-01",
  "startTime": "08:00",
  "endTime": "17:00",
  "location": "Ruang Kelas",
  "participants": "Semua siswa kelas X - XII",
  "category": "ujian",
  "imageUrl": "ujian-akhir.jpg"
}
```

---

**Step 3: GET - Lihat Semua Agenda**
```
METHOD: GET
URL: http://localhost:3000/api/schedules
```

---

**Step 4: GET - Lihat Agenda by ID**
```
METHOD: GET
URL: http://localhost:3000/api/schedules/1
```

---

**Step 5: GET - Lihat Agenda Upcoming (30 hari ke depan)**
```
METHOD: GET
URL: http://localhost:3000/api/schedules/upcoming?days=30
```

---

**Step 6: GET - Lihat Agenda Hari Ini**
```
METHOD: GET
URL: http://localhost:3000/api/schedules/today
```

---

**Step 7: GET - Lihat Agenda by Bulan (April 2026)**
```
METHOD: GET
URL: http://localhost:3000/api/schedules/by-month?month=4&year=2026
```

---

**Step 8: GET - Lihat Agenda by Tanggal Tertentu**
```
METHOD: GET
URL: http://localhost:3000/api/schedules/by-date?date=2026-04-06
```

---

**Step 9: GET - Lihat Agenda by Kategori (Akademik)**
```
METHOD: GET
URL: http://localhost:3000/api/schedules/by-category/akademik
```

---

**Step 10: GET - Lihat Statistik Agenda**
```
METHOD: GET
URL: http://localhost:3000/api/schedules/statistics
```

---

**Step 11: PATCH - Edit Agenda**
```
METHOD: PATCH
URL: http://localhost:3000/api/schedules/1
Content-Type: application/json

{
  "title": "Upacara Bendera - Senin Pagi",
  "date": "2026-04-13",
  "location": "Lapangan Utama Sekolah"
}
```

---

**Step 12: PATCH - Toggle Active Status**
```
METHOD: PATCH
URL: http://localhost:3000/api/schedules/1/toggle-active
```

---

**Step 13: DELETE - Hapus Agenda**
```
METHOD: DELETE
URL: http://localhost:3000/api/schedules/1
```

---

### 📞 KONTAK - STEP BY STEP

**Step 1: POST - Tambah Kontak Email**
```
METHOD: POST
URL: http://localhost:3000/api/contacts
Content-Type: application/json

{
  "label": "Email Sekolah",
  "type": "email",
  "value": "sekolah@example.com",
  "icon": "📧",
  "order": 1
}
```
**Simpan ID! Misal: id = 1**

---

**Step 2: POST - Tambah Kontak Telepon**
```
METHOD: POST
URL: http://localhost:3000/api/contacts
Content-Type: application/json

{
  "label": "Telepon Utama",
  "type": "phone",
  "value": "+62-123-456-7890",
  "icon": "📞",
  "order": 2
}
```

---

**Step 3: POST - Tambah Kontak Alamat**
```
METHOD: POST
URL: http://localhost:3000/api/contacts
Content-Type: application/json

{
  "label": "Alamat Sekolah",
  "type": "address",
  "value": "Jl. Pendidikan No. 123, Jakarta 12345",
  "icon": "📍",
  "order": 3
}
```

---

**Step 4: POST - Tambah Kontak Website**
```
METHOD: POST
URL: http://localhost:3000/api/contacts
Content-Type: application/json

{
  "label": "Website Resmi",
  "type": "website",
  "value": "https://www.sekolahkami.com",
  "icon": "🌐",
  "order": 4
}
```

---

**Step 5: POST - Tambah Kontak Social Media**
```
METHOD: POST
URL: http://localhost:3000/api/contacts
Content-Type: application/json

{
  "label": "Instagram",
  "type": "social_media",
  "value": "@sekolahkami",
  "icon": "📱",
  "order": 5
}
```

---

**Step 6: GET - Lihat Semua Kontak**
```
METHOD: GET
URL: http://localhost:3000/api/contacts
```

---

**Step 7: GET - Lihat Kontak by Type (Email)**
```
METHOD: GET
URL: http://localhost:3000/api/contacts/type/email
```

---

**Step 8: GET - Lihat Kontak by ID**
```
METHOD: GET
URL: http://localhost:3000/api/contacts/1
```

---

**Step 9: PUT - Edit Kontak**
```
METHOD: PUT
URL: http://localhost:3000/api/contacts/1
Content-Type: application/json

{
  "label": "Email Resmi",
  "value": "admin@sekolahkami.com"
}
```

---

**Step 10: PUT - Toggle Active Status**
```
METHOD: PUT
URL: http://localhost:3000/api/contacts/1/toggle-active
```

---

**Step 11: DELETE - Hapus Kontak**
```
METHOD: DELETE
URL: http://localhost:3000/api/contacts/1
```

---

### 🔍 SEARCH - CONTOH

**Search Berita, Pengumuman, Agenda**
```
METHOD: GET
URL: http://localhost:3000/api/search?query=robotik&limit=50
```

Response akan return:
```json
{
  "news": [...berita yang cocok],
  "announcements": [...pengumuman yang cocok],
  "schedules": [...agenda yang cocok]
}
```

---

## � ⚠️ PENTING! URUTAN TESTING YANG BENAR

**JANGAN RANDOM! Ada dependency antar resource!**

✅ **BENAR**: 
```
1. Buat Kategori (ID=1)
2. Buat Berita dengan categoryId=1 (ID=1)
3. Hapus Berita (ID=1) ← HARUS INI DULU!
4. Hapus Kategori (ID=1) ← Baru hapus kategori, setelah berita terhapus
```

❌ **SALAH** (akan error 500):
```
1. Buat Kategori (ID=1)
2. Buat Berita dengan categoryId=1 (ID=1)
3. Hapus Kategori (ID=1) ← ERROR! Masih ada berita yang pakai kategori!
```

---

## 🎬 QUICK START TESTING (URUTAN YANG BENAR)

1. ✅ POST Kategori (simpan ID = 1)
2. ✅ POST Berita dengan categoryId = 1 (simpan ID = 1)
3. ✅ GET Berita by ID 1
4. ✅ PUT Edit Berita 1
5. ✅ DELETE Berita 1 ← **⚠️ HAPUS BERITA DULU!**
6. ✅ GET Berita (pastikan deleted)
7. ✅ DELETE Kategori 1 ← **⚠️ Baru hapus kategori setelah berita terhapus!**
8. ✅ POST Pengumuman (simpan ID = 1)
9. ✅ GET Pengumuman by ID 1
10. ✅ DELETE Pengumuman 1

**DONE!** Backend working dengan baik! 🎉

---

## 📝 CATATAN PENTING TENTANG FOREIGN KEY

**Hubungan antar resource:**
- 📰 **Berita** ← Link ke 📋 **Kategori** (FK)
- Jadi: **HARUS HAPUS BERITA DULU sebelum hapus kategori!**

**Jika ketemu error 500 saat DELETE kategori:**
```json
{
  "message": "update or delete on table categories violates foreign key..."
}
```
**Solusi**: Hapus semua berita yang pakai kategori itu terlebih dahulu!

**DONE!** Backend working dengan baik! 🎉
