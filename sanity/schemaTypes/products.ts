import { TrolleyIcon } from "@sanity/icons";

import { defineField, defineType } from "sanity";

export const Products = defineType({
  name: "products",
  title: "Products",
  type: "document",
  icon: TrolleyIcon,
  fields: [
    defineField({
      name: "product",
      title: "Product Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "product",
        maxLength: 96,
      },

      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "productImage",
      title: "Product-Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "price",
      title: "price",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "discount",
      title: "discount",
      type: "number",
    }),
    defineField({
      name: "categories",
      title: "categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    }),
    defineField({
      name: "stock",
      title: "Stock",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "status",
      title: "Product Status",
      type: "string",
      options: {
        list: [
          { title: "NEW", value: "NEW" },
          { title: "HOT", value: "HOT" },
          { title: "SALE", value: "SALE" },
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
      subtitle: "price",
    },
    prepare(selection) {
      return {
        title: selection.title,
        subtitle: `$${selection.subtitle}`,
        media: selection.media,
      };
    },
  },
});
