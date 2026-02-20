import { useEffect } from "react";

interface PageHeadProps {
  title: string;
  description?: string;
}

export function PageHead({ title, description }: PageHeadProps) {
  useEffect(() => {
    const fullTitle = `${title} | معاهد الوادي العليا`;
    document.title = fullTitle;
    
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", fullTitle);
    else {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:title");
      meta.setAttribute("content", fullTitle);
      document.head.appendChild(meta);
    }

    if (description) {
      let descMeta = document.querySelector('meta[name="description"]');
      if (descMeta) descMeta.setAttribute("content", description);
      else {
        descMeta = document.createElement("meta");
        descMeta.setAttribute("name", "description");
        descMeta.setAttribute("content", description);
        document.head.appendChild(descMeta);
      }
      
      let ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute("content", description);
      else {
        ogDesc = document.createElement("meta");
        ogDesc.setAttribute("property", "og:description");
        ogDesc.setAttribute("content", description);
        document.head.appendChild(ogDesc);
      }
    }
  }, [title, description]);

  return null;
}
