import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const sale = defineType({
  name: "sale",
  title: "Sale-Banner",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "title",
      title: "Banner-Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Banner-Description",
      type: "text",
    }),
    defineField({
      name: "salebadge",
      title: "Sale-Badge",
      type: "string",
      description: "discount-ratio",
    }),
    defineField({
      name: "discountamount",
      title: "Discount-Amount",
      type: "number",
      description: "Amount off in percentage or fixed value",
    }),
    defineField({
      name: "coupon",
      title: "Coupon-Code",
      type: "string",
    }),
    defineField({
      name: "validStart",
      title: "Valid-Start",
      type: "datetime",
    }),
    defineField({
      name: "validEnd",
      title: "Valid-End",
      type: "datetime",
    }),
    defineField({
      name: "active",
      title: "ActiveIs",
      type: "boolean",
      description: "active and disactivate sale banner",
      initialValue: true,
    }),
    defineField({
      name: "Image",
      title: "hero-image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "Image2",
      title: "hero-image2",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      discountamount: "discountamount",
      coupon: "coupon",
      active: "active",
    },
    prepare(select) {
      const { title, discountamount, coupon, active } = select;
      const status = active ? "Active" : "InActive";
      return {
        title,
        subtitle: `${discountamount}% OFF CouponCode: ${coupon} - ${status}`,
      };
    },
  },
});
