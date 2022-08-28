import Link from "next/link";
import { useRouter } from "next/router";
import { Button, Navbar, Text } from "@nextui-org/react";
import { useEffect, useState } from "react";
import routes from "../../../routes";
import useWeb3Provider from "../../../../context/Web3Provider";
import { LogoSvg } from "../../../../assets";

const NavbarComponent = () => {
  const [bg, setBg] = useState<string>("");
  const [navbarExpanded, setNavbarExpanded] = useState<boolean>(false);
  const [accountText, setAccountText] = useState<string>();

  useEffect(() => {
    addEventListener<"scroll">("scroll", handleScroll);

    return () =>
      removeEventListener<"scroll">("scroll", () => {
        return;
      });
  }, []);

  const handleScroll: EventListener = () => {
    const top = window.scrollY;
    // filter backdrop-blur-md border-b-[0.5px] border-[#dadada]
    if (top > 100) setBg("bg-white");
    else setBg("");
  };

  const isFreelancer = true;

  return (
    <>
      <Navbar variant={"floating"} isBordered={true}>
        <Navbar.Brand>
          <img src={LogoSvg} alt="logo" />
          <Text b color="inherit">
            SolHire
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs">
          <Navbar.Link isActive href="#b">
            Find Works
          </Navbar.Link>
          <Navbar.Link href="#x">My Jobs</Navbar.Link>
          <Navbar.Link href="#a">Reports</Navbar.Link>
          <Navbar.Link href="#d">Messages</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Item>
            <Button
              color={account ? "secondary" : "primary"}
              onClick={account ? disconnectWallet : connectWallet}
              auto
            >
              {account ? "Disconnect" : "Connect"} Wallet
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
