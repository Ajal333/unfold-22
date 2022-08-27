import Link from "next/link";
import { Button, Navbar, Text } from "@nextui-org/react";
import { useEffect, useState } from "react";

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

  return (
    <>
      <Navbar variant={"floating"} isBordered={true}>
        <Navbar.Brand>
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
            <Button color="primary" auto>
              Connect Wallet
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
