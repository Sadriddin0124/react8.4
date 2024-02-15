import Link from "next/link";

export default function Home() {
  return (
    <div className="w-[100%] h-[100vh] flex items-center justify-center gap-[20px] bg-black" >
      <Link className="px-[15px] py-[8px] bg-violet-500 rounded-md text-white no-underline" href='/home'>Homework 1</Link>
      <Link className="px-[15px] py-[8px] bg-violet-500 rounded-md text-white no-underline" href='/menu'>Homework 2</Link>
    </div>
  );
}
