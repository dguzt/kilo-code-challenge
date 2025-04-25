import Logo from "@/components/Logo/Logo";

export default function NavBar() {
  return (
    <header className="min-w-screen border-b-2 border-b-gray-100 container mx-auto px-4">
      <div className="flex justify-between py-4">
        <Logo />
      </div>
    </header>
  );
}
