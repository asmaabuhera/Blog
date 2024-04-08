import Link from "next/link";
import BlogList from "../components/blogList";

const Home = () => {
  return (
    <main className="flex flex-col items-center mt-4">
      <h1 className="text-3xl p-8 text-center">Welcome to <b>BLOGS</b> where you can express your self! </h1>
      <h2 className="text-2xl p-4 font-semibold">Featured Posts </h2>
      <BlogList featuredBlogs={true}/>
      <Link href="/blogs" className="text-xl underline hover:font-bold text-[#59a0a1]">See All Blogs </Link>
    </main>
    
  );
};
export default Home;
