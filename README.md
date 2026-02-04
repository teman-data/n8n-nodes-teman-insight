# n8n-nodes-teman-insight

Community node n8n untuk **Teman Insight** (product AI kamu). Node ini memungkinkan workflow n8n memanggil API Teman Insight (chat/completion, dll.) lewat node drag-and-drop.

## Persyaratan

- Node.js 18+
- Akun / API key Teman Insight

## Instalasi di n8n

### 1. Install dari npm (setelah publish)

Di n8n: **Settings → Community nodes → Install** → ketik `n8n-nodes-teman-insight`.

### 2. Development / test lokal (tanpa publish npm)

**Opsi A – Pakai `npm run dev` (paling gampang)**  
Ini menjalankan n8n sekaligus dengan node ini ter-load. Tidak perlu publish ke npm.

```bash
npm install
npm run dev
```

Tunggu sampai di terminal muncul pesan bahwa n8n siap (biasanya “Editor is now accessible at…”). Lalu buka **http://localhost:5678**. Node **Teman Insight** akan muncul di panel nodes.

**Opsi B – Pakai `npm link` (kalau kamu sudah punya n8n terpasang)**  
Cocok kalau kamu mau pakai n8n yang sudah jalan (misalnya yang biasa dipakai).

```bash
# Di folder project node ini
npm run build
npm link

# Buat folder custom n8n (kalau belum ada), lalu link node
# Windows: %USERPROFILE%\.n8n\custom
mkdir "%USERPROFILE%\.n8n\custom" 2>nul
cd "%USERPROFILE%\.n8n\custom"
npm init -y
npm link n8n-nodes-teman-insight

# Jalankan n8n seperti biasa
npx n8n
```

Lalu buka http://localhost:5678. Node Teman Insight akan muncul karena ter-install dari link lokal.

### 3. Cara test (step-by-step)

1. **Jalankan n8n dengan node ini**
   ```bash
   npm run dev
   ```
2. **Buka n8n** di browser: http://localhost:5678 (login/signup jika diminta).
3. **Buat workflow baru** → tambah node (klik + atau drag).
4. **Cari node** "Teman Insight" di panel kiri, tambahkan ke canvas.
5. **Buat credential:** di node Teman Insight pilih "Create New Credential" → **Teman Insight API** → isi **API Key** → simpan.
6. **Isi Message** (mis. `Hallo, can you explain me what you can do?`). Session ID bisa dikosongkan.
7. **Klik "Test step"** atau **Execute workflow** → cek output; response API akan muncul di node.

Kalau build/run dari CLI sudah jalan, setiap ubah code bisa jalankan lagi `npm run build` lalu refresh n8n; atau biarkan `npm run dev` (mode watch) supaya rebuild otomatis.

### 4. Install manual di self-hosted

```bash
# Di folder custom nodes n8n (misal ~/.n8n/custom atau N8N_CUSTOM_EXTENSIONS)
npm init -y
npm install n8n-nodes-teman-insight
```

## Konfigurasi

1. Tambah node **Teman Insight** ke workflow.
2. Buat credential **Teman Insight API** (Settings → Credentials): isi **API Key**.
3. Isi **Message** (pertanyaan ke knowledge base). Opsional: **Session ID** untuk melanjutkan konteks percakapan (isi setelah dapat `session_id` dari response pertama).

**Endpoint:** `POST https://api.temaninsight.com/api/public/partners/knowledgebases/ask`  
**Header:** `Content-Type: application/json`, `api-key: <API Key>`  
**Body:** `{ "message": "...", "session_id": "..." }` (session_id opsional).

## Scripts

| Perintah       | Fungsi                          |
|----------------|----------------------------------|
| `npm run build`| Compile node (output ke `dist/`) |
| `npm run dev`  | Jalankan n8n + node (watch)      |
| `npm run lint` | Cek & perbaiki lint              |
| `npm run release` | Build + publish ke npm       |

## Keamanan & siap publish

**Sudah aman dari sisi node:**
- API key **tidak** disimpan di code; dipakai lewat **Credential** n8n (disimpan terenkripsi oleh n8n).
- Field API Key di credential pakai `typeOptions: { password: true }` (tersembunyi di UI).
- Yang ke-publish ke npm hanya folder **dist/** (isi `package.json` → `"files": ["dist"]`); source `.ts` tidak ikut.

**Sebelum publish, pastikan:**
1. **Jangan commit** API key / secret ke Git. Pakai `.gitignore` (sudah ada: `node_modules/`, `dist/`, `.env`).
2. **Rotate API key** yang sempat dipakai di chat atau tempat lain; pakai key baru hanya di n8n Credentials.
3. **Cek lagi** `package.json`: isi `author`, `repository.url`, `homepage` kalau mau (boleh tetap placeholder).

Setelah itu **aman untuk publish**.

## Publish ke npm & daftar verified

1. **Publish ke npm**

   ```bash
   npm login
   npm run release
   ```

2. **Daftar verified di n8n**  
   Baca [Submit community nodes](https://docs.n8n.io/integrations/creating-nodes/deploy/submit-community-nodes/) dan daftar lewat [n8n Creator Portal](https://creators.n8n.io/nodes).

## Aturan community node

- Nama package: `n8n-nodes-*` atau `@scope/n8n-nodes-*`
- Keyword: `n8n-community-node-package`
- Verified nodes: tanpa runtime dependencies, ikuti [technical](https://docs.n8n.io/integrations/creating-nodes/build/reference/verification-guidelines/) dan [UX guidelines](https://docs.n8n.io/integrations/creating-nodes/build/reference/ux-guidelines/)

## Lisensi

MIT
