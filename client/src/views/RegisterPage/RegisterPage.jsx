import style from "./RegisterPage.module.css";
import Slider from "../../components/Slider/Slider";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const RegisterPage = () => {

  return (
		<main className={style.main}>
			<Slider/>
			<RegisterForm/>
		</main>
  );
};

export default RegisterPage;
