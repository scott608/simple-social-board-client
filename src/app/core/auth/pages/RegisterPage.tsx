import RegisterComponent from "../components/RegisterComponent";
import { RegisterDto } from "../types/RegisterDto";
import { useRegister } from "../hooks/useRegister";

export default function Register() {

  const registerHandler = useRegister();

  return (
    <RegisterComponent
      onSubmit={(data: RegisterDto) => {
        registerHandler(data);
      }}
    />
  );
}
