import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET() {
    return rss({
        title: 'David Martinez | Blog',
        description: 'My journey learning Astro',
        site: 'https://dm-astro-tutorial.netlify.app/',
        items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
        customData: `<language>en-us</language>`,
    });
}