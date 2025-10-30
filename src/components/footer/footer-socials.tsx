import { Flex } from "@chakra-ui/react";
import Link from "next/link";

import Image from "next/image";

export const FooterSocials = (props: any) => {
  return (
    <Flex
      direction="row"
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
      columnGap="1em"
      rowGap="0.75em"
      {...props}
    >
      <Link href="https://x.com/EthereumCR" target="_blank">
        <Image
          src="/assets/x-icon.svg"
          width={64}
          height={64}
          alt="X icon"
          style={{ width: "4em", height: "4em" }}
        />
      </Link>
      <Link
        href="https://www.facebook.com/profile.php?id=100095125751451"
        target="_blank"
      >
        <Image
          src="/assets/facebook-icon.svg"
          width={64}
          height={64}
          alt="Facebook icon"
          style={{ width: "4em", height: "4em" }}
        />
      </Link>

      <Link
        href="https://www.linkedin.com/company/ethereum-costa-rica"
        target="_blank"
      >
        <Image
          src="/assets/linkedin-icon.svg"
          width={64}
          height={64}
          alt="Linkedin icon"
          style={{ width: "4em", height: "4em" }}
        />
      </Link>
      <Link href="https://www.meetup.com/es-ES/ethereumcr/" target="_blank">
        <Image
          src="/assets/meetup-icon.svg"
          width={64}
          height={64}
          alt="Meetup icon"
          style={{ width: "4em", height: "4em" }}
        />
      </Link>
    </Flex>
  );
};

export default FooterSocials;
