import DefaultLayout from "~/layouts/Default.vue";

import "~/assets/scss/reset.scss";
import "~/assets/fonts/digestive/font.css";
import "~/assets/fonts/vcrosdmono/font.css";
import "~/assets/scss/working.scss";

export default function(Vue, { router, head, isClient, appOptions }) {
  // Add an external CSS file
  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"
  });

  // Add a meta tag
  head.meta.push(
    {
      name: "keywords",
      content: "HTML,CSS,XML,JavaScript"
    },
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },

    { hid: "title", name: "title", content: "Bosque R.E.A.L." },
    {
      hid: "description",
      name: "description",
      content:
        "Revisión Expandida, Aumentada y Literal de la Casa de Campo de Madrid. Propone una serie de eventos que abordan hechos históricos, anécdotas y lugares más o menos conocidos, reconocibles, secretos o fundamentales de un lugar tan icónico como plural"
    },

    // google
    { itemprop: "name", content: "Bosque R.E.A.L." },
    { itemprop: "image", content: "assets/static/rrss/REDES_insta_1.jpg" },
    {
      itemprop: "description",
      content:
        "Revisión Expandida, Aumentada y Literal de la Casa de Campo de Madrid. Propone una serie de eventos que abordan hechos históricos, anécdotas y lugares más o menos conocidos, reconocibles, secretos o fundamentales de un lugar tan icónico como plural."
    },

    // twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Bosque R.E.A.L." },
    {
      name: "twitter:description",
      content:
        "Revisión Expandida, Aumentada y Literal de la Casa de Campo de Madrid. Propone una serie de eventos que abordan hechos históricos, anécdotas y lugares más o menos conocidos, reconocibles, secretos o fundamentales de un lugar tan icónico como plural."
    },
    { name: "twitter:image:src", content: "assets/static/rrss/REDES_insta_1.jpg" },

    // graph data
    { property: "og:title", content: "Bosque R.E.A.L." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://bosque-real.es/" },
    { property: "og:image", content: "assets/static/rrss/REDES_fb3.jpg" },
    {
      property: "og:description",
      content:
        "Revisión Expandida, Aumentada y Literal de la Casa de Campo de Madrid. Propone una serie de eventos que abordan hechos históricos, anécdotas y lugares más o menos conocidos, reconocibles, secretos o fundamentales de un lugar tan icónico como plural."
    }
  );

  Vue.component("Layout", DefaultLayout);
}
