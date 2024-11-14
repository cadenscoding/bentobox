
import illustrationFiveStars from './assets/illustration-five-stars.webp';
import illustrationMultiplePlatforms from './assets/illustration-multiple-platforms.webp';
import illustrationConsistentSchedule from './assets/illustration-consistent-schedule.webp';
import illustrationGrowFollowers from './assets/illustration-grow-followers.webp';
import illustrationSchedulePosts from './assets/illustration-schedule-posts.webp';
import illustrationAudienceGrowth from './assets/illustration-audience-growth.webp';
import illustrationCreatePost from './assets/illustration-create-post.webp';
import illustrationAiContent from './assets/illustration-ai-content.webp';



import './App.css'

function App() {
  

  return (
    <>
    <div className="gridcontainer">
  <div className="boxone item">
    <div className="headertext">
    <h2>Social Media</h2> 
      </div>
      <div className="secondheader">
      <h2 className="tenbold">10x</h2> 
      <h2 className="italics">Faster</h2>
      </div>
      <div className="thirdheader">
      <h2>with AI</h2>
      </div>
      <img src={illustrationFiveStars} alt="Five Stars" />
    <p>Over 4,000 5-star reviews</p>
  </div>
  <div className="boxtwo item">
    <img src={illustrationMultiplePlatforms} alt="Multiple Platforms" />
    <h2>Manage multiple accounts and platforms.</h2>
  </div>
  <div className="boxthree item">
    <h2>Maintain a consistent</h2><h2> posting schedule.</h2>
    <img class="calendar" src={illustrationConsistentSchedule} alt="Consistent Schedule" />
  </div>
  <div className="boxfour item">
    <h2>Schedule to social media.</h2>
    <img src={illustrationSchedulePosts} alt="Schedule Posts" />
    <p>Optimize post timings to publish content at the perfect time for your audience.</p>
  </div>
  <div className="boxfive item">
  <img src={illustrationGrowFollowers} alt="Grow Followers" />
    <h2>Grow followers with non-stop content.</h2>
  </div>
  <div className="boxsix item">
    <h2>{">"}56%</h2>
    <p>Faster audience growth</p>
    <img src={illustrationAudienceGrowth} alt="Audience Growth" />
  </div>
  <div className="boxseven item">
    <h2>Create and schedule content</h2>
    <h2 className="purpleitalic">quicker.</h2>
    <img src={illustrationCreatePost}/>
  </div>
  <div className="boxeight item">
    <h2>Write your content using AI.</h2>
    <img src={illustrationAiContent} />
  </div>
  </div>
    </>
  )
}

export default App
