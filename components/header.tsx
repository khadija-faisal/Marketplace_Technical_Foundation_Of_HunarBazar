import Container from "./container";
import Form from "next/form";
import Image from "next/image";
import Link from "next/link";
import CartIcon from "./cartIcon";
import { ShoppingBasket } from "lucide-react";
import { currentUser } from "@clerk/nextjs/server";
import { ClerkLoaded, SignedIn, UserButton, SignInButton } from "@clerk/nextjs";
import { User } from "lucide-react";

const Header = async () => {
  const user = await currentUser();

  return (
    <header className="py-2 bg-white border-b space-y-2 sm:space-y-0 font-montserrat sticky top-0 z-50 border-gray-400">
      <Container className="flex items-center gap-7 justify-between ">
        <Link href={"/"}>
          <Image src={"/logo.png"} alt="Logo" width={250} height={100} />{" "}
        </Link>

        <Form
          action={"/search"}
          className=" w-[30%] xl:w-[40%] hidden lg:flex "
        >
          <input
            type="text"
            name="query"
            placeholder="FIND YOUR FAVOURITES"
            className=" w-full border border-gray-300  rounded-lg px-4 py-3  "
          />
        </Form>

        <div className="flex items-center gap-3">
          <CartIcon />
          <ClerkLoaded>
            <SignedIn>
              <Link
                href={"/orders"}
                className="  flex font-montserrat items-center text-sm gap-2 border hoverEffect border-gray-300 px-2 py-1 rounded-md shadow-md hover:shadow-none"
              >
                <ShoppingBasket className="h-8" />
                <span className="block md:hidden ">0</span>
                <div className="item-center hidden md:flex flex-col">
                  <p className="text-xs">
                    <span>0</span> items
                  </p>
                  <p className="font-semibold">Orders</p>
                </div>
              </Link>
            </SignedIn>
            {user ? (
              <div className=" flex font-montserrat items-center text-sm gap-2 border hoverEffect border-gray-300 px-2 py-1 rounded-md shadow-md hover:shadow-none">
                <UserButton />
                <div className="item-center hidden  md:flex flex-col">
                  <p className="text-xs">Welcome Back</p>
                  <p className="font-semibold text-xs md:text-sm">
                    {user?.fullName}
                  </p>
                </div>
              </div>
            ) : (
              <SignInButton mode="modal">
                <div className="flex font-montserrat items-center text-sm gap-2 border hoverEffect border-gray-300 px-2 py-1 rounded-md shadow-md hover:shadow-none">
                  <User className="h-8" />
                  <div className="item-center hidden md:flex flex-col">
                    <p className="text-xs">Account</p>
                    <p className="font-semibold">Login</p>
                  </div>
                </div>
              </SignInButton>
            )}
          </ClerkLoaded>
        </div>
      </Container>
      <Form action={"/search"} className=" flex-1 px-7 lg:hidden ">
        <input
          type="text"
          name="query"
          placeholder="FIND YOUR FAVOURITES"
          className=" w-full border border-gray-300 outline-none rounded-lg px-4 py-3  "
        />
      </Form>
    </header>
  );
};

export default Header;
