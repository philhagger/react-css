import React from 'react';
import { Link } from 'react-router-dom';

import Story from '../../../components/Story/Story';
import BackgroundVideo from '../../../components/BackgroundVideo/BackgroundVideo';

// import person1 from '../../../img/nat-8.jpg';
// import person1 from '../../../img/people/phil-arnold.jpg';
// import person2 from '../../../img/nat-9.jpg';
// import person2 from '../../../img/people/IMG_2118.JPG';

import herefordVideo from '../../../img/hereford/hereford.mp4';

import './PodcastBlock.scss';

class PodcastBlock extends React.Component {
  state = {
    stories: []
  };
  componentDidMount() {
    fetch('./stories.json')
      .then(response => response.json())
      .then(json => this.setState({ stories: json.stories }));
  }
  render() {
    return (
      <section className="stories-block" id="podcasts">
        <BackgroundVideo videoMp4={herefordVideo} />
        <div className="u-center-text u-margin-bottom-large">
          <h2 className="heading-secondary">Our latest messages</h2>
        </div>

        {this.state.stories.map(story => (
          <div className="row" key={story.id}>
            <Story heading={story.title} person={{ name: story.speaker.name, img: story.speaker.imageURL }}>
              {story.description}
            </Story>
          </div>
        ))}

        <div className="u-center-text">
          <Link to="/podcasts" className="btn-text">
            Listen to more message &rarr;
          </Link>
          {/* <div className="btn-text">Listen to more messages &rarr;</div> */}
        </div>
      </section>
    );
  }
}

export default PodcastBlock;
