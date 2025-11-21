import React from 'react';
import { Route } from 'wouter';
import StadionPins from './StadionPins';
import PostSchalkeVsRwe from './posts/schalke-vs-rwe';
import PostDortmundVsRwe from './posts/dortmund-vs-rwe';
import PostWuppertalVsRwe from './posts/wuppertal-vs-rwe';
import PostBocholtVsRwe from './posts/bocholt-vs-rwe';
import PostOberhausenVsRwe from './posts/oberhausen-vs-rwe';
import PostWattenscheidVsRwe from './posts/wattenscheid-vs-rwe';

const PostsRoutes: React.FC = () => (
  <>
  <Route path="/stadion-pins" component={StadionPins} />
  <Route path="/posts/schalke-vs-rwe" component=PostSchalkeVsRwe />
  <Route path="/posts/dortmund-vs-rwe" component=PostDortmundVsRwe />
  <Route path="/posts/wuppertal-vs-rwe" component=PostWuppertalVsRwe />
  <Route path="/posts/bocholt-vs-rwe" component=PostBocholtVsRwe />
  <Route path="/posts/oberhausen-vs-rwe" component=PostOberhausenVsRwe />
  <Route path="/posts/wattenscheid-vs-rwe" component=PostWattenscheidVsRwe />
  </>
);

export default PostsRoutes;
