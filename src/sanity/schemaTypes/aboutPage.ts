import { defineField, defineType } from "sanity";

export const aboutPage = defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      type: "string",
      initialValue: "About",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "Overview of the Centre",
    }),
    defineField({
      name: "description",
      title: "Page description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "fullName",
      title: "Centre full name",
      type: "string",
    }),
    defineField({
      name: "established",
      title: "Established",
      type: "string",
    }),
    defineField({
      name: "host",
      title: "Host institution",
      type: "string",
    }),
    defineField({
      name: "overview",
      title: "Overview",
      type: "text",
      rows: 6,
    }),
    defineField({
      name: "directorMessage",
      title: "Director's message",
      description: "Separate paragraphs with a blank line.",
      type: "text",
      rows: 15,
    }),
    defineField({
      name: "directorName",
      title: "Director's name",
      type: "string",
    }),
    defineField({
      name: "directorTitle",
      title: "Director's title",
      type: "string",
    }),
    defineField({
      name: "directorPhoto",
      title: "Director's photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "vision",
      title: "Vision",
      type: "text",
      rows: 5,
    }),
    defineField({
      name: "mission",
      title: "Mission",
      type: "text",
      rows: 5,
    }),
  ],
});