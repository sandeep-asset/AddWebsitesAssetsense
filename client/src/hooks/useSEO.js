import { useEffect } from "react";

const useSEO = ({
  title = "Assetsense",
  description = "Find best commercial properties",
  keywords = "",
  image = "",
}) => {
  useEffect(() => {
    // Title
    document.title = title;

    // Helper function
    const setMetaTag = (name, content, property = false) => {
      let selector = property
        ? `meta[property='${name}']`
        : `meta[name='${name}']`;

      let element = document.querySelector(selector);

      if (!element) {
        element = document.createElement("meta");
        if (property) {
          element.setAttribute("property", name);
        } else {
          element.setAttribute("name", name);
        }
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    };

    // Basic SEO
    setMetaTag("description", description);
    if (keywords) setMetaTag("keywords", keywords);

    // Open Graph (for social sharing)
    setMetaTag("og:title", title, true);
    setMetaTag("og:description", description, true);
    if (image) setMetaTag("og:image", image, true);

  }, [title, description, keywords, image]);
};

export default useSEO;