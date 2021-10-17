import { Route } from "react-router";
import CounterContainer from "./containers/CounterContainer";
import PostListPage from "./pages/PostListPage";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <>
      <CounterContainer></CounterContainer>
      <Route path="/" exact component={PostListPage}></Route>
      <Route path="/:id" component={PostPage}></Route>
    </>
  );
}

export default App;
