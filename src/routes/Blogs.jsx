import BlogsData from "../assets/blogsdata"
import Blog from "../components/Blog"
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Blogs() {
  const blogs = BlogsData.map((blog) => {
      return (
        <Blog
          key={blog.id}
          delay={blog.id * 0.2}
          className="fade-in-bottom"
          {...blog}
        />
      );
    });
  return (
    <>
      <Header />
      <section className="blog-container ">
        <h1 className="fade-in-top">My Blogs</h1>
        <p className="fade-in-fwd">
          {" "}
          A collection of my writeups/blogs documenting my findings, journey, and experiences.
        </p>
        <div className="blog-boxes">{blogs}</div>
      </section>
      {/* <Footer /> */}
    </>
  );
}
