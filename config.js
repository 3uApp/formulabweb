const defaultConfig = {
  siteName: 'Formulab',
  siteIcon: 'assets/logo.svg',
  contact: {
    whatsapp: 'https://wa.me/966596204057',
    email: 'mailto:allbdrii99@gmail.com'
  },
  pages: [
    {
      slug: 'privacy',
      href: 'privacy.html',
      titles: { en: 'Privacy Policy', ar: 'سياسة الخصوصية' },
      contents: { en: '', ar: '' }
    },
    {
      slug: 'terms',
      href: 'terms.html',
      titles: { en: 'Terms of Use', ar: 'شروط الاستخدام' },
      contents: { en: '', ar: '' }
    }
  ]
};

function loadConfig() {
  const stored = localStorage.getItem('siteConfig');
  return stored ? JSON.parse(stored) : defaultConfig;
}

function saveConfig(cfg) {
  localStorage.setItem('siteConfig', JSON.stringify(cfg));
}
