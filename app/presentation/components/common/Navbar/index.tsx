import Link from "next/link";
import { Button, Navbar, Text } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const NavbarComponent = () => {
  const router = useRouter();
  const [bg, setBg] = useState<string>("");
  const [navbarExpanded, setNavbarExpanded] = useState<boolean>(false);
  const [accountText, setAccountText] = useState<string>();
  const [activeLink, setActiveLink] = useState<string>(router?.pathname);

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
    <div className="max-w-[1440px] w-full mx-auto">
      <Navbar variant={"floating"} isBordered={true}>
        <Navbar.Brand>
          <Text b color="inherit">
            SolHire
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs">
          <Navbar.Link isActive={router?.pathname === "/"} href="/">
            Find Works
          </Navbar.Link>
          <Navbar.Link isActive={router?.pathname === "/myJobs"} href="/myJobs">
            My Jobs
          </Navbar.Link>
          <Navbar.Link isActive={router?.pathname === "/reports"} href="#a">
            Reports
          </Navbar.Link>
          <Navbar.Link isActive={router?.pathname === "/messages"} href="#d">
            Messages
          </Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Item>
            <Button color="primary" auto>
              Connect Wallet
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
