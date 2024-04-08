import BlogCard from "./blogCard/blogCard";
import {
  useGetDataQuery
} from "../redux/api/apiSlice";

const BlogList = ({ featuredBlogs }: { featuredBlogs: boolean }) => {
  const {
    data,
    isLoading,
    isError,
    error,
    isUnInitialized,
  } = useGetDataQuery();
  // const { data, isLoading, isError, error } = useGetFeaturedDataQuery();

  if (isLoading || isUnInitialized) return <p>Loading blogs...</p>;
  if (isError) return <div>{error.toString()}</div>;

  return (
    <>
      {!featuredBlogs ? (
        <>
          <section className="flex flex-col p-4 gap-4 ">
            {data.record.map(
              (post: { id: number; title: string; description: string }) => (
                <>
                  <BlogCard
                    id={post.id}
                    key={post.id}
                    title={post.title}
                    description={post.description}
                  />
                </>
              )
            )}
          </section>
        </>
      ) : (
        <section className="flex flex-col p-4 gap-4 ">
          {data.record.map(
            (post: {
              id: number;
              title: string;
              description: string;
              isFeatured: boolean;
            }) => {
              if (post.isFeatured == true) {
                return(
                <>
                {console.log(post.id)}
                <BlogCard
                  id={post.id}
                  key={post.id}
                  title={post.title}
                  description={post.description}
                />
              </>
)
              // } (
              //   <>
              //     {console.log(post.isFeatured)}
              //     <BlogCard
              //       id={post.id}
              //       key={post.id}
              //       title={post.title}
              //       description={post.description}
              //     />
              //   </>
              // ) : (
              //   ""
              // );
            }
})}
          {/* {data.map((post: {id: number, title: string, description: string}) => (
            <>
              <BlogCard
                id={post.id}
                key={post.id}
                title={post.title}
                description={post.description}
              />
            </>
          ))} */}
        </section>
      )}
    </>
  );
};

export default BlogList;
