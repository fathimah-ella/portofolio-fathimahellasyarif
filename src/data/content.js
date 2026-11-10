// ============================================================
//  SEMUA TEKS PORTOFOLIO ADA DI FILE INI.
//  Setiap teks punya dua versi: id (Indonesia) dan en (Inggris).
//  Mau ubah kalimat? Cukup ganti teks di antara tanda ` ` di bawah ini.
// ============================================================

export const profile = {
  name: 'Fathimah Ella Syarif',
  short: 'Fathimah Ella',
  initials: 'FE',
  // Email khusus lamaran kerja
  email: 'fathimahellasyarif@gmail.com',
  linkedin: 'https://www.linkedin.com/in/fathimahellasyarif',
  github: 'https://github.com/fathimah-ella',
  // WhatsApp: format link wa.me memakai kode negara 62 tanpa angka 0 di depan.
  whatsapp: 'https://wa.me/6281215326350',
  phone: '0812 1532 6350',
};

export const meta = {
  title: {
    id: `Fathimah Ella Syarif | Portofolio Data Science`,
    en: `Fathimah Ella Syarif | Data Science Portfolio`,
  },
  description: {
    id: `Portofolio Fathimah Ella Syarif, lulusan Sistem Informasi Telkom University yang membangun model machine learning, dashboard, dan rekomendasi berbasis data.`,
    en: `Portfolio of Fathimah Ella Syarif, an Information Systems graduate of Telkom University who builds machine learning models, dashboards, and data-driven recommendations.`,
  },
};

export const ui = {
  nav: {
    about: { id: `Tentang`, en: `About` },
    skills: { id: `Keahlian`, en: `Skills` },
    projects: { id: `Proyek`, en: `Projects` },
    experience: { id: `Pengalaman`, en: `Experience` },
    achievements: { id: `Pencapaian`, en: `Achievements` },
    contact: { id: `Kontak`, en: `Contact` },
  },
  viewDoc: { id: `Lihat`, en: `View` },
  onRequest: { id: `Tersedia atas permintaan`, en: `Available on request` },
  all: { id: `Semua`, en: `All` },
  copy: { id: `Salin`, en: `Copy` },
  copied: { id: `Tersalin`, en: `Copied` },
  preview: { id: `Klik untuk melihat`, en: `Click to preview` },
  close: { id: `Tutup`, en: `Close` },
  openNew: { id: `Buka di tab baru`, en: `Open in new tab` },
  message: { id: `Kirim pesan`, en: `Send a message` },
  backToTop: { id: `Kembali ke atas`, en: `Back to top` },
  built: { id: `Dibuat dengan Astro`, en: `Built with Astro` },
  prev: { id: `Sebelumnya`, en: `Previous` },
  next: { id: `Berikutnya`, en: `Next` },
};

export const hero = {
  open: { id: `Terbuka untuk magang dan pekerjaan di bidang Data Science & Data Analyst`, en: `Open to internships and jobs in Data Science & Data Analytics` },
  hi: { id: `Halo, saya`, en: `Hi, I'm` },
  roles: [
    { id: `Data Science`, en: `Data Science` },
    { id: `Machine Learning & Deep Learning`, en: `Machine Learning & Deep Learning` },
    { id: `Dashboard & Insight`, en: `Dashboard & Insight` },
  ],
  tagline: {
    id: `Lulusan S1 Sistem Informasi Telkom University. Saya membangun model prediksi dan dashboard, lalu mengubah hasilnya menjadi insight dan rekomendasi yang dapat ditindaklanjuti.`,
    en: `Information Systems graduate of Telkom University. I build prediction models and dashboards, then turn the results into insights and recommendations that can be acted on.`,
  },
  ctaProjects: { id: `Lihat proyek`, en: `See my projects` },
  ctaContact: { id: `Hubungi saya`, en: `Get in touch` },
  ctaCv: { id: `Unduh CV`, en: `Download CV` },
  stickers: [
    { icon: `📄`, text: { id: `IEEE ICoCSETI 2026 · Accepted`, en: `IEEE ICoCSETI 2026 · Accepted` } },
    { icon: `📊`, text: { id: `Streamlit & Power BI`, en: `Streamlit & Power BI` } },
    { icon: `🎓`, text: { id: `IPK 3,84`, en: `GPA 3.84` } },
  ],
};

export const stats = [
  { value: { id: `3,84`, en: `3.84` }, label: { id: `IPK Sarjana (skala 4,00)`, en: `Undergraduate GPA (4.00 scale)` } },
  { value: { id: `1`, en: `1` }, label: { id: `Paper IEEE (accepted)`, en: `IEEE paper (accepted)` } },
  { value: { id: `1,77 jt+`, en: `1.77M+` }, label: { id: `baris data diolah di proyek Big Data`, en: `rows handled in a Big Data project` } },
  { value: { id: `7`, en: `7` }, label: { id: `proyek`, en: `projects` } },
];

