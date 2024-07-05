import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function Nav() {
  return (
    <nav className="flex justify-end items-center p-5 gap-1">
      <div>
        <Button className="" variant={"link"} asChild>
          <Link href={"/"}>Home</Link>
        </Button>
      </div>
      <div>
        <Button className="" variant={"link"} asChild>
          <Link href={"/about"}>About</Link>
        </Button>
      </div>
    </nav>
  );
}

export default Nav;
