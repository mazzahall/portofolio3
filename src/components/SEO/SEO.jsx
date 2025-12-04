import { Helmet } from "react-helmet";

export default function SEO() {
  return (
    <Helmet>

      <title>Azzam — Frontend Developer & UI/UX Designer</title>

      <meta
        name="description"
        content="Portofolio Azzam, seorang Frontend Developer dengan fokus pada UI modern, performa cepat, dan pengalaman pengguna yang solid."
      />

      <meta
        name="keywords"
        content="Frontend Developer, React Developer, UI/UX Designer, Tailwind CSS, Web Developer, Portfolio"
      />

      <meta property="og:title" content="Azzam — Frontend Developer & UI/UX Designer" />
      <meta property="og:description" content="Website portofolio Azzam: Projek, Skills, dan jasa pembuatan website." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://portfolio3-10b.netlify.app/" />

      <meta name="twitter:title" content="Azzam — Frontend Developer" />
      <meta name="twitter:description" content="Portofolio dan projek Azzam sebagai Frontend Developer & UI/UX Designer." />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>
  );
}