export const about = {
  eyebrow: { id: `Tentang`, en: `About` },
  title: { id: `Siapa saya`, en: `Who am I` },
  paragraphs: [
    {
      id: `Saya lulusan S1 Sistem Informasi Telkom University Purwokerto dengan fokus pada Data Science dan Machine Learning. Saya suka membangun model prediksi, menyajikannya lewat dashboard Streamlit dan Power BI, lalu menarik insight dan rekomendasi dari datanya.`,
      en: `I'm an Information Systems graduate of Telkom University Purwokerto, focused on Data Science and Machine Learning. I enjoy building prediction models, presenting them through Streamlit and Power BI dashboards, and drawing insights and recommendations from the data.`,
    },
    {
      id: `Penelitian saya tentang prediksi harga cabai rawit di 14 pasar Banyumas dengan Spatio-Temporal Graph Convolutional Network diterima di konferensi internasional IEEE ICoCSETI 2026. Saat magang di Lazismu Banyumas, rekomendasi dari analisis donasi saya diterapkan menjadi program promosi lapangan "Jumat Berkah".`,
      en: `My research on chili price prediction across 14 Banyumas markets using a Spatio-Temporal Graph Convolutional Network was accepted at the international IEEE ICoCSETI 2026 conference. During my internship at Lazismu Banyumas, a recommendation from my donation analysis became the "Jumat Berkah" outreach program.`,
    },
  ],
};

export const education = {
  school: `Telkom University Purwokerto`,
  degree: { id: `Sarjana Sistem Informasi`, en: `Bachelor of Information Systems` },
  years: `2022 - 2026`,
  gpa: { id: `IPK 3,84 dari 4,00`, en: `GPA 3.84 out of 4.00` },
  coursesTitle: { id: `Mata kuliah relevan`, en: `Relevant courses` },
  courses: [
    { id: `Penambangan Data`, en: `Data Mining` },
    { id: `Kecerdasan Artifisial`, en: `Artificial Intelligence` },
    { id: `Pemrosesan Bahasa Alami`, en: `Natural Language Processing` },
    { id: `Pengelolaan Big Data`, en: `Big Data Management` },
    { id: `Data Warehouse & BI`, en: `Data Warehouse & BI` },
    { id: `Visualisasi Data`, en: `Data Visualization` },
    { id: `Probabilitas & Statistika`, en: `Probability & Statistics` },
  ],
};

// File dokumen: taruh di folder public/docs/ dengan nama persis seperti di "file" (format .pdf, .jpg, atau .png)
export const documents = [
  {
    file: `surat-keterangan-lulus`,
    icon: `📜`,
    title: { id: `Surat Keterangan Lulus`, en: `Certificate of Graduation` },
  },
  {
    file: `transkrip-nilai`,
    icon: `📑`,
    title: { id: `Transkrip Nilai`, en: `Academic Transcript` },
  },
];

export const skillsSection = {
  eyebrow: { id: `Keahlian`, en: `Skills` },
  title: { id: `Alat yang saya gunakan`, en: `What I work with` },
};


// Soft skill yang terlihat dari bagian Pengalaman. Dipakai di bagian Keahlian dan di kotak bawah Pengalaman.
export const softSkillsSection = {
  title: { id: `Soft skill dari pengalaman saya`, en: `Soft skills from my experience` },
  lead: {
    id: `Bukan sekadar klaim: setiap soft skill di bawah ini berasal dari hal yang benar-benar saya kerjakan.`,
    en: `Not just claims: each soft skill below comes from something I actually did.`,
  },
};

export const softSkills = [
  {
    title: { id: `Kepemimpinan & koordinasi tim`, en: `Team leadership & coordination` },
    proof: { id: `Memandu tim 6 orang lewat daily scrum, sprint review, dan retrospective sebagai Scrum Master.`, en: `Guided a team of 6 through daily scrums, sprint reviews, and retrospectives as Scrum Master.` },
    from: `MaHoKo`,
  },
  {
    title: { id: `Komunikasi & presentasi`, en: `Communication & presentation` },
    proof: { id: `Menyampaikan rekomendasi analisis donasi dalam diskusi tim hingga diterapkan di lapangan.`, en: `Presented donation-analysis recommendations in team discussions until they were carried out in the field.` },
    from: `Lazismu`,
  },
  {
    title: { id: `Ketelitian & akurasi`, en: `Attention to detail` },
    proof: { id: `Memverifikasi 502 data pemilih dengan akurasi 100% dan menginput hasil suara secara akurat di bawah pengawasan publik.`, en: `Verified 502 voter records with 100% accuracy and entered vote counts accurately under public scrutiny.` },
    from: `KPU`,
  },
  {
    title: { id: `Manajemen waktu & tanggung jawab`, en: `Time management & ownership` },
    proof: { id: `Memantau 34 tugas pada 9 fitur sampai selesai, dan menyelesaikan pendataan sesuai tenggat.`, en: `Tracked 34 tasks across 9 features to completion, and finished data collection on deadline.` },
    from: `MaHoKo, KPU`,
  },
  {
    title: { id: `Koordinasi & kerja sama tim`, en: `Coordination & teamwork` },
    proof: { id: `Berkoordinasi lintas divisi panitia dan menindaklanjuti masukan stakeholder bersama tim.`, en: `Coordinated across committee divisions and followed up on stakeholder feedback with the team.` },
    from: `PKKMB, MaHoKo`,
  },
  {
    title: { id: `Membimbing & mendampingi`, en: `Mentoring & support` },
    proof: { id: `Mendampingi kelompok mahasiswa baru selama rangkaian program orientasi.`, en: `Supported a group of new students throughout the orientation program.` },
    from: `PKKMB`,
  },
  {
    title: { id: `Berpikir analitis`, en: `Analytical thinking` },
    proof: { id: `Menemukan pola donasi (dominasi QRIS dan pola Pareto) lalu mengubahnya menjadi strategi retensi.`, en: `Found donation patterns (QRIS dominance and a Pareto pattern) and turned them into a retention strategy.` },
    from: `Lazismu`,
  },
  {
    title: { id: `Cepat belajar`, en: `Fast learner` },
    proof: { id: `Mempelajari statistika, Excel, SQL, dan Python lewat bootcamp lalu langsung menerapkannya di proyek nyata.`, en: `Learned statistics, Excel, SQL, and Python in a bootcamp and applied them straight away to a real project.` },
    from: `SmartPath`,
  },
];

