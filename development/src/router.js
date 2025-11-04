import { createRouter, createWebHistory } from "vue-router";
import { nextTick } from "vue";
import { dbConfig } from "./configuration/config";
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Project from "./pages/Project.vue";

const routes = [
  {
    path: "/",
    component: Home,
    meta: {
      title: "Home - Dupan Code",
      description: "Halaman utama portofolio Dupan Code.",
      keywords: "dupandes milenium, dupan code, portfolio, web development",
      ogTitle: "Dupan Code",
      ogDescription: "Halaman utama portofolio Dupan Code.",
      ogImage: `${dbConfig.baseUrl}/thumbnail.png`,
      ogUrl: dbConfig.baseUrl,
    },
  },
  {
    path: "/about",
    component: About,
    meta: {
      title: "About - Dupan Code",
      description: "Tentang Dupan Code dan projek-projeknya.",
      keywords: "dupandes milenium, dupan code, about, developer",
      ogTitle: "About Dupan Code",
      ogDescription: "Tentang Dupan Code dan projek-projeknya.",
      ogImage: `${dbConfig.baseUrl}/thumbnail.png`,
      ogUrl: dbConfig.baseUrl,
    },
  },
  {
    path: "/project/:id",
    name: "project",
    component: Project,
    props: true, 
    meta: {
      title: "Project - Dupan Code",
      description: "Detail proyek dari Dupan Code.",
      keywords: "dupandes milenium, dupan code, project, web development",
      ogTitle: "Project - Dupan Code",
      ogDescription: "Detail proyek Dupan Code.",
      ogImage: `${dbConfig.baseUrl}/thumbnail.png`,
      ogUrl: dbConfig.baseUrl,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

function updateMeta(selector, attr, content) {
  if (!content) return;
  const tag = document.querySelector(selector);
  if (tag) tag.setAttribute(attr, content);
}

router.afterEach(async (to) => {
  const meta = to.meta || {};
  const id = to.params?.id ?? "";
  const cleanId = id
  ?.toString()
  .replaceAll("-", " ")
  .trim()
  .replace(/\b\w/g, (char) => char.toUpperCase());
  const titleText = cleanId ? `${cleanId} - Project Dupan Code` : meta.title || "Dupan Code";

  await nextTick();

  document.title = titleText;
  const titleEl = document.querySelector("title");
  if (titleEl) titleEl.textContent = titleText;
  
  const descriptionText = cleanId
    ? `Lihat detail proyek ${cleanId} di Dupan Code. Temukan fitur dan teknologi yang digunakan di proyek ini.`
    : meta.description || "Detail proyek dari Dupan Code.";

  const keywordsText = meta.keywords
    ? `${meta.keywords}, ${cleanId}`
    : `dupandes milenium, dupan code, project, web development, ${cleanId}`;
    
  const ogUrl = cleanId
    ? `${meta.ogUrl}/project/${cleanId}`
    : meta.ogUrl || dbConfig.baseUrl;
  const ogImage = cleanId
    ? `${dbConfig.baseUrl}/images/${cleanId}.png`
    : meta.ogImage;

  updateMeta("meta[name='description']", "content", descriptionText);
  updateMeta("meta[name='keywords']", "content", keywordsText);

  // Open Graph
  updateMeta("meta[property='og:title']", "content", cleanId || meta.ogTitle);
  updateMeta("meta[property='og:description']", "content", descriptionText);
  updateMeta("meta[property='og:image']", "content", ogImage);
  updateMeta("meta[property='og:url']", "content", ogUrl);

  // Twitter
  updateMeta("meta[name='twitter:card']", "content", "summary_large_image");
  updateMeta("meta[name='twitter:title']", "content", cleanId || "Project");
  updateMeta("meta[name='twitter:description']", "content", descriptionText);
  updateMeta("meta[name='twitter:image']", "content", ogImage);

  // JSON-LD dinamis
  const jsonLD = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: cleanId || "Project",
    url: ogUrl,
    description: descriptionText,
    image: ogImage,
    author: { "@type": "Person", name: dbConfig.author },
  };

  let ldScript = document.querySelector("#json-ld");
  if (!ldScript) {
    ldScript = document.createElement("script");
    ldScript.type = "application/ld+json";
    ldScript.id = "json-ld";
    document.head.appendChild(ldScript);
  }
  ldScript.textContent = JSON.stringify(jsonLD, null, 2);
  
  document.dispatchEvent(new Event("render-event"));
});

export default router;
