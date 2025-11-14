export type BlogPreview = {
  slug: string;
  titleKey: string;
  descriptionKey: string;
  imageUrl?: string;
  authorKey?: string;
  dateKey?: string;
  isFeatured?: boolean;
};

export const BLOG_PREVIEWS: BlogPreview[] = [
  {
    slug: "pura-vida-ecosystem",
    titleKey: "puraVidaBlogTitle",
    descriptionKey: "puraVidaBlogDesc",
    imageUrl: "/assets/blog/blog-1.png",
    authorKey: "puraVidaBlogAuthor",
    dateKey: "puraVidaBlogDate",
    isFeatured: true,
  },
];
