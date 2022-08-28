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
  const router = useRouter();

  const { account, connectWallet, disconnectWallet } = useWeb3Provider();

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
          <img src={"/logo.svg"} alt="logo" className="w-24" />
        </Navbar.Brand>
        {account && (
          <Navbar.Content hideIn="xs">
            {isFreelancer ? (
              <Navbar.Link
                isActive={router.pathname === routes.F_JOBS}
                href={routes.F_JOBS}
              >
                Find Works
              </Navbar.Link>
            ) : (
              <Navbar.Link
                isActive={router.pathname === routes.E_JOBS}
                href={routes.E_JOBS}
              >
                My Jobs
              </Navbar.Link>
            )}
            <Navbar.Link
              isActive={router.pathname === routes.E_REPORTS}
              href={routes.E_REPORTS}
            >
              Reports
            </Navbar.Link>
            <Navbar.Link isActive={router.pathname === "/#d"} href="#d">
              Messages
            </Navbar.Link>
          </Navbar.Content>
        )}
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
