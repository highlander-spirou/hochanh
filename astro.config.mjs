import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Docs with Tailwind",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        // {
        // 	label: 'Guides',
        // 	items: [
        // 		// Each item here is one entry in the navigation menu.
        // 		{ label: 'Example Guide', link: '/guides/example/' },
        // 	],
        // },
        {
          label: "AWS",
          autogenerate: { directory: "aws" },
        },
        {
          label: "Database",
          items: [
            { label: "Introduction", link: "/database/intro" },
            {
              label: "Relational Database",
              autogenerate: {
                directory: "/database/Relational Database",
              },
              // badge: { text: "📖", variant: "success" },
            },
            {
              label: "Columnar Database",
              autogenerate: {
                directory: "/database/Columnar Database",
              },
              // badge: { text: "📖", variant: "success" },
            },
            {
              label: "Database Index",
              autogenerate: {
                directory: "/database/Database Index",
              },
              // badge: { text: "📖", variant: "success" },
            },
          ],
        },
        {
          label: "Networking",
          autogenerate: { directory: "networking" },
        },
        {
          label: "Datastructure",
          autogenerate: { directory: "datastructure" },
        },
        {
          label: "Application Design",
          autogenerate: { directory: "app_design" },
        },
        {
          label: "Others",
          autogenerate: { directory: "others" },
        },
        
      ],
      customCss: ["./src/tailwind.css"],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
