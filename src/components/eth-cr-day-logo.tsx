import Image from "next/image";
import asset from "../../public/eth-cr-day.svg";

const EthCrDayLogo = () => {
  return (
    <Image height={700} width={1536} src={asset} alt="Ethereum Costa Rica Day" />
  );
};

export default EthCrDayLogo;
