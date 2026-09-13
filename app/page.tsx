import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Image src="/test.jpg" alt="" width={500} height={755} priority />
    </div>
  );
}
