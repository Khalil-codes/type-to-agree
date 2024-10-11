import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Screen } from "@/App";

type Props = {
  changeScreen: (screen: Screen) => void;
};

const Login = ({ changeScreen }: Props) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    changeScreen("tnc");
  };

  return (
    <div className="p-6">
      <h1 className="text-center text-2xl font-semibold">
        Login to your Account
      </h1>
      <form className="mt-10 flex flex-col gap-6" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <Label htmlFor="username">Username</Label>
          <Input id="username" type="text" required placeholder="@cristiano" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            required
            placeholder="••••••••"
          />
        </div>
        <Button variant="default">Continue</Button>
      </form>
    </div>
  );
};

export default Login;
