import { useRouter } from "next/router";
import BlogDetails from "../../components/blogDetails/blogDetails";
import { useGetDataQuery } from "../../redux/api/apiSlice";
import BreadCrumb from "../../components/UI/breadCrumbComponent";

const Blog = () => {
  const router = useRouter();
  const id = router.query.slug;

  const { data, isLoading, isSuccess, isError, error } = useGetDataQuery();

  if (isLoading) return <p className="text-center mt-12">Loading...</p>;
  if (isError) return <div>{error.toString()}</div>;
  const filteredData = data.record.filter((post: any) => post.id == id);

  const breaditems: { name: string; path?: string }[] = [
    {
      name: "home",
      path: "/",
    },
    {
      name: "blogs",
      path: "/blogs",
    },
    {
      name: `${filteredData[0]?.title}`,
    },
  ];

  return (
    <div className="p-8">
      <BreadCrumb breaditems={breaditems} />
      {filteredData.map((post: any) => (
        <>
          <BlogDetails
            title={post.title}
            description={post.description}
            author={post.author}
            date={post.date_created}
            content={post.content}
            image={post.image}
          />
        </>
      ))}
    </div>
  );
};

export default Blog;
