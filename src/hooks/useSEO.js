import { useEffect } from 'react';

export default function useSEO({ title, description, image }) {
  useEffect(() => {
    document.title = title || 'PAgeant Pro';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = description || 'Pageant Pro is a comprehensive platform designed to guide startups from ideation to series A.';
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description || 'PAgeant Pro is a comprehensive platform designed to guide startups from ideation to series A';
      document.head.appendChild(meta);
    }

    // Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.content = title || 'PAgeant Pro';
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.content = description || 'PAgeant Pro is a comprehensive platform designed to guide startups from ideation to series A';
    }

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.content = image || '/images/pageant-binder.png';
    }

  }, [title, description, image]);
}