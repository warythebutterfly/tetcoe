import { defineField, defineType } from "sanity";

export const governanceMember = defineType({
  name: "governanceMember",
  title: "Governance Member",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title / role",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "roleGroup",
      title: "Governance section",
      type: "string",
      options: {
        list: [
          { title: "Centre Director", value: "director" },
          { title: "Centre Manager", value: "manager" },
          { title: "Administrative Officer", value: "adminOfficer" },
          { title: "TAC Member", value: "tacMember" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "photo",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "text",
      rows: 6,
    }),
    defineField({
      name: "order",
      title: "Display order",
      type: "number",
      initialValue: 100,
    }),
  ],
});
