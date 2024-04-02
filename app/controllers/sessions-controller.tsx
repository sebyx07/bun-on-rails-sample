import {SessionsServiceLogin} from "../services/sessions-service-login.ts";
import LoginView from "../views/sessions/login-view.tsx";
import SessionsLayout from "../views/layouts/sessions-layout.tsx";

export default class SessionsController extends ApplicationController {
  async login(_, response){
    const user = new User()
    return response.render(<LoginView user={user}/>)
  }
  async loginPost(request, response ){
    const { params: { email, password} } = request
    const { session, redirectTo, flash, render } = response
    const user = await new SessionsServiceLogin({email, password}).login()

    if(user){
      session.userId = user.id
      flash.notice = "Logged in successfully"
      return redirectTo("/")
    }else{
      flash.notice = "Invalid email or password"
      const user = new User({email})
      return render(<LoginView user={user}/>)
    }
  }

  logout(){

  }
}

SessionsController.layout = SessionsLayout