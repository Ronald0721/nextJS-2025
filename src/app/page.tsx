import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Next.js with Redux</h1>
      <Link href="/login">Login</Link>
      <br />
      <Link href="/signup">Sign Up</Link>
    </div>
  );
};

export default HomePage;