export const skills = [
  { key: `prog`, color: `#2457e6`, title: { id: `Pemrograman`, en: `Programming` }, items: [`Python`, `SQL`, `PySpark`] },
  {
    key: `ml`,
    color: `#0b8f7c`,
    title: { id: `Machine Learning`, en: `Machine Learning` },
    items: [`scikit-learn`, `PyTorch`, `XGBoost`, `Random Forest`, `SVM`, `Logistic Regression`, `Graph Neural Network`, `GRU`, `NLP (TF-IDF)`],
  },
  {
    key: `bi`,
    color: `#b86e00`,
    title: { id: `Data & BI`, en: `Data & BI` },
    items: [`Pandas`, `NumPy`, `Power BI`, `Streamlit`, `Plotly`, `Databricks`],
  },
  {
    key: `tools`,
    color: `#6d4ad8`,
    title: { id: `Alat`, en: `Tools` },
    items: [`GitHub`, `VS Code`, `Google Colab`, `MySQL`, `SQLite`, `Trello`],
  },
  {
    key: `soft`,
    color: `#0f1b3d`,
    title: { id: `Soft skill`, en: `Soft skills` },
    items: softSkills.map((x) => x.title),
  },
];

export const projectsSection = {
  eyebrow: { id: `Proyek`, en: `Projects` },
  title: { id: `Yang telah saya bangun`, en: `What I've built` },
  lead: {
    id: `Dari penelitian prediksi sampai dashboard yang dipakai tim: setiap proyek berawal dari pertanyaan nyata dan berakhir pada insight yang bisa ditindaklanjuti.`,
    en: `From forecasting research to dashboards that support real decisions: every project starts from a real question and ends with an insight someone can act on.`,
  },
};

