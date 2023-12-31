import { asset, Head } from "$fresh/runtime.ts";

function GlobalTags() {
  return (
    <Head>
      {/* Tailwind v3 CSS file */}
      <link href={asset("/styles.css")} rel="stylesheet" />

      {/* Icons */}
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={asset("/favicon-32x32.png")}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={asset("/favicon-16x16.png")}
      />
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href={asset("/favicon-32x32.png")}
      />

      <link
        href="https://fonts.cdnfonts.com/css/helvetica-2"
        rel="stylesheet"
      />

      {/* Web Manifest */}
      <link rel="manifest" href={asset("/site.webmanifest")} />

      <style>
        {`
        a {
          color: #63c0f5;
          text-decoration: underline;
        }

        body {
          background: #151515 url('https://lab.capital/assets/images/bkg.png') 0 0;
        }
      `}
      </style>
    </Head>
  );
}

export default GlobalTags;
