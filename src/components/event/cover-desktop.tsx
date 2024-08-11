import { Grid, GridItem, useTheme } from "@chakra-ui/react";

import useColumnsWidth from "@/utils/hooks/useGridColumns";
import Image from "next/image";

type CoverDesktopProps = {
  coverGraphicLeft: string;
  coverGraphicRight: string;
};

const CoverDesktop = ({
  coverGraphicLeft,
  coverGraphicRight,
}: CoverDesktopProps) => {
  const columnsWidth = useColumnsWidth();
  const theme = useTheme();

  return (
    <Grid
      templateColumns={`repeat(12, ${columnsWidth})`}
      gap={theme.spacing.desktop.gridGap}
      h={636}
      w="100%"
      justifyContent="center"
      alignItems="center"
      py="48px"
    >
      <GridItem colSpan={7}>
        <Image
          width={659}
          height={352}
          src={`../assets/${coverGraphicLeft}`}
          alt="Eth Pura Vida Cover desktop"
        />
      </GridItem>
      <GridItem colSpan={4} colStart={9}>
        <Image
          width={359.72}
          src={`../assets/${coverGraphicRight}`}
          height={540}
          alt="Event Graphic Right"
        />
      </GridItem>
    </Grid>
  );
};

export default CoverDesktop;
