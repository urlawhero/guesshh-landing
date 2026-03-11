import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://guesshh.com'
  const lastModified = new Date()

  return [
    // Core Pages
    {
      url: `${baseUrl}`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/play`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    
    // Blog Architecture
    {
      url: `${baseUrl}/blog`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/how-to-host-game-night`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/art-of-the-bluff`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/whats-new-v2`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },

    // English SEO Landing Pages
    {
      url: `${baseUrl}/seo/en/spyfall-alternative`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/seo/en/games-to-play-with-friends`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/seo/en/social-deduction-party-game`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },

    // International SEO Landing Pages
    {
      url: `${baseUrl}/seo/el/paixnidia-me-filous`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/seo/fr/jeux-entre-amis`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/seo/it/giochi-da-fare-in-gruppo`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/seo/es/juegos-para-jugar-con-amigos`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/seo/de/partyspiele-fuer-gruppen`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },

    // Legal & Policy Pages
    {
      url: `${baseUrl}/privacy`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
