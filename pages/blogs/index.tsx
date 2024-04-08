import BreadCrumb from "../../components/UI/breadCrumbComponent";
import BlogList from "../../components/blogList";

const Blogs = () => {
  const breaditems: { name: string; path?: string }[] = [
    {
      name: "home",
      path: "/",
    },
    {
      name: "blogs",
    },
  ];

  return (
    <div className="flex flex-col items-center p-8 gap-4">
      <BreadCrumb breaditems={breaditems} />
      <h2 className="text-3xl font-semibold">Our Blogs</h2>
      <BlogList featuredBlogs={false} />
    </div>
  );
};

export default Blogs;
