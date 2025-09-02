import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Text,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { MdOutlineKeyboardArrowDown, MdOutlineLanguage } from "react-icons/md";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const router = useRouter();

  const changeLanguage = (lng: string) => {
    // const { pathname, asPath, query } = router;
    // router.push({ pathname, query }, asPath, { locale: lng });
    i18n.changeLanguage(lng);
  };

  return (
    <Menu>
      <MenuButton as={Button} p={1} rightIcon={<MdOutlineKeyboardArrowDown />}>
        <Flex direction="row" justifyContent="center" alignItems="center">
          <Icon w="24px" h="24px" as={MdOutlineLanguage} ml="10px" />
          <Text variant="normal-text-regular" ml={5} textTransform="capitalize">
            {i18n.language}
          </Text>
        </Flex>
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => changeLanguage("en")}>English</MenuItem>
        <MenuItem onClick={() => changeLanguage("es")}>Español</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default LanguageSwitcher;
