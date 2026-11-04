// Menyusun isi halaman dari data di src/data/content.js.
// Kamu tidak perlu mengubah file ini untuk mengganti teks. Ubah saja content.js.
import {
  profile, ui, softSkillsSection, softSkills, hero, stats, about, education, documents, skillsSection, skills,
  projectsSection, projects, experienceSection, experience, achievementsSection,
  publications, certifications, contact,
} from '../data/content.js';
import { findFile, gallery, typeOf, exists } from './assets.js';

// Mengamankan teks supaya tanda seperti & dan < tidak merusak HTML.
const esc = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Teks dua bahasa: tampilkan keduanya, CSS menyembunyikan yang tidak dipilih.
const T = (o) =>
  typeof o === 'string' ? esc(o) : `<span data-l="id">${esc(o.id)}</span><span data-l="en">${esc(o.en)}</span>`;

const sectionHead = (eyebrow, title, lead) => `
  <header class="sec-head reveal">
    <p class="eyebrow">${T(eyebrow)}</p>
    <h2 class="h2">${T(title)}</h2>
    ${lead ? `<p class="lead">${T(lead)}</p>` : ''}
  </header>`;

const extLink = (href, inner, cls = 'link') =>
  `<a class="${cls}" href="${esc(href)}" target="_blank" rel="noopener noreferrer">${inner}</a>`;

// Tombol/tautan yang membuka pratinjau (gambar, video, atau PDF) di jendela popup.
const previewAttrs = (src, title) => `href="${esc(src)}" data-preview data-type="${typeOf(src)}" data-title="${esc(title)}"`;

// Logo teknologi: dimuat dari Simple Icons (butuh internet). Kalau gagal dimuat, otomatis diganti kotak kecil.
const ICON_SLUG = {
  Python: 'python', PySpark: 'apachespark', 'scikit-learn': 'scikitlearn', PyTorch: 'pytorch', Pandas: 'pandas',
  NumPy: 'numpy', Streamlit: 'streamlit', Plotly: 'plotly',
  Databricks: 'databricks', GitHub: 'github', 'Google Colab': 'googlecolab',
  MySQL: 'mysql', SQLite: 'sqlite', Trello: 'trello',
};
const ICON_LOCAL = { SQL: '/icons/sql.svg', 'Power BI': '/icons/powerbi.png', 'VS Code': '/icons/vscode.png' };
const chip = (name) => {
  const src = ICON_LOCAL[name] || (ICON_SLUG[name] ? `https://cdn.simpleicons.org/${ICON_SLUG[name]}` : '');
  if (!src) return `<span class="chip">${T(name)}</span>`;
  return `<span class="chip chip--ico"><img class="ico" src="${src}" alt="" width="16" height="16" loading="lazy" onerror="this.parentNode.classList.remove('chip--ico');this.remove()" />${T(name)}</span>`;
};

/* ---------- NAV ---------- */
const nav = () => `
<header class="nav" id="nav">
  <div class="container">
    <div class="nav__in">
      <a class="brand" href="#hero" aria-label="${esc(profile.name)}">
        <span class="brand__mark">${esc(profile.initials)}</span>
        <span class="brand__name">${esc(profile.short)}</span>
      </a>
      <nav class="nav__links" id="navlinks" aria-label="Main">
        ${['about', 'skills', 'projects', 'experience', 'achievements', 'contact']
          .map((k) => `<a href="#${k}" data-nav="${k}">${T(ui.nav[k])}</a>`)
          .join('')}
      </nav>
      <div class="nav__right">
        <div class="lang" role="group" aria-label="Language">
          <button type="button" data-set-lang="id" aria-pressed="false">ID</button>
          <button type="button" data-set-lang="en" aria-pressed="true">EN</button>
        </div>
        <button type="button" class="burger" data-burger aria-label="Menu" aria-expanded="false" aria-controls="navlinks">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </div>
  <div class="progress" id="progress"></div>
</header>`;

