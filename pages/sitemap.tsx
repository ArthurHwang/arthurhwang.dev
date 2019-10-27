import { createClient } from "../services/blog";
import * as builder from "xmlbuilder";

const rootUrl = "https://arthurhwang.dev";

const buildUrlObject = (path: any, updatedAt: any) => {
  return {
    loc: { "#text": `${rootUrl}${path}` },
    lastmod: { "#text": updatedAt.split("T")[0] },
    changefreq: { "#text": "daily" },
    priority: { "#text": "1.0" }
  };
};

const Sitemap = () => null;

Sitemap.getInitialProps = async ({ res }: any) => {
  try {
    const client = createClient();

    const pages = await client.getEntries({
      content_type: "page",
      limit: 1000,
      include: 1
    });

    const articles = await client.getEntries({
      content_type: "article",
      limit: 1000,
      include: 1
    });

    const posts = await client.getEntries({
      content_type: "post",
      limit: 1000,
      include: 1
    });

    let feedObject = {
      urlset: {
        "@xmlns": "http://www.sitemaps.org/schemas/sitemap/0.9",
        "@xmlns:image": "http://www.google.com/schemas/sitemap-image/1.1",
        url: []
      }
    };

    for (const item of pages.items) {
      if (typeof item.fields.slug !== "undefined") {
        feedObject.urlset.url.push(
          // @ts-ignore
          buildUrlObject(
            `/${item.fields.slug === "index" ? "" : item.fields.slug}`,
            item.sys.updatedAt
          )
        );
      }
    }

    for (const item of articles.items) {
      if (typeof item.fields.slug !== "undefined") {
        feedObject.urlset.url.push(
          // @ts-ignore
          buildUrlObject(`/blog/${item.fields.slug}`, item.sys.updatedAt)
        );
      }
    }

    for (const item of posts.items) {
      if (typeof item.fields !== "undefined") {
        feedObject.urlset.url.push(
          // @ts-ignore
          buildUrlObject(
            `/the-salon/${
              item.fields.slug === "index" ? "" : item.fields.slug
            }`,
            item.sys.updatedAt
          )
        );
      }
    }

    const sitemap = builder.create(feedObject, { encoding: "utf-8" });

    if (res) {
      res.setHeader("Cache-Control", "s-maxage=5, stale-while-revalidate");
      res.setHeader("Content-Type", "application/xml");
      res.statusCode = 200;
      res.end(sitemap.end({ pretty: true }));
    }

    return;
  } catch (error) {
    return { error: 404 };
  }
};

export default Sitemap;
