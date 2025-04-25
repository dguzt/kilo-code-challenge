import Image from "next/image";

type LogoProps = {
  width?: number;
};

export default function Logo({ width = 30}: LogoProps) {
  return (
    <div className="flex items-center space-x-4">
      <Image src="/logo.svg" alt="logo" width={width} height={width} />
      <span className="text-black font-semibold text-base">The Enchantments</span>
    </div>
  );
}