/* ---------- HERO ---------- */
const hero_ = () => {
  const photo = findFile('images/profile');
  const cv = findFile('CV_Fathimah_Ella_Syarif', ['pdf']);
  return `
<section class="hero" id="hero">
  <div class="container hero__grid">
    <div class="hero__text reveal">
      <p class="pill"><span class="pill__dot"></span>${T(hero.open)}</p>
      <h1 class="hero__title">
        <span class="hero__hi">${T(hero.hi)}</span>
        ${profile.name.split(' ').map((w, i) => `<span class="w${i === 1 ? ' w--em' : ''}"><span>${esc(w)}</span></span>`).join(' ')}
      </h1>
      <div class="roles">${hero.roles.map((r) => `<span class="role">${T(r)}</span>`).join('')}</div>
      <p class="lead">${T(hero.tagline)}</p>
      <div class="cta">
        <a class="btn btn--primary" href="#projects">${T(hero.ctaProjects)}</a>
        <a class="btn btn--ghost" href="#contact">${T(hero.ctaContact)}</a>
        ${cv ? `<a class="btn btn--soft" href="${cv}" download>${T(hero.ctaCv)} ↓</a>` : ''}
      </div>
    </div>
    <div class="hero__art reveal">
      <div class="avatar">
        <div class="avatar__ring"></div>
        <div class="avatar__img">
          ${photo ? `<img src="${photo}" alt="${esc(profile.name)}" />` : `<span class="avatar__initials">${esc(profile.initials)}</span>`}
        </div>
      </div>
      ${hero.stickers
        .map((s, i) => `<span class="sticker s${i + 1}">${T(s.text)}</span>`)
        .join('')}
    </div>
  </div>
  <div class="container stats">
    ${stats
      .map((s) => `<div class="stat card reveal"><div class="stat__v">${T(s.value)}</div><div class="stat__l">${T(s.label)}</div></div>`)
      .join('')}
  </div>
</section>`;
};

/* ---------- ABOUT ---------- */
const about_ = () => `
<section class="section" id="about">
  <div class="container">
    ${sectionHead(about.eyebrow, about.title)}
    <div class="about__grid">
      <div class="about__text reveal">
        ${about.paragraphs.map((p) => `<p>${T(p)}</p>`).join('')}
      </div>
      <aside class="card edu reveal">
        <p class="edu__school">${esc(education.school)}</p>
        <p class="edu__degree">${T(education.degree)}</p>
        <p class="edu__meta">${esc(education.years)} · ${T(education.gpa)}</p>
        <p class="edu__courses-title">${T(education.coursesTitle)}</p>
        <div class="chips">${education.courses.map((c) => `<span class="chip chip--sm">${T(c)}</span>`).join('')}</div>
      </aside>
    </div>
    <div class="docs">
      ${documents
        .map((d) => {
          const f = findFile(`docs/${d.file}`, ['pdf', 'jpg', 'jpeg', 'png']);
          return `
      <div class="card doc reveal">
        <div class="doc__t">${T(d.title)}</div>
        ${f ? `<a class="btn btn--soft btn--sm" ${previewAttrs(f, d.title.en)} target="_blank" rel="noopener noreferrer">${T(ui.viewDoc)} ↗</a>` : `<span class="doc__na">${T(ui.onRequest)}</span>`}
      </div>`;
        })
        .join('')}
    </div>
  </div>
</section>`;

/* ---------- SKILLS ---------- */
const skills_ = () => `
<section class="section" id="skills">
  <div class="container">
    ${sectionHead(skillsSection.eyebrow, skillsSection.title)}
    <div class="filters reveal" role="group" aria-label="Filter">
      <button type="button" class="filter" data-filter="all" aria-pressed="true">${T(ui.all)}</button>
      ${skills.map((g) => `<button type="button" class="filter" data-filter="${g.key}" aria-pressed="false">${T(g.title)}</button>`).join('')}
    </div>
    <div class="skills__grid" id="skillsgrid">
      ${[['prog', 'bi', 'tools'], ['ml', 'soft']]
        .map(
          (keys) => `<div class="skills__col">${keys
            .map((k) => skills.find((g) => g.key === k))
            .filter(Boolean)
            .map(
              (g) => `
        <div class="card skill-group reveal" data-group="${g.key}" style="--gc:${g.color}">
          <h3>${T(g.title)}</h3>
          <div class="chips">${g.items.map((i) => chip(i)).join('')}</div>
        </div>`,
            )
            .join('')}</div>`,
        )
        .join('')}
    </div>
  </div>
</section>`;

