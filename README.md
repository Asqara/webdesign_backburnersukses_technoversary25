# 🌿 Rimba Kembali

## 👥 Nama Anggota & Asal Instansi
| No | Nama Lengkap | Asal Instansi |
|----|-------------|---------------|
| 1  | Alfath Asqar Tsani | IPB University |
| 2  | Nailah Afia Tsabita | IPB University |

---

## 🌱 Judul Website
**Rimba Kembali – Platform Kampanye dan Edukasi Lingkungan**

---

## 📝 Deskripsi Website
**Rimba Kembali** adalah website berbasis **Next.js** yang bertujuan untuk menyajikan informasi, kampanye, dan aktivitas terkait pelestarian lingkungan dan reboisasi hutan.  
Website ini menghadirkan tampilan modern, interaktif, serta responsif dengan dukungan animasi menggunakan **Framer Motion** dan styling menggunakan **Tailwind CSS**.

Website ini dikembangkan sebagai bagian dari:
- Media kampanye lingkungan  
- Sarana edukasi publik  
- Portofolio pengembangan website modern  

---

## ⚙️ Teknologi yang Digunakan
- **Next.js 16**
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion**
- **ESLint**

---

## 🚀 Cara Instalasi & Menjalankan Project

### 1️⃣ Prasyarat
Pastikan perangkat Anda telah terinstall:
- **Node.js** versi **18.x** atau **20.x**
- **npm** (bawaan Node.js)
- **Git**

Cek versi Node:
```bash
node -v
npm -v
```
2️⃣ Clone Repository
bash
Copy code
```bash
git clone https://github.com/username/rimba-kembali.git
```
cd rimba-kembali
Ganti username dengan username GitHub Anda.

3️⃣ Install Dependencies
Copy code
```bash
npm install
```

4️⃣ Setup Supabase

Rimba Kembali menggunakan Supabase untuk autentikasi pengguna dan pendaftaran volunteer, namun daftar volunteers sekarang statis di kode, sehingga tabel volunteers di database tidak perlu. Fokus hanya pada profiles dan registrations.

1 Buat Project Supabase

Buka Supabase Dashboard

Klik New Project → isi nama project, password database, region server.

Tunggu proses deploy selesai.

2️ Jalankan SQL Init

Buat file /sql/init.sql seperti ini:
```bash

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ========================================
-- TABEL: profiles
-- ========================================
CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  username TEXT NOT NULL,
  email TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ========================================
-- TABEL: registrations
-- ========================================
CREATE TABLE IF NOT EXISTS registrations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  volunteer_slug TEXT NOT NULL,
  registered_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, volunteer_slug)
);

-- ========================================
-- Enable RLS
-- ========================================
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;

-- ========================================
-- POLICIES: profiles
-- ========================================
CREATE POLICY "Users can view own profile"
ON profiles FOR SELECT
USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
ON profiles FOR UPDATE
USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
ON profiles FOR INSERT
WITH CHECK (auth.uid() = id);

-- ========================================
-- POLICIES: registrations
-- ========================================
CREATE POLICY "Users can view own registrations"
ON registrations FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own registrations"
ON registrations FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- ========================================
-- INDEXES untuk performa
-- ========================================
CREATE INDEX idx_registrations_user_id ON registrations(user_id);
CREATE INDEX idx_registrations_volunteer_slug ON registrations(volunteer_slug);
```

3 Environment Variables

Buat .env.local di root project:
```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
```

4️ Google OAuth (Opsional)

Buka Authentication > Providers → Enable Google.

Isi Client ID & Client Secret dari Google Cloud Console

Tambahkan Authorized redirect URI:
https://your-project.supabase.co/auth/v1/callback
http://localhost:3000


5️⃣ Menjalankan Project (Development Mode)
bash
Copy code
```bash
npm run dev
```
Akses di browser:
Copy code
```bash
http://localhost:3000
```

📁 Struktur Script penting
json
Copy code
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "eslint"
}

🔗 Link Demo
🌐 Website: https://rimba-kembali.vercel.app

📦 Repository GitHub: https://github.com/username/rimba-kembali

© 2025 — Rimba Kembali.
Dikembangkan untuk edukasi dan kampanye pelestarian lingkungan 🌏🌿
