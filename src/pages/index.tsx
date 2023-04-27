import { Card } from "@/components/atoms/card";
import { Paginate } from "@/components/atoms/paginate";
import { Homepage } from "@/components/moleculs/Homepage";
import Image from "next/image";
import { useSelector } from "react-redux";

export default function Home() {
  return (
    <Homepage>
      <div>
        <div className="m-4">
          <span>Hi {"User"}, You dont have any schedule today</span>
          <div className="mx-[5%] w-full">
            <Paginate />
          </div>
        </div>
      </div>
    </Homepage>
  )
}