/* ---------- PROJECTS ---------- */
const slide = (it, p, k) => {
  const title = `${p.title.en} ${k + 1}`;
  const a = (inner) => `<a class="slide slide--${it.type}" ${previewAttrs(it.src, title)} target="_blank" rel="noopener noreferrer" aria-label="${esc(ui.preview.en)}: ${esc(title)}">${inner}<span class="slide__hint" aria-hidden="true">${T(ui.preview)}</span></a>`;
  if (it.type === 'video') return a(`<video src="${it.src}#t=0.1" preload="metadata" muted playsinline></video><span class="slide__badge">▶</span>`);
  if (it.type === 'pdf' && it.thumb) return a(`<img src="${it.thumb}" alt="${esc(title)}" loading="lazy" /><span class="slide__badge slide__badge--pdf">PDF</span>`);
  if (it.type === 'pdf') return a(`<span class="slide__file"><b>PDF</b><small>${esc(it.src.split('/').pop())}</small></span>`);
  return a(`<img src="${it.src}" alt="${esc(title)}" loading="lazy" />`);
};

const media = (p, n) => {
  const items = gallery(p.id);
  if (items.length === 0) return '';
  return `
      <div class="gallery" data-gallery>
        <div class="gallery__track">
          ${items.map((it, k) => slide(it, p, k)).join('')}
        </div>
        ${
          items.length > 1
            ? `<button type="button" class="gal-btn gal-btn--prev" data-gal="-1" aria-label="${esc(ui.prev.en)}">‹</button>
        <button type="button" class="gal-btn gal-btn--next" data-gal="1" aria-label="${esc(ui.next.en)}">›</button>
        <div class="gal-dots" role="tablist">${items.map((_, k) => `<button type="button" class="gal-dot${k === 0 ? ' on' : ''}" data-gal-to="${k}" aria-label="${k + 1}"></button>`).join('')}</div>
        <span class="gal-count" data-gal-count>1 / ${items.length}</span>`
            : ''
        }
      </div>`;
};

const project = (p, n) => {
  const links = p.links.filter((l) => l.href);
  const m = media(p, n);
  return `
  <article class="card project${p.featured ? ' project--featured' : ''}${m ? '' : ' project--text'} reveal" >
    ${m ? `<div class="project__media">${m}</div>` : ''}
    <div class="project__body">
      <p class="meta">${T(p.meta)}</p>
      <h3 class="project__title">${T(p.title)}</h3>
      <p class="summary">${T(p.summary)}</p>
      <ul class="points">${p.points.map((x) => `<li>${T(x)}</li>`).join('')}</ul>
      <div class="tags">${p.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join('')}</div>
      ${links.length ? `<div class="links">${links.map((l) => extLink(l.href, `${T(l.label)} ↗`)).join('')}</div>` : ''}
    </div>
  </article>`;
};

const projects_ = () => `
<section class="section" id="projects">
  <div class="container">
    ${sectionHead(projectsSection.eyebrow, projectsSection.title, projectsSection.lead)}
    <div class="projects">${projects.map((p, n) => project(p, n)).join('')}</div>
  </div>
</section>`;

