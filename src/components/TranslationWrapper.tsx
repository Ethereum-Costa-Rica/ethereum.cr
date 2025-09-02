import { useTranslation } from "next-i18next";
import { ReactNode } from "react";

interface TranslationWrapperProps {
  children: ReactNode;
  fallback?: ReactNode;
}

const TranslationWrapper = ({ children, fallback = null }: TranslationWrapperProps) => {
  const { ready } = useTranslation();

  if (!ready) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
};

export default TranslationWrapper;