// Isi proyek (gambar, video, PDF; boleh banyak): taruh di folder public/projects/<id>/ dengan nama file bebas,
// atau di public/projects/ dengan nama <id>-1.png, <id>-2.mp4, dst. Kalau belum ada, otomatis tampil sampul bernomor.
// Link: isi href dengan alamat lengkap (https://...). Kalau dikosongkan, tombolnya tidak muncul.
export const projects = [
  {
    id: `chili`,
    featured: true,
    emoji: `🌶️`,
    colors: [`#ff5f6d`, `#ffb02e`],
    title: {
      id: `Prediksi Harga Cabai Rawit Menggunakan Spatio-Temporal Graph Convolutional Network Berbasis Korelasi Harga Antar Pasar di Kabupaten Banyumas`,
      en: `Bird's Eye Chili Price Prediction Using a Spatio-Temporal Graph Convolutional Network Based on Inter-Market Price Correlation in Banyumas Regency`,
    },
    meta: {
      id: `Paper IEEE ICoCSETI 2026 (Accepted) · Data DKUKMP Kab. Banyumas · 2026`,
      en: `IEEE ICoCSETI 2026 paper (Accepted) · DKUKMP Banyumas data · 2026`,
    },
    summary: {
      id: `Harga cabai rawit naik turun tajam dan ikut mendorong inflasi daerah. Saya membangun model Spatio-Temporal Graph Convolutional Network dari nol dengan PyTorch untuk memprediksi harga 30 hari ke depan di 14 pasar tradisional, lalu menyajikannya dalam dashboard untuk dinas dan tim pengendali inflasi.`,
      en: `Chili prices swing sharply and push regional inflation. I built a Spatio-Temporal Graph Convolutional Network from scratch in PyTorch to forecast prices 30 days ahead across 14 traditional markets, and shipped the results in a dashboard for the local trade office and the inflation control team.`,
    },
    points: [
      {
        id: `Mengolah 26.925 baris data harga harian dari 25 pasar (2023 sampai 2025), lalu menyeleksi 14 pasar berdasarkan kelengkapan data.`,
        en: `Processed 26,925 rows of daily price data from 25 markets (2023 to 2025) and selected 14 markets based on data completeness.`,
      },
      {
        id: `Graf korelasi harga dengan 85 koneksi dan ensemble 5 model: MAPE 2,81% pada hari ke-1 dan 23,03% rata-rata 30 hari.`,
        en: `Price-correlation graph with 85 connections and an ensemble of 5 models: 2.81% MAPE on day 1 and 23.03% averaged over 30 days.`,
      },
      {
        id: `Diuji terhadap 3 model pembanding dengan uji signifikansi: pada pasar yang harganya sangat seragam, informasi pasar lain tidak menambah akurasi.`,
        en: `Tested against 3 baselines with significance tests: in markets whose prices move almost together, neighbouring-market information did not add accuracy.`,
      },
      {
        id: `Dashboard Streamlit berisi simulasi prediksi, insight dari data historis, dan sinyal peringatan dini kenaikan harga.`,
        en: `Streamlit dashboard with forecast simulation, insights from historical data, and early-warning signals for price rises.`,
      },
    ],
    tags: [`Python`, `PyTorch`, `Graph Neural Network`, `Streamlit`],
    links: [
      { label: { id: `Dashboard Streamlit`, en: `Streamlit dashboard` }, href: `https://harga-cabai-rawit-banyumas.streamlit.app/` },
      { label: { id: `Paper`, en: `Paper` }, href: `` },
      { label: { id: `Kode`, en: `Code` }, href: `` },
    ],
  },
  {
    id: `lazismu`,
    emoji: `💝`,
    colors: [`#14c2b0`, `#4361ee`],
    title: { id: `Dashboard Donasi SobatBerbagi.com`, en: `SobatBerbagi.com Donation Dashboard` },
    meta: { id: `Magang Lazismu Banyumas · Jan sampai Feb 2025 · dilanjutkan dengan data hingga Mei 2025`, en: `Lazismu Banyumas internship · Jan to Feb 2025 · continued with data through May 2025` },
    summary: {
      id: `Tim fundraising belum punya gambaran jelas tentang donatur dan kinerja campaign. Saya membersihkan data donasi dari dua sumber, membangun dashboard interaktif, dan menyampaikan rekomendasi yang akhirnya dijalankan di lapangan.`,
      en: `The fundraising team had no clear picture of its donors or campaign performance. I cleaned donation data from two sources, built an interactive dashboard, and presented recommendations that were later carried out in the field.`,
    },
    points: [
      {
        id: `Membersihkan 833 transaksi (Des 2023 sampai Mei 2025) dari 263 donatur pada 25 campaign (Rp264 juta) dari sumber QRIS dan manual dengan Pandas. Data setelah masa magang diambil atas izin Lazismu.`,
        en: `Cleaned 833 transactions (Dec 2023 to May 2025) from 263 donors across 25 campaigns (IDR 264 million) from QRIS and manual sources using Pandas. Data after the internship period was obtained with Lazismu's permission.`,
      },
      {
        id: `Dashboard Streamlit 6 tab dengan segmentasi donatur ke 4 tier (Premium, Gold, Silver, Bronze) dan rekomendasi otomatis.`,
        en: `Six-tab Streamlit dashboard with donor segmentation into 4 tiers (Premium, Gold, Silver, Bronze) and automatic recommendations.`,
      },
      {
        id: `QRIS mendominasi 70,5% transaksi dengan tingkat keberhasilan 51,8% (manual 45,1%), ditambah pola Pareto pada donatur.`,
        en: `QRIS made up 70.5% of transactions with a 51.8% success rate (manual: 45.1%), plus a Pareto pattern among donors.`,
      },
      {
        id: `Rekomendasi saya diterapkan menjadi program "Jumat Berkah": bagi-bagi minuman sambil mengenalkan SobatBerbagi.com dan menggalang donasi.`,
        en: `My recommendation became the "Jumat Berkah" outreach program: handing out drinks while introducing SobatBerbagi.com and collecting donations.`,
      },
      {
        id: `Dashboard Power BI untuk mata kuliah Visualisasi Data dengan data hingga Feb 2025: Rp233 juta dari 443 transaksi dan 133 donatur.`,
        en: `Power BI dashboard for the Data Visualization course using data through Feb 2025: IDR 233 million from 443 transactions and 133 donors.`,
      },
    ],
    tags: [`Python`, `Pandas`, `Streamlit`, `Plotly`, `Power BI`],
    links: [
      { label: { id: `Dashboard Power BI`, en: `Power BI dashboard` }, href: `` },
      { label: { id: `Kode`, en: `Code` }, href: `` },
    ],
  },
  {
    id: `sirimby`,
    title: { id: `SIRIMBY: ERP Odoo untuk Rantai Pasok Yogurt`, en: `SIRIMBY: Odoo ERP for a Yogurt Supply Chain` },
    meta: {
      id: `Capstone Design Project · Kelompok Peternak Langgeng Sejahtera, Banyumas · 2025 · HKI`,
      en: `Capstone Design Project · Langgeng Sejahtera dairy farmers' group, Banyumas · 2025 · Copyright (HKI)`,
    },
    summary: {
      id: `Kelompok peternak beranggota 20 orang dengan produksi sekitar 2.400 liter susu per bulan menjual seluruhnya sebagai susu mentah ke satu pengepul (Rp7.400 per liter), dengan pencatatan manual. Tim capstone kami membangun SIRIMBY di atas Odoo Community untuk mendukung usaha baru mereka: mengolah susu menjadi yogurt. Peran saya: Analyst.`,
      en: `A 20-member dairy farmers' group producing about 2,400 liters of milk per month sold all of it as raw milk to a single buyer (IDR 7,400 per liter), with manual record keeping. Our capstone team built SIRIMBY on Odoo Community to support their new venture: turning milk into yogurt. My role: Analyst.`,
    },
    points: [
      {
        id: `Observasi lapangan dan wawancara dengan ketua dan pengurus kelompok untuk memetakan proses saat ini (AS-IS), lalu menyusun kebutuhan sistem (SRS) dan alur bisnis baru (TO-BE).`,
        en: `Field observation and interviews with the group's leaders to map the current process (AS-IS), then drafted the system requirements (SRS) and the new business flow (TO-BE).`,
      },
      {
        id: `Mengonfigurasi modul Manufacturing, Inventory, Point of Sale, dan Accounting, plus Bill of Materials agar takaran bahan yogurt konsisten.`,
        en: `Configured the Manufacturing, Inventory, Point of Sale, and Accounting modules, plus a Bill of Materials to keep yogurt ingredient amounts consistent.`,
      },
      {
        id: `Metode Agile dengan uji coba lapangan memakai data produksi dan penjualan nyata, lalu satu kali perbaikan alur berdasarkan umpan balik pengguna.`,
        en: `Agile approach with a field trial on real production and sales data, followed by one round of workflow improvements based on user feedback.`,
      },
      {
        id: `Divalidasi bersama stakeholder pada 5 kebutuhan bisnis (produksi, stok, BOM, penjualan, dashboard) dan dinilai layak digunakan; terdaftar sebagai HKI dan didokumentasikan dalam Manual Book.`,
        en: `Validated with stakeholders against 5 business needs (production, stock, BOM, sales, dashboard) and judged ready for use; registered as copyright (HKI) and documented in a user manual.`,
      },
    ],
    tags: [`Odoo`, `ERP`, `Agile`, `Business Analysis`],
    links: [{ label: { id: `Situs`, en: `Website` }, href: `https://www.sirimby.org` }],
  },
  {
    id: `retail`,
    emoji: `🛒`,
    colors: [`#6d4aff`, `#ff5fa2`],
    title: { id: `Prediksi Profitabilitas Transaksi Ritel`, en: `Retail Order Profitability Classification` },
    meta: { id: `Proyek kelompok Penambangan Data · Jun 2025`, en: `Data Mining group project · Jun 2025` },
    summary: {
      id: `Toko ritel perlu tahu pesanan mana yang untung dan mana yang rugi. Saya membangun model Random Forest untuk mengklasifikasikan profitabilitas pesanan dan mencari faktor penentunya.`,
      en: `A retailer needs to know which orders make money and which lose it. I built a Random Forest classifier for order profitability and looked for what drives it.`,
    },
    points: [
      {
        id: `Memproses 51.290 baris transaksi: deteksi outlier dengan IQR, fitur waktu, one-hot encoding, dan standardisasi.`,
        en: `Processed 51,290 transaction rows: IQR outlier detection, time features, one-hot encoding, and standardization.`,
      },
      { id: `Akurasi 91,6%, AUC 0,92, dan F1-score 95%.`, en: `91.6% accuracy, 0.92 AUC, and 95% F1-score.` },
      {
        id: `Diskon menjadi penentu terbesar profitabilitas (58% feature importance), sehingga direkomendasikan meninjau strategi diskon dan efisiensi logistik.`,
        en: `Discount was the strongest driver of profitability (58% feature importance), leading to a recommendation to review discount strategy and logistics efficiency.`,
      },
    ],
    tags: [`Python`, `scikit-learn`, `Random Forest`],
    links: [{ label: { id: `Kode`, en: `Code` }, href: `` }],
  },
  {
    id: `sentiment`,
    emoji: `🌳`,
    colors: [`#11998e`, `#6ee7a8`],
    title: { id: `Analisis Sentimen Publik tentang Deforestasi`, en: `Public Sentiment on Deforestation` },
    meta: { id: `Proyek kelompok Pemrosesan Bahasa Alami · 2025`, en: `Natural Language Processing group project · 2025` },
    summary: {
      id: `Opini publik tentang deforestasi tersebar di banyak platform. Saya mengumpulkannya, membersihkannya, lalu membandingkan dua model klasifikasi sentimen.`,
      en: `Public opinion on deforestation is scattered across platforms. I collected and cleaned it, then compared two sentiment classifiers.`,
    },
    points: [
      {
        id: `Mengumpulkan 2.211 opini dari X/Twitter, YouTube, dan berita daring; setelah dibersihkan tersisa 1.987 data.`,
        en: `Collected 2,211 opinions from X/Twitter, YouTube, and online news; 1,987 remained after cleaning.`,
      },
      {
        id: `Pipeline preprocessing teks Bahasa Indonesia 9 tahap (normalisasi slang, stopword, stemming Sastrawi).`,
        en: `Nine-step Indonesian text preprocessing pipeline (slang normalization, stopwords, Sastrawi stemming).`,
      },
      {
        id: `Logistic Regression mengungguli SVM dengan akurasi 93,97% dan macro F1 0,79; 28,1% opini bernada negatif, paling banyak di X/Twitter.`,
        en: `Logistic Regression beat SVM with 93.97% accuracy and 0.79 macro F1; 28.1% of opinions were negative, most of them on X/Twitter.`,
      },
    ],
    tags: [`Python`, `NLP`, `TF-IDF`, `Streamlit`],
    links: [
      { label: { id: `Dashboard`, en: `Dashboard` }, href: `` },
      { label: { id: `Kode`, en: `Code` }, href: `` },
    ],
  },
  {
    id: `spotify`,
    emoji: `🎧`,
    colors: [`#7f5af0`, `#ff8ab3`],
    title: { id: `Preferensi Musik Lintas Negara dengan Big Data`, en: `Cross-Country Music Preferences with Big Data` },
    meta: { id: `Proyek kelompok Pengelolaan Big Data (tim 5 orang) · 2025`, en: `Big Data Management group project (team of 5) · 2025` },
    summary: {
      id: `Bagaimana selera musik antarnegara berbeda? Tim kami membangun pipeline big data di Databricks untuk menjawabnya dari data Spotify Charts 2018 sampai 2021 dan percakapan media sosial.`,
      en: `How do music tastes differ between countries? Our team built a big data pipeline on Databricks to answer it from Spotify Charts 2018 to 2021 and social media conversations.`,
    },
    points: [
      {
        id: `Menggabungkan 3 sumber data: 1.773.514 baris Spotify Charts (5 file), 1.115 komentar YouTube, dan 618 tweet.`,
        en: `Combined 3 data sources: 1,773,514 Spotify Charts rows (5 files), 1,115 YouTube comments, and 618 tweets.`,
      },
      {
        id: `Pipeline 5 tahap di Databricks dengan PySpark; data bersih disimpan dalam format Parquet.`,
        en: `Five-stage pipeline on Databricks with PySpark; clean data stored in Parquet format.`,
      },
      {
        id: `Dashboard Power BI interaktif (filter negara, artis, tanggal) dan visualisasi Databricks untuk top artis, lagu, dan tren streams.`,
        en: `Interactive Power BI dashboard (country, artist, and date filters) and Databricks visuals for top artists, songs, and streaming trends.`,
      },
    ],
    tags: [`PySpark`, `Databricks`, `Parquet`, `Power BI`],
    links: [{ label: { id: `Kode`, en: `Code` }, href: `` }],
  },
  {
    id: `sql`,
    emoji: `🗄️`,
    colors: [`#ffb02e`, `#ff5f6d`],
    title: { id: `Analisis Penjualan Supermarket dengan SQL`, en: `Supermarket Sales Analysis with SQL` },
    meta: { id: `Bootcamp Data Analyst SmartPath · Sep 2025 sampai Jan 2026`, en: `SmartPath Data Analyst Bootcamp · Sep 2025 to Jan 2026` },
    summary: {
      id: `Menjawab pertanyaan bisnis sebuah jaringan supermarket langsung dari database SQL: dari membersihkan data kotor sampai membaca tren penjualan bulanan.`,
      en: `Answering a supermarket chain's business questions straight from a SQL database, from cleaning messy data to reading monthly sales trends.`,
    },
    points: [
      {
        id: `Membersihkan 10.004 baris dari 4 tabel: menemukan nilai kosong, format tanggal tidak konsisten, dan 10 order_id duplikat; hasilnya tabel bersih 9.976 baris dengan ROW_NUMBER().`,
        en: `Cleaned 10,004 rows across 4 tables: found missing values, inconsistent date formats, and 10 duplicate order_ids; produced a clean 9,976-row table with ROW_NUMBER().`,
      },
      {
        id: `Dengan JOIN dan CTE: ketujuh kategori produk melewati penjualan $2 juta, dan Health Drinks menjadi sub-kategori paling menguntungkan ($267 ribu, 50,9% profit kategori Beverages).`,
        en: `With JOINs and CTEs: all 7 product categories passed $2M in sales, and Health Drinks was the most profitable sub-category ($267K, 50.9% of Beverages profit).`,
      },
      {
        id: `Window functions: 50 pelanggan dibagi ke 3 tier loyalitas (NTILE) dan tren 66 bulan dibaca dengan LAG; 33 bulan penjualan turun, kuartal pertama tumbuh paling baik (rata-rata +11,3% per bulan).`,
        en: `Window functions: 50 customers split into 3 loyalty tiers (NTILE) and a 66-month trend read with LAG; sales fell in 33 months, and Q1 grew best (average +11.3% per month).`,
      },
    ],
    tags: [`SQL`, `SQLite`, `CTE`, `Window Functions`],
    links: [{ label: { id: `Kode`, en: `Code` }, href: `` }],
  },
];

