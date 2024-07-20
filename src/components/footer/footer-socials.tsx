import { Flex } from "@chakra-ui/react";
import Link from "next/link";

import Image from "next/image";

export const FooterSocials = (props: any) => {
  return (
    <Flex
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      {...props}
    >
      <Link href="https://x.com/EthereumCR" target="_blank">
        <Image src="assets/x-icon.svg" width={64} height={64} alt="X icon" />
      </Link>
      <Link
        href="https://www.facebook.com/profile.php?id=100095125751451"
        target="_blank"
      >
        <Image
          src="assets/facebook-icon.svg"
          width={64}
          height={64}
          alt="Facebook icon"
        />
      </Link>

      <Link
        href="https://www.linkedin.com/company/ethereum-costa-rica"
        target="_blank"
      >
        <Image
          src="assets/linkedin-icon.svg"
          width={64}
          height={64}
          alt="Linkedin icon"
        />
      </Link>
      <Link href="https://www.meetup.com/es-ES/ethereumcr/" target="_blank">
        <Image
          src="assets/meetup-icon.svg"
          width={64}
          height={64}
          alt="Meetup icon"
        />
      </Link>
    </Flex>
  );
};

export default FooterSocials;
