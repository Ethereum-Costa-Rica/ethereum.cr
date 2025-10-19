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
import NavBarMobile from "@/components/navbar/nav-bar-mobile";
import NavBarDesktop from "@/components/navbar/nav-bar-desktop";
import FooterMobile from "@/components/footer/footer-mobile";
import FooterDesktop from "@/components/footer/footer-desktop";
import { ETH_CR_LOGO, WHITE_BG_COLOR } from "@/constants/navbar";
import { MOBILE_MEDIA_QUERY } from "@/constants/app";

export default function PuraVidaEcosystem() {
  const [isMobile] = useMediaQuery(MOBILE_MEDIA_QUERY);

  return (
    <>
      <Head>
        <title>The Pura Vida Web3 Ecosystem, 2025</title>
        <meta
          name="description"
          content="Overview of Costa Rica's Web3 ecosystem – regulation, talent, clean energy, and key players shaping the future of Ethereum & blockchain in Costa Rica."
        />
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
            {/* Hero */}
            <Box textAlign="center" mt={20}>
              <Image
                src="/assets/blog/blog-1.png"
                alt="Blog "
                maxH="260px"
                mx="auto"
                mb={6}
              />
              <Heading as="h1" size="2xl" color="blue.700" mb={2}>
                The Pura Vida Web3 Ecosystem, 2025
              </Heading>
              <Text color="gray.600">
                <b>Authors:</b> EM, Jaf & 0xdmrk · {" "}
                <Link href="https://www.linkedin.com/in/esteban-murcia-24887510b" isExternal color="blue.500">
                  LinkedIn - Esteban Murcia
                </Link>{" "}
                · {" "}
                <Link href="https://www.linkedin.com/in/jafettsandi/" isExternal color="blue.500">
                  LinkedIn - Jafet T. Sandi
                </Link>{" "}
                · {" "}
                <Link href="https://x.com/0xDmrk" isExternal color="blue.500">
                  X - 0xDmrk
                </Link>
              </Text>
            </Box>

            <Divider />

            {/* TL;DR */}
            <Box>
              <Heading as="h2" size="lg" mb={4} color="green.700">TL;DR</Heading>
              <VStack as="ul" align="stretch" pl={6} spacing={2}>
                <Box as="li">
                  <b>National rail for Web3:</b> Nationwide instant payments via <b>SINPE Móvil</b> are mainstream (≈76% of adults). The Central Bank-backed <b>Financial Innovation Center (CIF)</b> gives fintechs a compliant path to integrate crypto.
                </Box>
                <Box as="li">
                  <b>Pragmatic rules:</b> Crypto is permitted by private agreement (not legal tender). In 2025, congress advanced asset registration, the state-owned National Bank launched a Bitcoin ETF feeder, and the electoral authority (<b>TSE</b>) approved controlled crypto donations.
                </Box>
                <Box as="li">
                  <b>Clean energy advantage:</b> Over 99% renewable power supply (2024) enables greener mining, infrastructure, and data ops.
                </Box>
                <Box as="li">
                  <b>Soft landing for capital and talent:</b> <Link href="https://investincr.com" isExternal color="blue.500">PROCOMER</Link> and <Link href="https://cinde.org" isExternal color="blue.500">CINDE</Link> are globally recognized FDI enablers; Digital Nomad Law attracts global builders with tax and residency perks; top English proficiency in Central America.
                </Box>
                <Box as="li">
                  <b>Adoption & talent pipeline:</b> Circular economy payments in the <Link href="https://map.bitcoinjungle.app" isExternal color="blue.500">Bitcoin Jungle</Link> corridor; growing developer density through <Link href="https://ethereum.cr" isExternal color="blue.500">ETH Pura Vida</Link> hackathons and TicoBlockchain forums.
                </Box>
              </VStack>
            </Box>

            <Divider />

            {/* Macro & Local Roots */}
            <Box>
              <Heading as="h2" size="lg" mb={4} color="blue.700">Macro & Local Roots: Pura Vida Web3 Talent Hub</Heading>
              <Text mb={2}>Costa Rica is <i>Web3-ready</i>: high internet use, near-universal mobile, and a ubiquitous instant payments rail (<b>SINPE Móvil</b>) that already trains users on wallet-like habits. A pragmatic, non-prohibition stance from the Central Bank keeps the door open while rules mature.</Text>
              <VStack as="ul" align="stretch" pl={6} spacing={1} mb={2}>
                <Box as="li"><b>Instant payments:</b> SINPE Móvil active users reached ≈76% of adults by <Link href="https://www.notion.so/28d4e4c355ae806990e5cfaf804219f8?pvs=25" isExternal color="blue.500">2024</Link>.</Box>
                <Box as="li"><b>Clean energy narrative:</b> Small hydro plants have hosted mining since 2021–22, linking crypto with <Link href="https://www.reuters.com/technology/costa-rica-hydro-plant-gets-new-lease-life-crypto-mining-2022-01-11/" isExternal color="blue.500">surplus renewables</Link>.</Box>
                <Box as="li"><b>Open, service-driven economy:</b> <Link href="https://investincr.com" isExternal color="blue.500">PROCOMER</Link> positions Costa Rica as a digital services hub helpful for global Web3 teams.</Box>
                <Box as="li"><b>Tourism + expats:</b> $5B tourism industry intersects with crypto; tourists and digital nomads pay in <Link href="https://www.bitcoinjungle.app/" isExternal color="blue.500">BTC/ETH</Link> in surf towns and eco destinations.</Box>
                <Box as="li"><b>Regional bridge:</b> ≈5M population, stable democracy, high HDI, and bilingual talent make it a credible LATAM node for Ethereum.</Box>
              </VStack>
            </Box>

            <Divider />

            {/* From pandemic era to hands-on builders */}
            <Box>
              <Heading as="h2" size="lg" mb={4} color="purple.700">From pandemic era to hands-on builders</Heading>
              <VStack as="ul" align="stretch" pl={6} spacing={2}>
                <Box as="li"><b>2020:</b> ETH CR launched by <Link href="https://www.linkedin.com/in/jafettsandi/" isExternal color="blue.500">Jaf (EF)</Link> and <Link href="https://www.linkedin.com/in/ottomorac/" isExternal color="blue.500">Otto (PrivadoID)</Link>; inaugural gathering featured Santiago Siri (Democracy Earth, Proof of Humanity), setting an early civic tech and public goods tone.</Box>
                <Box as="li"><b>2022:</b> <Link href="https://criptocantina.org/" isExternal color="blue.500">Crypto Cantines</Link> began weekly meetups shifting focus to builders (tooling, L2s, infra).</Box>
                <Box as="li"><b>Sept 2022:</b> ETH CR founders and <Link href="https://www.linkedin.com/in/andyguzmantoledo/" isExternal color="blue.500">Andy Guzman (EF)</Link> hosted a Merge celebration aligned with the <Link href="https://ethereum.org/es/roadmap/merge" isExternal color="blue.500">global Ethereum Merge</Link>.</Box>
                <Box as="li"><b>2023:</b> Ethereum Costa Rica Day at Texas Tech University; speakers from Nethermind, EF, Venus Protocol, ETH Latam.</Box>
                <Box as="li"><b>2024:</b> ETH Pura Vida expanded into a week of hackathons, university activations, L2 sessions, culminating in a 200+ person conference.</Box>
              </VStack>
            </Box>

            <Divider />

            {/* Policy & Regulatory Landscape */}
            <Box>
              <Heading as="h2" size="lg" mb={4} color="teal.700">Policy & Regulatory Landscape</Heading>
              <Text mb={2}>Costa Rica’s regulatory approach is neutral and permissive, with growing clarity:</Text>
              <VStack as="ul" align="stretch" pl={6} spacing={1} mb={2}>
                <Box as="li"><b>Legal status:</b> Crypto is not legal tender, but ownership and use are allowed under Central Bank (BCCR) guidance.</Box>
                <Box as="li"><b>Tax:</b> Classified as virtual/intangible assets (2023); returns taxed under existing capital gains and income rules.</Box>
                <Box as="li"><b>Regulators:</b>
                  <VStack as="ul" pl={6} align="stretch" spacing={1} mt={1}>
                    <Box as="li"><b>BCCR</b> – payments policy and public guidance</Box>
                    <Box as="li"><b>SUGEF</b> – registration and supervision of VASPs</Box>
                    <Box as="li"><b>FIU</b> – AML suspicious transaction reporting</Box>
                  </VStack>
                </Box>
              </VStack>
              <Text fontWeight="semibold" mb={2}>Milestones:</Text>
              <VStack as="ul" align="stretch" pl={6} spacing={1}>
                <Box as="li"><b>BN Fondos (2025):</b> Bitcoin ETF — first bank-distributed crypto investment vehicle.</Box>
                <Box as="li"><b>2025 reforms:</b> Defined “virtual assets” and required exchanges, brokers, and custodial wallets to register with SUGEF and follow KYC/AML, aligning with FATF.</Box>
              </VStack>
            </Box>

            <Divider />

            {/* Key Players & Sectors */}
            <Box>
              <Heading as="h2" size="lg" mb={4} color="orange.700">Key Players & Sectors</Heading>

              <Heading as="h3" size="md" mt={4} mb={2} color="orange.600">Payments & Merchant Rails</Heading>
              <VStack as="ul" align="stretch" pl={6} spacing={1}>
                <Box as="li"><Link href="https://coinpay.cr" isExternal color="blue.500">CoinPay</Link>: exchange, cards, remittance & merchant tools.</Box>
                <Box as="li"><Link href="https://tilopay.com" isExternal color="blue.500">Tilopay</Link>: multi-rail checkout with e-commerce plugins.</Box>
                <Box as="li"><Link href="https://nimiq.com" isExternal color="blue.500">Nimiq</Link> (OASIS & Pay): non-custodial payments; building a SINPE bridge for CRC/EUR swaps.</Box>
                <Box as="li"><Link href="https://www.bitcoinjungle.app" isExternal color="blue.500">Bitcoin Jungle</Link> (wallet + merchant map): live circular-economy pilot on Costa Rica’s Pacific South.</Box>
              </VStack>

              <Heading as="h3" size="md" mt={4} mb={2} color="orange.600">Liquidity, Trading & On/Off-Ramps</Heading>
              <VStack as="ul" align="stretch" pl={6} spacing={1}>
                <Box as="li"><Link href="https://xypher.io" isExternal color="blue.500">Xypher</Link>: alerts/market monitoring (CR-founded).</Box>
                <Box as="li"><Link href="https://coinpay.cr" isExternal color="blue.500">CoinPay</Link>: also provides exchange/liquidity desks.</Box>
              </VStack>

              <Heading as="h3" size="md" mt={4} mb={2} color="orange.600">Infrastructure, Dev Tooling & Validators</Heading>
              <VStack as="ul" align="stretch" pl={6} spacing={1}>
                <Box as="li"><Link href="https://edenia.com" isExternal color="blue.500">Edenia</Link>: Web3 & AI infra/dev; validator.</Box>
                <Box as="li"><Link href="https://github.com/hyperledger-labs/convector" isExternal color="blue.500">WorldSibu</Link>: OSS tooling for enterprise chains (Hyperledger Labs Convector).</Box>
              </VStack>

              <Heading as="h3" size="md" mt={4} mb={2} color="orange.600">ReFi, Real-world Assets & Agri supply</Heading>
              <VStack as="ul" align="stretch" pl={6} spacing={1}>
                <Box as="li"><Link href="https://www.cofiblocks.com" isExternal color="blue.500">CoFi Blocks</Link>: coffee co-op on Starknet; NFTs & on-chain commerce.</Box>
              </VStack>

              <Heading as="h3" size="md" mt={4} mb={2} color="orange.600">Creator Economy, Ticketing & Fan Tech</Heading>
              <VStack as="ul" align="stretch" pl={6} spacing={1}>
                <Box as="li"><Link href="https://enigma.art" isExternal color="blue.500">Enigma.art</Link>: entertainment tech stack (tickets, wallet, marketplace).</Box>
                <Box as="li"><Link href="https://hallos.io" isExternal color="blue.500">Hallos</Link>: NFT ticketing platform (CR-founded).</Box>
              </VStack>

              <Heading as="h3" size="md" mt={4} mb={2} color="orange.600">Wallets, Currencies & Stable value experiments</Heading>
              <VStack as="ul" align="stretch" pl={6} spacing={1}>
                <Box as="li"><Link href="https://www.diviproject.org" isExternal color="blue.500">Divi Project/Wallet</Link>: PoS chain & wallet brand with CR footprint.</Box>
                <Box as="li"><Link href="https://www.nacion.com/tecnologia/innovaciones/lo-que-necesita-saber-de-vicu-la-nueva/USMIKOU56FENFBDBFIAEC4JZBM/story/" isExternal color="blue.500">VICU</Link>: CR-launched USD-pegged stablecoin pilot.</Box>
              </VStack>
            </Box>

            <Divider />

            {/* Community & Talent Pipeline */}
            <Box>
              <Heading as="h2" size="lg" mb={4} color="pink.700">Community & Talent Pipeline</Heading>
              <Text mb={2}>Costa Rica’s Web3 scene blends education, onboarding, and flagship events, accelerating adoption and giving builders repeatable paths from meetup to shipped product.</Text>
              <VStack as="ul" align="stretch" pl={6} spacing={1}>
                <Box as="li"><Link href="https://ethereum.cr" isExternal color="blue.500">Ethereum Costa Rica</Link>: country hub for Ethereum education and builder activation; runs ETH Pura Vida (national conference) and created the Ethereum Developer Pack with <Link href="https://ucenfotec.ac.cr" isExternal color="blue.500">CENFOTEC</Link>.</Box>
                <Box as="li"><Link href="https://asoblockchain.org/" isExternal color="blue.500">AsoBlockchain</Link>: national non-profit convening industry, academia, and builders; co-hosts TicoBlockchain with AsoFintech; meets via CriptoCantina; hosted Hacker House Costa Rica (2025) for Celestia’s Mammothon.</Box>
                <Box as="li"><Link href="https://fintech.cr" isExternal color="blue.500">AsoFinTech</Link>: fintech association aligning Web3 with payments, compliance, and bank rails.</Box>
                <Box as="li"><Link href="https://criptociudad.cr" isExternal color="blue.500">CriptoCiudad</Link>: “Cryptocity” initiative mapping and onboarding crypto-accepting merchants (San José map and more).</Box>
                <Box as="li"><Link href="https://x.com/reficostarica" isExternal color="blue.500">ReFi CostaRica</Link>: local node in the global ReFi movement; climate/impact use cases.</Box>
                <Box as="li"><Link href="https://www.bitcoinjungle.app/" isExternal color="blue.500">Bitcoin Jungle</Link>: community-run, open payments lab in the Pacific South (Dominical/Uvita) with wallet, merchant network, and visitor guide.</Box>
              </VStack>
            </Box>

            <Divider />

            {/* Academia & Institutions */}
            <Box>
              <Heading as="h2" size="lg" mb={4} color="cyan.700">Academia & Institutional Engagement</Heading>
              <Text mb={4}>Web3 is growing in a very real and Pura Vida way: universities add programs, coding groups become communities, banks enter digital assets, and government starts to engage.</Text>
              <VStack as="ul" align="stretch" pl={6} spacing={1}>
                <Box as="li"><Link href="https://ucenfotec.ac.cr" isExternal color="blue.500">CENFOTEC</Link>: partners with ETH CR and ETH Kipu on the “Ethereum Developer Pack” teaching Solidity and dApp development.</Box>
                <Box as="li"><Link href="https://tec.ac.cr" isExternal color="blue.500">Tecnológico de Costa Rica (TEC)</Link>: leads Project Rise, tokenizing real estate (potentially on Ethereum) to revitalize urban areas like San José’s Historic Center.</Box>
                <Box as="li"><Link href="https://dojocoding.io" isExternal color="blue.500">Dojo Coding</Link>: Starknet-focused builder community; learn-by-doing, soft skills, and growth.</Box>
                <Box as="li"><Link href="https://www.bnfondos.com/ETF_Bitcoin" isExternal color="blue.500">Banco Nacional (BN Fondos)</Link>: Bitcoin ETF for regulated exposure.</Box>
                <Box as="li"><Link href="https://www.nacion.com/politica/criptomonedas-en-la-campana-electoral-2026-que/D6U4J64VBVFD3ILTJZC7JGR67I/story" isExternal color="blue.500">Supreme Electoral Tribunal (TSE)</Link>: approved crypto donations for political parties for 2026 under transparency and auditing.</Box>
              </VStack>
            </Box>

            <Divider />

            {/* Acceleration, Investment & Capital Flows */}
            <Box>
              <Heading as="h2" size="lg" mb={4} color="red.700">Acceleration, Investment & Capital Flows</Heading>
              <Text mb={2}>Costa Rica’s capital stack blends a regulated retail on-ramp, active accelerators/VC, and strong investment promotion.</Text>
              <Heading as="h3" size="md" mt={2} mb={2} color="red.600">Regulated on-ramps and liquidity access</Heading>
              <VStack as="ul" align="stretch" pl={6} spacing={1}>
                <Box as="li"><Link href="https://www.bnfondos.com/ETF_Bitcoin" isExternal color="blue.500">BN Fondos</Link> enables compliant crypto investment and clear retail entry points.</Box>
              </VStack>
              <Heading as="h3" size="md" mt={4} mb={2} color="red.600">Accelerators and venture capital</Heading>
              <VStack as="ul" align="stretch" pl={6} spacing={1}>
                <Box as="li"><Link href="https://caricaco.com/en" isExternal color="blue.500">Carícaco</Link>: impact catalyst and venture platform.</Box>
                <Box as="li"><Link href="https://caraov.com" isExternal color="blue.500">Carao Ventures</Link>: early-stage VC for Central America.</Box>
                <Box as="li"><Link href="https://newtopia.vc" isExternal color="blue.500">Newtopia VC</Link>: pre-seed and seed across LATAM.</Box>
                <Box as="li"><Link href="https://500.co" isExternal color="blue.500">500 Global LatAm</Link>: LATAM program; Costa Rican startups admitted in Batch 15.</Box>
                <Box as="li"><Link href="https://startupcostarica.org" isExternal color="blue.500">Startup Costa Rica</Link>: scouting and soft-landing for venture funding and US go-to-market.</Box>
              </VStack>
              <Heading as="h3" size="md" mt={4} mb={2} color="red.600">Investment promotion and soft-landing enablers</Heading>
              <VStack as="ul" align="stretch" pl={6} spacing={1}>
                <Box as="li"><Link href="https://investincr.com" isExternal color="blue.500">PROCOMER</Link>: trade & investment promoter with FDI services and FTZ guidance.</Box>
                <Box as="li"><Link href="https://cinde.org" isExternal color="blue.500">CINDE</Link>: private, non-profit investment promotion agency with a recognized FDI track record.</Box>
              </VStack>
            </Box>

            <Divider />

            {/* Main Events & Momentum */}
            <Box>
              <Heading as="h2" size="lg" mb={4} color="green.700">Main Events & Momentum</Heading>
              <Text mb={2}>Education programs and spaces keep growing, with meetups, talks, and workshops across the country.</Text>
              <VStack as="ul" align="stretch" pl={6} spacing={2}>
                <Box as="li"><b><Link href="https://es.cointelegraph.com/news/costa-rica-blockchain-jungle-event-was-held-with-a-large-public-attendance" isExternal color="blue.500">Blockchain Jungle 2023</Link>:</b> 3,000+ attendees at the National Convention Center; sustainability and real-world cases.</Box>
                <Box as="li"><b><Link href="https://eth-pura-vida.devfolio.co/overview" isExternal color="blue.500">ETH Pura Vida Hackathon 2024</Link>:</b> first large Web3 hackathon; winners delivered an Ethereum microloan system and an agricultural traceability tool.</Box>
                <Box as="li"><b><Link href="https://luma.com/dojocoding-hackathon" isExternal color="blue.500">Dojo Coding “Starknet Hackathon”</Link> 2025:</b> 300+ builders, $32K in prizes, direct paths to funding; stronger dev density and L2 fluency.</Box>
                <Box as="li"><b><Link href="https://www.ticoblockchain.cr/" isExternal color="blue.500">TicoBlockChain</Link>:</b> 300+ professionals from fintech/crypto/Web3; topics included regulation, tokenization, and AI; local teams pitched to investors.</Box>
                <Box as="li"><b>Upcoming 2025:</b>
                  <VStack as="ul" pl={6} align="stretch" spacing={1} mt={1}>
                    <Box as="li"><i><Link href="https://ethereum.cr/events/eth-pura-vida" isExternal color="blue.500">ETH Pura Vida 2025</Link></i> (Nov): talks, workshops, and full-stack hacking at a leading engineering campus.</Box>
                    <Box as="li"><i><Link href="https://www.blockchainjungle.xyz/" isExternal color="blue.500">Blockchain Jungle 2025</Link></i>: target 6,000+ participants and 150+ speakers across AI, blockchain, and future-tech.</Box>
                  </VStack>
                </Box>
              </VStack>
            </Box>

            <Divider />

            {/* Road Ahead */}
            <Box>
              <Heading as="h2" size="lg" mb={4} color="blue.700">Road Ahead</Heading>
              <VStack as="ul" align="stretch" pl={6} spacing={1}>
                <Box as="li">Costa Rica can be the preferred testbed for Web3 pilots due to size and adoption; friendly regulation and ≈75% payment adoption make it attractive for building, incubating, and shipping to LATAM.</Box>
                <Box as="li">Green and credible: existing hydropowered mining capacity and a national sustainability brand make a natural home for ReFi, tokenized conservation, low-carbon validators, and ESG-oriented capital.</Box>
                <Box as="li">Coffee, agriculture, and experience-based tourism can be wrapped as RWAs on Ethereum (pre-financing, loyalty), creating exemplary practical cases from global demand to local producers.</Box>
                <Box as="li">Multinationals already trust Costa Rica for shared services; growing institutional participation (banks, regulators) lowers perceived jurisdictional risk, positioning Costa Rica as the compliance-grade nearshore for global firms’ Web3 adoption.</Box>
              </VStack>
              <Text mt={6} fontStyle="italic" color="gray.600">© 2025 The Pura Vida Ecosystem</Text>
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
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