export const experienceSection = {
  eyebrow: { id: `Pengalaman`, en: `Experience` },
  title: { id: `Tempat saya belajar dan bekerja`, en: `Where I've learned and worked` },
};

export const experience = [
  {
    role: { id: `Peserta Bootcamp Data Analyst`, en: `Data Analyst Bootcamp Participant` },
    org: `SmartPath`,
    date: { id: `Sep 2025 - Jan 2026`, en: `Sep 2025 - Jan 2026` },
    points: [
      {
        id: `Belajar statistika, Excel, SQL, dan Python untuk analisis data lewat proyek-proyek nyata.`,
        en: `Learned statistics, Excel, SQL, and Python for data analysis through hands-on projects.`,
      },
      {
        id: `Mengerjakan analisis penjualan supermarket dengan SQL tingkat lanjut (JOIN, CTE, Window Functions).`,
        en: `Completed a supermarket sales analysis using advanced SQL (JOINs, CTEs, Window Functions).`,
      },
    ],
  },
  {
    role: { id: `Campaign Strategy & Analyst Intern (Digital Fundraising)`, en: `Campaign Strategy & Analyst Intern (Digital Fundraising)` },
    org: `Lazismu Banyumas`,
    date: { id: `Jan - Feb 2025`, en: `Jan - Feb 2025` },
    points: [
      {
        id: `Membersihkan dan menganalisis 833 transaksi donasi (Rp264 juta, data hingga Mei 2025 atas izin Lazismu), lalu membangun dashboard Streamlit 6 tab untuk memantau campaign.`,
        en: `Cleaned and analyzed 833 donation transactions (IDR 264 million, data through May 2025 with Lazismu's permission), then built a six-tab Streamlit dashboard to monitor campaigns.`,
      },
      {
        id: `Menemukan dominasi QRIS (70,5% transaksi) dan pola Pareto donatur sebagai dasar strategi retensi.`,
        en: `Found QRIS dominance (70.5% of transactions) and a donor Pareto pattern as the basis for a retention strategy.`,
      },
      {
        id: `Mempresentasikan rekomendasi dalam diskusi tim hingga diterapkan menjadi program "Jumat Berkah".`,
        en: `Presented recommendations in team discussions until they became the "Jumat Berkah" program.`,
      },
    ],
  },
  {
    role: { id: `Scrum Master`, en: `Scrum Master` },
    org: { id: `Proyek MaHoKo, Mata Kuliah Software Project, Telkom University`, en: `MaHoKo Project, Software Project Course, Telkom University` },
    date: { id: `Okt - Des 2024`, en: `Oct - Dec 2024` },
    points: [
      {
        id: `Memfasilitasi tim beranggotakan 6 orang dengan kerangka kerja Scrum dalam merancang prototipe aplikasi marketplace: product backlog dan sprint backlog, daily scrum, sprint review, dan sprint retrospective.`,
        en: `Facilitated a six-member team using the Scrum framework in designing a marketplace application prototype, covering product backlog and sprint backlog preparation, daily scrums, the sprint review, and the sprint retrospective.`,
      },
      {
        id: `Memantau progres 34 tugas pada 9 fitur lewat Trello dan spreadsheet hingga seluruhnya selesai, serta mengoordinasikan tindak lanjut masukan stakeholder dari sprint review.`,
        en: `Monitored the progress of 34 tasks across 9 features through Trello and spreadsheets until all were completed, and coordinated the follow-up on stakeholder feedback from the sprint review.`,
      },
    ],
  },
  {
    role: { id: `Pantarlih dan Anggota KPPS, Pilkada 2024`, en: `Voter Data Updater (Pantarlih) and KPPS Member, 2024 Local Elections` },
    org: `KPU Banyumas`,
    date: { id: `Jun - Nov 2024`, en: `Jun - Nov 2024` },
    points: [
      {
        id: `Memverifikasi 502 data pemilih lewat pendataan langsung ke rumah warga dengan akurasi 100%, selesai sesuai tenggat.`,
        en: `Verified 502 voter records through door-to-door data collection with 100% accuracy, finished on deadline.`,
      },
      {
        id: `Menginput hasil penghitungan suara ke sistem digital Sirekap secara akurat di bawah tekanan waktu dan pengawasan publik.`,
        en: `Entered vote-count results into the Sirekap digital system accurately under time pressure and public scrutiny.`,
      },
    ],
  },
  {
    role: { id: `Pendamping Kelompok, Panitia PKKMB`, en: `Group Facilitator, PKKMB Committee` },
    org: { id: `PKKMB Fakultas, Telkom University Purwokerto`, en: `Faculty Student Orientation (PKKMB), Telkom University Purwokerto` },
    date: { id: `Sep 2023`, en: `Sep 2023` },
    points: [
      {
        id: `Membantu mengorganisasi dan memfasilitasi kegiatan orientasi mahasiswa baru di Telkom University Purwokerto.`,
        en: `Assisted in organizing and facilitating orientation activities for new students at Telkom University Purwokerto.`,
      },
      {
        id: `Membimbing dan mendampingi kelompok mahasiswa baru selama rangkaian program orientasi.`,
        en: `Guided and supported new students throughout the orientation program.`,
      },
      {
        id: `Berkoordinasi dengan anggota panitia lintas divisi untuk memastikan kegiatan berjalan lancar dan efektif.`,
        en: `Coordinated with committee members to ensure activities ran smoothly and effectively.`,
      },
    ],
  },
];

