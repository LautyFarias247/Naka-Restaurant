import style from "./LoginPage.module.css";
import Slider from "../../components/Slider/Slider";
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage = () => {

  return (
		<main className={style.main}>
			<Slider/>
			<LoginForm/>
		</main>
  );
};

export default LoginPage;
