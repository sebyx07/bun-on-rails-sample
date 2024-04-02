import LoginForm from "./login-view/login-form.tsx";

export default function LoginView({user}) {
  return(
    <div>
      <h1>Login</h1>
      <LoginForm user={user}/>
    </div>
  )
}