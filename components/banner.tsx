import { SALE_QUERYResult } from "@/sanity.types";
import Image from "next/image";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CardContent, Card } from "./ui/card";
import { urlFor } from "@/sanity/lib/image";
const Banner = ({ banners }: { banners: SALE_QUERYResult }) => {
  return (
    <div>
      <Carousel className="w-full my-10">
        <CarouselContent>
          {banners?.map((banner) => (
            <CarouselItem key={banner?._id}>
              <Card>
                <CardContent>
                  <div>
                    <Image
                      className="hidden md:block"
                      src={
                        banner?.Image ? urlFor(banner.Image).url() : ""
                      }
                      alt="banner"
                      width={1930}
                      height={300}
                    />
                    <Image
                      className="block  md:hidden"
                      src={
                        banner?.Image2 ? urlFor(banner.Image2).url() : ""
                      }
                      alt="banner"
                      width={750}
                      height={858}
                    />
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-2" />
        <CarouselNext className="absolute right-2" />
      </Carousel>
    </div>
  );
};

export default Banner;
