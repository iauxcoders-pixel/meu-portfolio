import { supabase } from '@/lib/supabaseClient';

const BASE_URL = 'https://seusite.com';

export default async function sitemap() {
  const { data: posts, error } = await supabase
    .from('posts')
    .select('slug, updated_at, created_at')
    .eq('status', 'publicado');

  const staticRoutes = [
    { url: `${BASE_URL}/`, lastModified: new Date() },
    { url: `${BASE_URL}/blog`, lastModified: new Date() },
    { url: `${BASE_URL}/design`, lastModified: new Date() },
    { url: `${BASE_URL}/sobre`, lastModified: new Date() },
    { url: `${BASE_URL}/contacto`, lastModified: new Date() },
  ];

  if (error || !Array.isArray(posts)) {
    return staticRoutes;
  }

  const dynamicRoutes = posts.map((p) => ({
    url: `${BASE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.updated_at || p.created_at || new Date()),
  }));

  return [...staticRoutes, ...dynamicRoutes];
}