/* ---------- EXPERIENCE ---------- */
const experience_ = () => `
<section class="section" id="experience">
  <div class="container">
    ${sectionHead(experienceSection.eyebrow, experienceSection.title)}
    <ol class="timeline">
      ${experience
        .map(
          (e) => `
      <li class="tl card reveal">
        <span class="tl__dot" aria-hidden="true"></span>
        <div class="tl__head">
          <h3>${T(e.role)}</h3>
          <span class="tl__date">${T(e.date)}</span>
        </div>
        <p class="tl__org">${T(e.org)}</p>
        <ul class="points">${e.points.map((x) => `<li>${T(x)}</li>`).join('')}</ul>
      </li>`,
        )
        .join('')}
    </ol>
    <div class="softbox reveal">
      <h3 class="softbox__title">${T(softSkillsSection.title)}</h3>
      <div class="chips">${softSkills.map((x) => `<span class="chip chip--soft" title="${esc(x.proof.en)}">${T(x.title)}</span>`).join('')}</div>
    </div>
  </div>
</section>`;

/* ---------- ACHIEVEMENTS ---------- */
const achievements_ = () => `
<section class="section" id="achievements">
  <div class="container">
    ${sectionHead(achievementsSection.eyebrow, achievementsSection.title)}
    <h3 class="sub reveal">${T(achievementsSection.pubsTitle)}</h3>
    <div class="pubs">
      ${publications
        .map((p) => {
          const links = p.links.filter((l) => l.href);
          const files = (p.files || [])
            .map((x) => ({ ...x, src: findFile(x.file, ['pdf', 'jpg', 'jpeg', 'png', 'webp']) }))
            .filter((x) => x.src);
          const fileLinks = files
            .map((x) => `<a class="link" ${previewAttrs(x.src, `${p.title} · ${x.label.en}`)} target="_blank" rel="noopener noreferrer">${T(x.label)} ↗</a>`)
            .join('');
          return `
      <article class="card pub reveal">
        ${p.year ? `<span class="year">${esc(p.year)}</span>` : ''}
        <div class="pub__body">
          <h4>${esc(p.title)}</h4>
          <p class="pub__meta">
            <span class="role-badge">${T(p.role)}</span>
            ${p.status ? `<span class="status">${T(p.status)}</span>` : ''}
            <span>${esc(p.venue)}</span>
          </p>
        </div>
        ${links.length || files.length ? `<div class="links">${fileLinks}${links.map((l) => extLink(l.href, `${T(l.label)} ↗`)).join('')}</div>` : ''}
      </article>`;
        })
        .join('')}
    </div>

    <h3 class="sub reveal">${T(achievementsSection.certsTitle)}</h3>
    <div class="certs">
      ${certifications
        .map((c) => {
          const f = findFile(`certs/${c.file}`, ['jpg', 'jpeg', 'png', 'webp', 'pdf']);
          const kind = f ? typeOf(f) : '';
          // Kalau sertifikatnya PDF, tampilkan gambar halaman pertamanya sebagai thumbnail
          // (taruh di public/certs/<nama>-thumb.jpg). Kalau tidak ada, jatuh ke kotak "PDF".
          const pdfThumb = kind === 'pdf' ? findFile(`certs/${c.file}-thumb`, ['jpg', 'jpeg', 'png', 'webp']) : '';
          const thumb = !f
            ? ''
            : `<a class="thumb-wrap" ${previewAttrs(f, c.title.en)} target="_blank" rel="noopener noreferrer" aria-label="${esc(ui.preview.en)}: ${esc(c.title.en)}">${
                kind === 'pdf' && !pdfThumb
                  ? '<span class="thumb thumb--pdf"><b>PDF</b></span>'
                  : `<img class="thumb" src="${kind === 'pdf' ? pdfThumb : f}" alt="${esc(c.title.en)}" loading="lazy" />`
              }<span class="thumb__view">${T(ui.viewDoc)}</span></a>`;
          return `
      <article class="card cert reveal">
        ${thumb}
        <div class="cert__body">
          <h4>${T(c.title)}</h4>
          ${c.issuer ? `<p class="cert__issuer">${esc(c.issuer)}</p>` : ''}
          ${c.desc ? `<p class="cert__desc">${T(c.desc)}</p>` : ''}
        </div>
      </article>`;
        })
        .join('')}
    </div>
  </div>
</section>`;

