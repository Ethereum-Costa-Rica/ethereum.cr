import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Events = () => {
  const { push } = useRouter();

  useEffect(() => {
    push("/events/eth-pura-vida");
  }, []);

  return <span>Redirecting</span>;
};
export default Events;
