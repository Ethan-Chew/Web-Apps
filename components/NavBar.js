import { Link } from "@chakra-ui/react";
import Image from "next/image";

export default function NavBar() {
    return (
        <nav style={{ display: "flex", alignItems: "left", padding: "0 30px" }}>
            <Link href="https://web-apps.ethanchew.me" rel="noreferrer noopener" target="_blank" sx={{ mr: "auto" }}>
                <Image src="/public/img/Icon.png" alt="Icon" width={100} height={100} />
            </Link>
        </nav>
    );
}