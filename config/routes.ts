import StaticController from "../app/controllers/static-controller.tsx";
import SessionsController from "../app/controllers/sessions-controller.tsx";

export default function Routes(draw){
  draw.root(StaticController, "home")

  draw.scope("/session", (session) => {
    session.get("/login", SessionsController, "login")
    session.post("/login", SessionsController, "loginPost")
    session.delete("/login", SessionsController, "logout")
  })
}