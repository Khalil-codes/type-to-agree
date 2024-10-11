import { Screen } from "@/App";
import { Button } from "./ui/button";

type Props = {
  changeScreen: (screen: Screen) => void;
};

const Success = ({ changeScreen }: Props) => {
  return (
    <div className="p-6">
      <h1 className="text-center text-2xl font-semibold">🎉 Success! 🎉</h1>
      <p className="mt-10 text-center text-muted-foreground">
        Wow, you just typed the whole thing! We're impressed. Your typing skills
        are on fire! Legal eagles everywhere are quaking in their boots! Keep
        crushing it, champion! 💪
      </p>
      <Button
        className="mt-10 w-full"
        onClick={() => changeScreen("login")}
        variant="default">
        Reset
      </Button>
    </div>
  );
};

export default Success;
