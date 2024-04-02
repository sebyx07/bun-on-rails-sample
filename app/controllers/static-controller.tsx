import HomeView from "../views/static/home-view.tsx";

export default class StaticController extends ApplicationController {
  async home(_, response){
    return response.render(<HomeView />)
  }
}