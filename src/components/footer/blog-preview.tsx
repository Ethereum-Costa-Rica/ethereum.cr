import { Flex, Text, Box, Divider } from "@chakra-ui/react";
import NextLink from "next/link";
import { useTranslation } from "next-i18next";
import Image from "next/image";

import { BLOG_PREVIEWS } from "@/constants/blogs";

const FooterBlogPreview = () => {
  const { t, ready } = useTranslation();

  if (!ready) return null;

  const featuredPost = BLOG_PREVIEWS.find((post) => post.isFeatured) || BLOG_PREVIEWS[0];
  const otherPosts = BLOG_PREVIEWS.filter((post) => !post.isFeatured || post.slug !== featuredPost.slug);

  return (
    <Flex direction={{ base: "column", md: "row" }} gap="2em" w="100%">
      {/* Left Column - Featured Article */}
      <Flex direction="column" flex="1" gap="1em">
        {featuredPost.imageUrl && (
          <Box
            position="relative"
            width="100%"
            height="300px"
            borderRadius="8px"
            overflow="hidden"
            mb="0.5em"
          >
            <Image
              src={featuredPost.imageUrl}
              alt={t(featuredPost.titleKey)}
              fill
              style={{ objectFit: "cover" }}
            />
          </Box>
        )}
        <Text
          as={NextLink}
          href={`/blog/${featuredPost.slug}`}
          variant="h1-semibold"
          _hover={{ opacity: 0.85 }}
          cursor="pointer"
        >
          {t(featuredPost.titleKey)}
        </Text>
        <Text variant="normal-text-regular" color="gray.700">
          {t(featuredPost.descriptionKey)}
        </Text>
        {(featuredPost.authorKey || featuredPost.dateKey) && (
          <Text variant="small-text-light" color="gray.600">
            {featuredPost.authorKey && t(featuredPost.authorKey)}
            {featuredPost.authorKey && featuredPost.dateKey && " "}
            {featuredPost.dateKey && t(featuredPost.dateKey)}
          </Text>
        )}
      </Flex>

      {/* Right Column - Featured Posts List */}
      <Flex direction="column" flex="1" gap="1em" minW={{ base: "100%", md: "300px" }}>
        <Box mb="1em">
          <Text variant="h2-semibold" mb="0.5em">
            {t("footer.featuredPosts")}
          </Text>
          <Box
            height="2px"
            width="80px"
            bg="red.500"
          />
        </Box>
        {otherPosts.length > 0 ? (
          <Flex direction="column" gap="0">
            {otherPosts.map((post, index) => (
              <Box key={post.slug}>
                {index > 0 && <Divider borderColor="gray.300" my="1em" />}
                <Flex direction="column" gap="0.5em">
                  <Text
                    as={NextLink}
                    href={`/blog/${post.slug}`}
                    variant="h3-semibold"
                    _hover={{ opacity: 0.85 }}
                    cursor="pointer"
                  >
                    {t(post.titleKey)}
                  </Text>
                  {(post.authorKey || post.dateKey) && (
                    <Text variant="small-text-light" color="gray.600">
                      {post.authorKey && t(post.authorKey)}
                      {post.authorKey && post.dateKey && " "}
                      {post.dateKey && t(post.dateKey)}
                    </Text>
                  )}
                </Flex>
              </Box>
            ))}
          </Flex>
        ) : (
          <Text variant="normal-text-regular" color="gray.600">
            -
          </Text>
        )}
      </Flex>
    </Flex>
  );
};

export default FooterBlogPreview;