export const achievementsSection = {
  eyebrow: { id: `Pencapaian`, en: `Achievements` },
  title: { id: `Riset, sertifikasi, dan HKI`, en: `Research, certifications, and IP` },
  pubsTitle: { id: `Penelitian & publikasi`, en: `Research & publications` },
  certsTitle: { id: `Sertifikasi & HKI`, en: `Certifications & IP` },
};

export const publications = [
  {
    year: `2026`,
    status: { id: `Accepted`, en: `Accepted` },
    role: { id: `Penulis pertama`, en: `First author` },
    venue: `2026 2nd International Conference on Computer Sciences, Engineering, and Technology Innovation (ICoCSETI) · IEEE`,
    title: `Bird's Eye Chili Price Prediction Using a Spatio-Temporal Graph Convolutional Network Based on Inter-Market Price Correlation in Banyumas Regency`,
    links: [{ label: { id: `Paper`, en: `Paper` }, href: `` }],
  },
  {
    year: `2024`,
    status: null,
    role: { id: `Penulis kedua`, en: `Second author` },
    venue: `CENTIVE · Institut Teknologi Telkom Purwokerto · Sinta 3`,
    title: `Sistem Pendukung Keputusan Pemilihan Marketplace Menggunakan Metode SMART`,
    // File yang dibuka lewat preview layar penuh (taruh di public/papers/, nama sesuai "file").
    files: [
      { file: `papers/smart-paper`, label: { id: `Lihat paper`, en: `View paper` } },
      { file: `papers/smart-sertifikat`, label: { id: `Sertifikat penulis`, en: `Author certificate` } },
    ],
    links: [{ label: { id: `Lihat publikasi`, en: `View publication` }, href: `` }],
  },
];

