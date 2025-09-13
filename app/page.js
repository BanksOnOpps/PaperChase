import Link from "next/link";

function HomePage() {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <Link
        href="/account/signin"
        className="text-3xl px-4 py-3 bg-brand-primary rounded-lg"
      >
        HOMEPAGE
      </Link>
    </div>
  );
}

export default HomePage;