/* ---------- CONTACT ---------- */
const contact_ = () => {
  const items = [
    { label: 'LinkedIn', value: profile.linkedin.replace('https://www.', ''), href: profile.linkedin, icon: '💼' },
    { label: 'GitHub', value: profile.github.replace('https://', ''), href: profile.github, icon: '💻' },
  ];
  if (profile.whatsapp) items.push({ label: 'WhatsApp', value: profile.phone || ui.message, href: profile.whatsapp });
  return `
<section class="section" id="contact">
  <div class="container">
    <div class="contact reveal">
      <p class="eyebrow eyebrow--light">${T(contact.eyebrow)}</p>
      <h2 class="h2 h2--light">${T(contact.title)}</h2>
      <p class="lead lead--light">${T(contact.lead)}</p>
      <div class="contact__grid">
        <div class="contact__item contact__item--wide">
          <div class="contact__txt">
            <span class="contact__label">${T(contact.emailLabel)}</span>
            <a class="contact__value" href="mailto:${esc(profile.email)}">${esc(profile.email)}</a>
          </div>
          <button type="button" class="copy" data-copy="${esc(profile.email)}">
            <span class="lbl">${T(ui.copy)}</span><span class="done">${T(ui.copied)} ✓</span>
          </button>
        </div>
        ${items
          .map(
            (i) => `
        <a class="contact__item" href="${esc(i.href)}" target="_blank" rel="noopener noreferrer">
          <div class="contact__txt"><span class="contact__label">${i.label}</span><span class="contact__value">${T(i.value)}</span></div>
          <span class="contact__arrow" aria-hidden="true">↗</span>
        </a>`,
          )
          .join('')}
      </div>
    </div>
  </div>
</section>`;
};

/* ---------- FOOTER ---------- */
const footer_ = () => `
<footer class="footer">
  <div class="container footer__in">
    <p>© ${new Date().getFullYear()} ${esc(profile.name)} · ${T(ui.built)}</p>
    <a href="#hero">${T(ui.backToTop)} ↑</a>
  </div>
</footer>`;

const marquee_ = () => {
  const words = skills.filter((g) => g.key !== 'soft').flatMap((g) => g.items);
  const row = words.map((w) => `<span class="marquee__item">${esc(w)}</span>`).join('');
  return `<div class="marquee" aria-hidden="true"><div class="marquee__track">${row}${row}</div></div>`;
};

const backdrop = () => `
<div class="glow glow--a" aria-hidden="true"></div>
<div class="glow glow--b" aria-hidden="true"></div>
<div class="glow glow--c" aria-hidden="true"></div>
<canvas id="bg" aria-hidden="true"></canvas>`;

const lightbox_ = () => `
<div class="lightbox" id="lightbox" hidden role="dialog" aria-modal="true" aria-label="Preview">
  <div class="lightbox__bar">
    <span class="lightbox__title" id="lb-title"></span>
    <span class="lightbox__count" id="lb-count"></span>
    <a class="lightbox__open" id="lb-open" href="#" target="_blank" rel="noopener noreferrer">${T(ui.openNew)} ↗</a>
    <button type="button" class="lightbox__close" id="lb-close" aria-label="Close">✕</button>
  </div>
  <div class="lightbox__main">
    <button type="button" class="lb-nav lb-nav--prev" id="lb-prev" aria-label="${esc(ui.prev.en)}">‹</button>
    <div class="lightbox__stage" id="lb-stage"></div>
    <button type="button" class="lb-nav lb-nav--next" id="lb-next" aria-label="${esc(ui.next.en)}">›</button>
  </div>
</div>`;

export const renderBody = () =>
  [backdrop(), nav(), '<main>', hero_(), marquee_(), about_(), skills_(), projects_(), experience_(), achievements_(), contact_(), '</main>', footer_(), lightbox_()].join('\n');
