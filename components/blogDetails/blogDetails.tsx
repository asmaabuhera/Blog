import Image from "next/image";

const BlogDetails = ({
  title,
  description,
  author,
  date ,
  image,
  content,
}: any) => {
  return (
    <div className="w-full px-32 max-lg:px-20 max-md:px-15 max-sm:px-7">
          <h1 className="text-3xl font-bold py-8">{title}</h1>
        <div className="flex flex-col justify-center max-md:flex-col ">
        <Image
          width={1000}
          height={300}
          src={image}
          alt={title}
          className="max-2xl:w-[1000px] max-2xl:h-[400px] max-md:h-[300px] max-sm:h-[200px]"
        ></Image>
          <div className="py-4 text-slate-600">
            <h2 className="text-xl">{description}</h2>
            <div className="flex items-end gap-2">
            <h3 className="text-sm">{author}</h3>
            <h4 className="text-sm">{date }</h4>
            </div>
          </div>
      </div>
      <p className="">{content}</p>
    </div>
  );
};

export default BlogDetails;
