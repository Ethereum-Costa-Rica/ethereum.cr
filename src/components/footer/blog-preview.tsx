import { Button, Flex, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { useTranslation } from "next-i18next";
import { MdArrowOutward } from "react-icons/md";

import { BLOG_PREVIEWS } from "@/constants/blogs";

const FooterBlogPreview = () => {
  const { t, ready } = useTranslation("common");

  if (!ready) return null;

  return (
    <Flex direction="column" gap="1.25em" w="100%">
      <Flex
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        gap="0.75em"
      >
        <Flex direction="column" gap="0.5em" flex="1 1 15em" minW="15em">
          <Text variant="h1-semibold">{t("footer.blogSectionTitle")}</Text>
          <Text variant="normal-text-regular">{t("footer.blogSectionSubtitle")}</Text>
        </Flex>
        <Button
          as={NextLink}
          href="/blog"
          variant="outlined"
          size="sm"
          px="1.5em"
          py="0.75em"
          columnGap="0.5em"
          transition="all 0.2s ease"
          rightIcon={<MdArrowOutward />}
          _hover={{ transform: "translateY(-0.1em)", boxShadow: "md" }}
          _active={{ transform: "translateY(0)" }}
        >
          {t("footer.blogSectionCta")}
        </Button>
      </Flex>
      <Flex direction="column" gap="1em" w="100%">
        {BLOG_PREVIEWS.map((post) => (
          <Flex key={post.slug} direction="column" gap="0.5em">
            <Text
              as={NextLink}
              href={`/blog/${post.slug}`}
              variant="h3-semibold"
              textDecoration="underline"
              _hover={{ opacity: 0.85 }}
            >
              {t(post.titleKey)}
            </Text>
            <Text variant="small-text-light">{t(post.descriptionKey)}</Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default FooterBlogPreview;
