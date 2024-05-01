import { posts } from "./data";
const Posts = () => (
  <div className="flex sm:flex-row flex-col py-8 justify-center items-center w-full bg-[#e2e8f0] sm:gap-24 gap-8 px-8">
    <h2 className="text-[#577790] sm:text-[40px] font-playfair text-[32px] font-semibold leading-[120%] mt-4 ">
      Posts
    </h2>
    <div className="flex flex-col gap-8">
      {posts.map((post) => (
        <div key={post.id} className="flex flex-col ">
          <a href={post.link} download={post.link}>
            <h4 className="text-[#576e80] sm:text-[32px] font-playfair text-[24px] font-semibold leading-[120%] sm:mt-4 mt-0">
              {post.title}
            </h4>
          </a>
          <p className="text-[#495d6e92] font-sansPro text-[16px] font-normal leading-[165%] mt-2 max-w-[900px]">
            {post.summary}
          </p>
          <div className="flex flex-row gap-4">
            <p className="text-[#495d6e61] font-sansPro text-[14px] font-normal leading-[165%] mt-2 max-w-[900px]">
              {post.date}
            </p>
            <p className="text-[#495d6e61] font-sansPro text-[14px] font-normal leading-[165%] mt-2 max-w-[900px]">
              .
            </p>
            <p className="text-[#495d6e61] font-sansPro text-[14px] font-normal leading-[165%] mt-2 max-w-[900px]">
              {post.time} min read
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Posts;
