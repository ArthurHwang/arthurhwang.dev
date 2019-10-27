// @ts-ignore
import { NextContext } from "next";
import { client } from "../services/blog";

const HOST = "https://arthurhwang.dev";

const SITEMAP_HEADER = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://arthurhwang.dev</loc>
    <lastmod>2019-10-26</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://arthurhwang.dev/projects</loc>
    <lastmod>2019-10-26</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://arthurhwang.dev/blog</loc>
    <lastmod>2019-10-26</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://arthurhwang.dev/contact</loc>
    <lastmod>2019-10-26</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  `;

const SITEMAP_FOOTER = `</urlset>`;

interface Props {
  done: boolean;
}

export default function SiteMap() {
  return null;
}

SiteMap.getInitialProps = async ({ res }: NextContext): Promise<Props> => {
  if (res) {
    let sitemap = `${SITEMAP_HEADER}`;

    const nodes = await client.getEntries();

    sitemap = `${SITEMAP_HEADER}
    
    ${nodes.items.map((node: any) =>
      mapEntry(
        {
          title: node.fields.title
            .toLowerCase()
            .split(" ")
            .join("-"),
          createdAt: node.sys.createdAt.split("T")[0],
          updatedAt: node.sys.updatedAt.split("T")[0]
        },
        "/blog"
      )
    )}
    ${SITEMAP_FOOTER}`;

    res.setHeader("Cache-Control", "s-maxage=5, stale-while-revalidate");
    res.setHeader("Content-Type", "application/xml");
    res.statusCode = 200;
    res.end(sitemap);
  }

  return {
    done: true
  };
};

function mapEntry(
  node: { title: string; createdAt: string; updatedAt: string },
  pathRoot: string = "/",
  priority: number = 0.5,
  changefreq: string = "always"
) {
  return `
<url>
   <loc>${HOST}${pathRoot}${pathRoot.length > 1 ? "/" : ""}${node.title}</loc>
   <lastmod>${node.updatedAt ? node.updatedAt : node.createdAt}</lastmod>
   <changefreq>${changefreq}</changefreq>
   <priority>${priority}</priority>
</url>`;
}
