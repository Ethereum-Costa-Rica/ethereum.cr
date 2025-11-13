import Head from "next/head";
import {
  Box,
  Heading,
  Text,
  VStack,
  Link,
  Container,
  useMediaQuery,
  Image,
  Divider,
} from "@chakra-ui/react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import NavBarMobile from "@/components/navbar/nav-bar-mobile";
import NavBarDesktop from "@/components/navbar/nav-bar-desktop";
import FooterMobile from "@/components/footer/footer-mobile";
import FooterDesktop from "@/components/footer/footer-desktop";
import { ETH_CR_LOGO, WHITE_BG_COLOR } from "@/constants/navbar";
import { MOBILE_MEDIA_QUERY } from "@/constants/app";

export default function PuraVidaEcosystem() {
  const { t } = useTranslation("pura-vida-blog");
  const [isMobile] = useMediaQuery(MOBILE_MEDIA_QUERY);

  return (
    <>
      <Head>
        <title>{t("title")}</title>
        <meta name="description" content={t("metaDescription")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/ethcr-icon.svg" />
      </Head>

      <Box minH="100vh" bg="white">
        {isMobile ? (
          <NavBarMobile
            baseBgColor={WHITE_BG_COLOR}
            extendedBgColor={WHITE_BG_COLOR}
            baseLogo={ETH_CR_LOGO}
            extendedLogo={ETH_CR_LOGO}
            baseMenuLogoColor="black"
            extendedMenuLogoColor="black"
          />
        ) : (
          <NavBarDesktop
            baseBgColor={WHITE_BG_COLOR}
            extendedBgColor={WHITE_BG_COLOR}
            baseLogo={ETH_CR_LOGO}
            extendedLogo={ETH_CR_LOGO}
            baseTextColor="black"
            extendedTextColor="black"
          />
        )}

        <Container maxW="900px" mx="auto" px={6} py={8}>
          <VStack spacing={8} align="stretch">
            <Box textAlign="center" mt={20}>
              <Image src="/assets/blog/blog-1.png" alt="Blog" maxH="260px" mx="auto" mb={6} />
              <Heading as="h1" size="2xl" color="blue.700" mb={2}>
                {t("title")}
              </Heading>
              <Text color="gray.600">
                <b>{t("authors")}</b> {t("authorsText")} ·{" "}
                <Link href="https://www.linkedin.com/in/esteban-murcia-24887510b" isExternal color="blue.500">
                  LinkedIn - Esteban Murcia
                </Link>{" "}
                ·{" "}
                <Link href="https://www.linkedin.com/in/jafettsandi/" isExternal color="blue.500">
                  LinkedIn - Jafet T. Sandi
                </Link>{" "}
                ·{" "}
                <Link href="https://x.com/0xSelvaGrowth" isExternal color="blue.500">
                  X - 0xSelvaGrowth
                </Link>
              </Text>
            </Box>

            <Divider />

            <Box>
              <Heading as="h2" size="lg" mb={4} color="green.700">{t("sections.tldr.heading")}</Heading>
              <VStack as="ul" align="stretch" pl={6} spacing={2}>
                {(t("sections.tldr.items", { returnObjects: true }) as any[]).map((item, idx) => (
                  <Box key={idx} as="li" dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </VStack>
            </Box>

            <Divider />

            <Box>
              <Heading as="h2" size="lg" mb={4} color="blue.700">{t("sections.macro.heading")}</Heading>
              <Text mb={2} dangerouslySetInnerHTML={{ __html: t("sections.macro.intro") }} />
              <VStack as="ul" align="stretch" pl={6} spacing={1} mb={2}>
                {(t("sections.macro.items", { returnObjects: true }) as any[]).map((item, idx) => (
                  <Box key={idx} as="li" dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </VStack>
            </Box>

            <Divider />

            <Box>
              <Heading as="h2" size="lg" mb={4} color="purple.700">{t("sections.timeline.heading")}</Heading>
              <VStack as="ul" align="stretch" pl={6} spacing={2}>
                {(t("sections.timeline.items", { returnObjects: true }) as any[]).map((item, idx) => (
                  <Box key={idx} as="li" dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </VStack>
            </Box>

            <Divider />

            <Box>
              <Heading as="h2" size="lg" mb={4} color="teal.700">{t("sections.policy.heading")}</Heading>
              <Text mb={2} dangerouslySetInnerHTML={{ __html: t("sections.policy.intro") }} />
              <VStack as="ul" align="stretch" pl={6} spacing={1} mb={2}>
                {(t("sections.policy.items", { returnObjects: true }) as any[]).map((item, idx) => (
                  <Box key={idx} as="li" dangerouslySetInnerHTML={{ __html: item }} />
                ))}
                <Box as="li">{t("sections.policy.items.2")}
                  <VStack as="ul" pl={6} align="stretch" spacing={1} mt={1}>
                    {(t("sections.policy.regulators", { returnObjects: true }) as any[]).map((item, idx) => (
                      <Box key={idx} as="li" dangerouslySetInnerHTML={{ __html: item }} />
                    ))}
                  </VStack>
                </Box>
              </VStack>
              <Text fontWeight="semibold" mb={2}>{t("sections.policy.milestonesHeading")}</Text>
              <VStack as="ul" align="stretch" pl={6} spacing={1}>
                {(t("sections.policy.milestones", { returnObjects: true }) as any[]).map((item, idx) => (
                  <Box key={idx} as="li" dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </VStack>
            </Box>

            <Divider />

            <Box>
              <Heading as="h2" size="lg" mb={4} color="orange.700">{t("sections.keyPlayers.heading")}</Heading>

              <Heading as="h3" size="md" mt={4} mb={2} color="orange.600">{t("sections.keyPlayers.payments.heading")}</Heading>
              <VStack as="ul" align="stretch" pl={6} spacing={1}>
                {(t("sections.keyPlayers.payments.items", { returnObjects: true }) as any[]).map((item, idx) => (
                  <Box key={idx} as="li" dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </VStack>

              <Heading as="h3" size="md" mt={4} mb={2} color="orange.600">{t("sections.keyPlayers.liquidity.heading")}</Heading>
              <VStack as="ul" align="stretch" pl={6} spacing={1}>
                {(t("sections.keyPlayers.liquidity.items", { returnObjects: true }) as any[]).map((item, idx) => (
                  <Box key={idx} as="li" dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </VStack>

              <Heading as="h3" size="md" mt={4} mb={2} color="orange.600">{t("sections.keyPlayers.infrastructure.heading")}</Heading>
              <VStack as="ul" align="stretch" pl={6} spacing={1}>
                {(t("sections.keyPlayers.infrastructure.items", { returnObjects: true }) as any[]).map((item, idx) => (
                  <Box key={idx} as="li" dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </VStack>

              <Heading as="h3" size="md" mt={4} mb={2} color="orange.600">{t("sections.keyPlayers.refi.heading")}</Heading>
              <VStack as="ul" align="stretch" pl={6} spacing={1}>
                {(t("sections.keyPlayers.refi.items", { returnObjects: true }) as any[]).map((item, idx) => (
                  <Box key={idx} as="li" dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </VStack>

              <Heading as="h3" size="md" mt={4} mb={2} color="orange.600">{t("sections.keyPlayers.creator.heading")}</Heading>
              <VStack as="ul" align="stretch" pl={6} spacing={1}>
                {(t("sections.keyPlayers.creator.items", { returnObjects: true }) as any[]).map((item, idx) => (
                  <Box key={idx} as="li" dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </VStack>

              <Heading as="h3" size="md" mt={4} mb={2} color="orange.600">{t("sections.keyPlayers.wallets.heading")}</Heading>
              <VStack as="ul" align="stretch" pl={6} spacing={1}>
                {(t("sections.keyPlayers.wallets.items", { returnObjects: true }) as any[]).map((item, idx) => (
                  <Box key={idx} as="li" dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </VStack>
            </Box>

            <Divider />

            <Box>
              <Heading as="h2" size="lg" mb={4} color="pink.700">{t("sections.community.heading")}</Heading>
              <Text mb={2} dangerouslySetInnerHTML={{ __html: t("sections.community.intro") }} />
              <VStack as="ul" align="stretch" pl={6} spacing={1}>
                {(t("sections.community.items", { returnObjects: true }) as any[]).map((item, idx) => (
                  <Box key={idx} as="li" dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </VStack>
            </Box>

            <Divider />

            <Box>
              <Heading as="h2" size="lg" mb={4} color="cyan.700">{t("sections.academia.heading")}</Heading>
              <Text mb={4} dangerouslySetInnerHTML={{ __html: t("sections.academia.intro") }} />
              <VStack as="ul" align="stretch" pl={6} spacing={1}>
                {(t("sections.academia.items", { returnObjects: true }) as any[]).map((item, idx) => (
                  <Box key={idx} as="li" dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </VStack>
            </Box>

            <Divider />

            <Box>
              <Heading as="h2" size="lg" mb={4} color="red.700">{t("sections.acceleration.heading")}</Heading>
              <Text mb={2} dangerouslySetInnerHTML={{ __html: t("sections.acceleration.intro") }} />
              
              <Heading as="h3" size="md" mt={2} mb={2} color="red.600">{t("sections.acceleration.onRampsHeading")}</Heading>
              <VStack as="ul" align="stretch" pl={6} spacing={1}>
                {(t("sections.acceleration.onRampsItems", { returnObjects: true }) as any[]).map((item, idx) => (
                  <Box key={idx} as="li" dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </VStack>
              
              <Heading as="h3" size="md" mt={4} mb={2} color="red.600">{t("sections.acceleration.acceleratorsHeading")}</Heading>
              <VStack as="ul" align="stretch" pl={6} spacing={1}>
                {(t("sections.acceleration.acceleratorsItems", { returnObjects: true }) as any[]).map((item, idx) => (
                  <Box key={idx} as="li" dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </VStack>
              
              <Heading as="h3" size="md" mt={4} mb={2} color="red.600">{t("sections.acceleration.promotionHeading")}</Heading>
              <VStack as="ul" align="stretch" pl={6} spacing={1}>
                {(t("sections.acceleration.promotionItems", { returnObjects: true }) as any[]).map((item, idx) => (
                  <Box key={idx} as="li" dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </VStack>
            </Box>

            <Divider />

            <Box>
              <Heading as="h2" size="lg" mb={4} color="green.700">{t("sections.events.heading")}</Heading>
              <Text mb={2} dangerouslySetInnerHTML={{ __html: t("sections.events.intro") }} />
              <VStack as="ul" align="stretch" pl={6} spacing={2}>
                {(t("sections.events.items", { returnObjects: true }) as any[]).map((item, idx) => (
                  <Box key={idx} as="li" dangerouslySetInnerHTML={{ __html: item }} />
                ))}
                <Box as="li"><b>{t("sections.events.upcomingHeading")}</b>
                  <VStack as="ul" pl={6} align="stretch" spacing={1} mt={1}>
                    {(t("sections.events.upcomingItems", { returnObjects: true }) as any[]).map((item, idx) => (
                      <Box key={idx} as="li" dangerouslySetInnerHTML={{ __html: item }} />
                    ))}
                  </VStack>
                </Box>
              </VStack>
            </Box>

            <Divider />

            <Box>
              <Heading as="h2" size="lg" mb={4} color="blue.700">{t("sections.roadAhead.heading")}</Heading>
              <VStack as="ul" align="stretch" pl={6} spacing={1}>
                {(t("sections.roadAhead.items", { returnObjects: true }) as any[]).map((item, idx) => (
                  <Box key={idx} as="li" dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </VStack>
              <Text mt={6} fontStyle="italic" color="gray.600">{t("footer")}</Text>
            </Box>
          </VStack>
        </Container>

        {isMobile ? <FooterMobile /> : <FooterDesktop />}
      </Box>
    </>
  );
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "pura-vida-blog"])),
    },
  };
}
