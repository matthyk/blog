import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { HOME } from "@consts";

type Context = {
  site: string
}

export async function GET(context: Context) {
  const blog = (await getCollection("blog"))
  .filter(post => !post.data.draft);

  const projects = (await getCollection("projects"))
    .filter(project => !project.data.draft);

  const research = (await getCollection("research"))
    .filter(item => !item.data.draft);

  const items = [
    ...blog.map(item => ({
      title: item.data.title,
      description: item.data.description,
      pubDate: item.data.date,
      link: `/${item.collection}/${item.slug}/`,
    })),
    ...projects.map(item => ({
      title: item.data.title,
      description: item.data.description,
      pubDate: item.data.date,
      link: `/${item.collection}/${item.slug}/`,
    })),
    ...research.map(item => ({
      title: item.data.title,
      description: item.data.abstract ?? `${item.data.author} (${item.data.year})`,
      pubDate: new Date(item.data.year, 0, 1),
      link: `/${item.collection}/${item.slug}/`,
    })),
  ].sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

  return rss({
    title: HOME.TITLE,
    description: HOME.DESCRIPTION,
    site: context.site,
    items,
  });
}
