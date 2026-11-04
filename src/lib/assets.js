// Mengecek apakah sebuah file ada di folder public/.
// Dipakai supaya foto, screenshot, sertifikat, dan dokumen baru muncul otomatis setelah kamu menaruh filenya.
import fs from 'node:fs';
import path from 'node:path';

const inPublic = (p) => path.join(process.cwd(), 'public', p);

export const exists = (p) => {
  try {
    return fs.existsSync(inPublic(p));
  } catch {
    return false;
  }
};

// Cari file dengan nama dasar tertentu dan salah satu ekstensi. Mengembalikan alamat web (/folder/file.ext) atau ''.
export const findFile = (base, exts = ['jpg', 'jpeg', 'png', 'webp']) => {
  for (const e of exts) {
    if (exists(`${base}.${e}`)) return `/${base}.${e}`;
  }
  return '';
};

// Jenis file berdasarkan ekstensi: gambar, video, atau dokumen (pdf).
export const typeOf = (src) => {
  const e = src.split('.').pop().toLowerCase();
  if (['mp4', 'webm', 'mov'].includes(e)) return 'video';
  if (e === 'pdf') return 'pdf';
  return 'image';
};

// Kumpulkan isi galeri proyek: projects/<id>-1, projects/<id>-2, dst.
// Boleh gambar (png, jpg, webp, gif), video (mp4, webm), atau PDF. Hasilnya daftar { src, type }.
const MEDIA_EXTS = ['png', 'jpg', 'jpeg', 'webp', 'gif', 'mp4', 'webm', 'pdf'];
const isThumb = (f) => /-thumb\.[a-z0-9]+$/i.test(f);
// Slide PDF boleh punya gambar sampul: nama-file-thumb.jpg (jpg/png/webp) di folder yang sama.
const pdfThumb = (src) => findFile(src.replace(/^\//, '').replace(/\.pdf$/i, '-thumb'), ['jpg', 'jpeg', 'png', 'webp']);
export const gallery = (id) => {
  const out = [];
  // 1) Semua file di folder public/projects/<id>/ (urut angka/abjad, nama bebas)
  try {
    const dir = inPublic(`projects/${id}`);
    if (fs.existsSync(dir) && fs.statSync(dir).isDirectory()) {
      fs.readdirSync(dir)
        .filter((f) => MEDIA_EXTS.includes(f.split('.').pop().toLowerCase()) && !isThumb(f))
        .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
        .forEach((f) => out.push({ src: `/projects/${id}/${f}`, type: typeOf(f) }));
    }
  } catch {}
  // 2) File bernomor di public/projects/: <id>-1.png, <id>-2.mp4, dst.
  for (let i = 1; i <= 12; i++) {
    const f = findFile(`projects/${id}-${i}`, MEDIA_EXTS);
    if (f) out.push({ src: f, type: typeOf(f) });
  }
  return out.map((it) => (it.type === 'pdf' ? { ...it, thumb: pdfThumb(it.src) } : it));
};
