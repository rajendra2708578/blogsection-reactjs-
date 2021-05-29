import React from 'react'
import img from "./f1.jpg";
import img1 from "./s.jpg";
import img2 from "./t.jpg";
import img3 from "./one.jpg"

const App=()=>{
    return(
        <>
        <section>
    <div class="container">
      <header>
        <h1>Latest on YourDost Blog</h1>
        <p>In this section we are providing the latest update,blog and informative article which may help so do check it out!</p>
      </header>

      <main>
        <div class="singleBlog">
          <img src={img} alt=""></img>
          <div class="blogContent">
            <h3>Psychological Impact of The life during Covid-19<span>Article</span></h3>
            <p>Impact<a href="#">by covid 19</a> | <a href="#">Insight</a></p>
            <a href="#" class="btn">Read More</a>
          </div>
        </div>
        <div class="singleBlog">
          <img src={img1} alt=""></img>
          <div class="blogContent">
            <h3>Choose therapy over pain & Overcome fear <span>Article</span></h3>
            <p>By <a href="#">SUHANI SUMAN</a> | <a href="#">Homepage</a></p>
            <a href="#" class="btn">Read More</a>
          </div>
        </div>
        <div class="singleBlog">
          <img src={img2} alt=""></img>
          <div class="blogContent">
            <h3>Counselors never tell you what to do,They help guide you <span>Article</span></h3>
            <p>6 Ways to distinguish <a href="#">Counselling</a> | <a href="#">Homepage</a></p>
            <a href="#" class="btn">Read More</a>
          </div>
        </div>
        <div class="singleBlog">
          <img src={img3} alt=""></img>
          <div class="blogContent">
            <h3>Support them and be there for them through ther worst time<span>Article</span></h3>
            <p>5 Tips to Encouraged <a href="#">the loved ones</a> | <a href="#">Family and Friends</a></p>
            <a href="#" class="btn">Read More</a>
          </div>
        </div>
      </main>
     <button>Read More Article</button>
    </div>
    
    
    
  </section>

        </>
    );
}
export default App;