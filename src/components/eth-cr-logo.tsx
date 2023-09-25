import Image from "next/image";
import asset from "../../public/eth-cr.svg";

const EthCrLogo = () => {
  return (
    <Image height={103} width={180} src={asset} alt="Ethereum Costa Rica" />
  );
};

export default EthCrLogo;
