import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { SignInButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
const CartAccessDenied = () => {
  return (
    <main className="flex justify-center items-center py-10 md:py-32 bg-slate-50 p-4 ">
      <Card className="w-full max-w-lg ">
        <CardHeader className="">
          <div className="flex justify-center items-center">
            <Image src={"/logo.png"} alt="" width={200} height={100} />
          </div>
          <CardTitle className="text-2xl text-mahrron font-montserrat font-bold text-center">
            Welcome Back!
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className=" text-muted-foreground text-center text-lg font-montserrat">
            logIn or SignIn to view Your Cart Items and Checkout. Don&apos;t
            miss your Favourites items{" "}
          </p>

          <SignInButton mode="modal">
            <Button className="w-full" size={"lg"}>
              Sign In / Register
            </Button>
          </SignInButton>
        </CardContent>
      </Card>
    </main>
  );
};
export default CartAccessDenied;