// Gambar sertifikat: taruh di public/certs/ dengan nama sesuai "file" (jpg, png, atau webp).
export const certifications = [
  {
    file: `bnsp-data-science`,
    icon: `🏅`,
    title: { id: `Sertifikasi Kompetensi Data Science`, en: `Data Science Competency Certification` },
    issuer: `BNSP (LSP)`,
    desc: null,
  },
  {
    file: `ibm-granite`,
    icon: `🤖`,
    title: { id: `Data Classification and Summarization Using IBM Granite`, en: `Data Classification and Summarization Using IBM Granite` },
    issuer: ``,
    desc: null,
  },
  {
    file: `bootcamp-smartpath`,
    icon: `🎓`,
    title: { id: `Bootcamp Data Analyst`, en: `Data Analyst Bootcamp` },
    issuer: `SmartPath`,
    desc: null,
  },
  {
    file: `magang-lazismu`,
    icon: `💼`,
    title: { id: `Magang Campaign Strategy & Analyst (Digital Fundraising)`, en: `Campaign Strategy & Analyst (Digital Fundraising) Internship` },
    issuer: `Lazismu Banyumas`,
    desc: null,
  },
  {
    file: `hki-sirimby`,
    icon: `©️`,
    title: { id: `Surat Pencatatan Ciptaan: SIRIMBY`, en: `Copyright Registration: SIRIMBY` },
    issuer: `Sistem Informasi Manajemen Bisnis Yoghurt`,
    desc: {
      id: `Program komputer berbasis ERP Odoo untuk digitalisasi rantai pasok susu. Peran saya: analisis kebutuhan bisnis.`,
      en: `Odoo ERP-based software for digitizing the milk supply chain. My role: business requirements analysis.`,
    },
  },
  {
    file: `eprt`,
    icon: `🌐`,
    title: { id: `English Proficiency Test (EPrT)`, en: `English Proficiency Test (EPrT)` },
    issuer: `Telkom University Language Center`,
    desc: null,
  },
  {
    file: `pkkmb-2023`,
    icon: `🎒`,
    title: { id: `Panitia PKKMB 2023 Fakultas Informatika`, en: `PKKMB 2023 Committee, Faculty of Informatics` },
    issuer: `Institut Teknologi Telkom Purwokerto`,
    desc: null,
  },
];

export const contact = {
  eyebrow: { id: `Kontak`, en: `Contact` },
  title: { id: `Informasi Kontak Saya`, en: `Let's connect` },
  lead: {
    id: `Saya terbuka untuk kesempatan magang maupun pekerjaan di bidang Data Science dan Data Analyst. Silakan hubungi saya, dengan senang hati saya berdiskusi.`,
    en: `I'm open to internships and job opportunities in Data Science and Data Analytics. Feel free to reach out, I'd be glad to talk.`,
  },
  emailLabel: { id: `Email`, en: `Email` },
};
