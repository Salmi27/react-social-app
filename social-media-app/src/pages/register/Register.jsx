import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <input type="email" placeholder="example@mail.com" />
            <input type="text" placeholder="name" />
            <button type="submit">Register</button>
          </form>
        </div>
        <div className="left">
          <h1>Lama Social.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            convallis sed lectus mattis imperdiet. Mauris facilisis efficitur
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
