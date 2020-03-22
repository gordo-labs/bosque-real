import React from "react"
import { Helmet } from "react-helmet"

export default function MetaHelmet(props) {
  const metas = {
    title: "Bosque R.E.A.L.",
    description:
      "Revisión Expandida, Aumentada y Literal de la Casa de Campo de Madrid. Propone una serie de eventos que abordan hechos históricos, anécdotas y lugares más o menos conocidos, reconocibles, secretos o fundamentales de un lugar tan icónico como plural.",
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{metas.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta name="description" content={metas.description} />

        <meta itemprop="name" content={metas.title} />
        <meta itemprop="image" content="/rrss/REDES_insta_1.jpg" />
        <meta itemprop="description" content="/rrss/REDES_insta_1.jpg" />

        <meta name="theme-color" content="#ffffff" />
        <meta name="application-name" content={metas.title} />

        <link rel="shortcut icon" href="./icons/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />

        {props.children}
      </Helmet>
    </>
  )
}
