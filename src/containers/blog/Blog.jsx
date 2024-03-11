import "./Blog.css";
import { Article } from "../../components";
import { blog1, blog2, blog3, blog4, blog5 } from "./imports.js";

export default function Blog() {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            imageUrl={blog1}
            date="March 11, 2024"
            title="GPT-3 and OpenAI is the future. Let us explore how it is?"
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            imageUrl={blog2}
            date="March 11, 2024"
            title="GPT-3 and OpenAI is the future. Let us explore how it is?"
          />
          <Article
            imageUrl={blog3}
            date="March 11, 2024"
            title="GPT-3 and OpenAI is the future. Let us explore how it is?"
          />
          <Article
            imageUrl={blog4}
            date="March 11, 2024"
            title="GPT-3 and OpenAI is the future. Let us explore how it is?"
          />
          <Article
            imageUrl={blog5}
            date="March 11, 2024"
            title="GPT-3 and OpenAI is the future. Let us explore how it is?"
          />
        </div>
      </div>
    </div>
  );
}
