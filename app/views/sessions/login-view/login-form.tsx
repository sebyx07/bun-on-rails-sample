import {Styled} from "../../styled.tsx";

function LoginForm({user}) {
  return (
    <form action="/sessions/login" method="post">
      <input type="email" name="email" placeholder="email" value={user.email}/>
      <input type="password" name="password" placeholder="password"/>
      <input type="submit" value="Login"/>
    </form>
  )
}

export default Styled(LoginForm)`
  input {
    display: block;
    margin: 10px;
  }
`;