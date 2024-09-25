import news_feed from './sample_news_stories.json';
import Story from './components/Story';
import './App.css';

function App() {

  // Get stories from news feed
  const stories = news_feed.results;

  const contents = stories.map( (story, index) => {
    return(
      <Story 
        key={index} 
        title={story.title} 
        link={story.link} 
        creator={story.creator} 
        image={story.image_url !== null ? story.image_url:"https://placehold.co/600x400?text=News+Story"} 
        description={story.description}
        />
    )
  })

  return (
    <div className="App">
      <h1>News Feed</h1>
      {contents}
    </div>
  );
}

export default App;
