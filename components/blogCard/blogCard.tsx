import Link from "next/link";
import classes from "./blogCard.module.css";

const BlogCard = ({
  id,
  title,
  description,
}: {
  id: number;
  title: string;
  description: string;
}) => {
  console.log(`blogs/${id}`);
  
  return (
    <Link href={`/blogs/${id}`} passHref>
      <div className="flex flex-col rounded-xl shadow-lg border-[1px] border-green-100 hover:border-[#59a0a1] w-80">
        <div className="flex justify-between items-center p-2">
          {/* <div className="flex gap-2">
            <button className={classes.defaultButton}>Details</button>
          </div> */}
          <h1 className="w-[50%] border-b-[1px] border-solid border-[#272b2b] p-2">
            {title}
          </h1>
        </div>
        <p className="p-4">{description}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
