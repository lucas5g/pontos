import { Card } from "@/components/Card";
import { Input } from "@/components/Input";

export default function Home() {
  return (
    <>
    <Card>
      <h1 className="text-2xl">Folha de Pontos</h1>
    </Card>

    <Card>
      <form action="">
        <Input type="text" />
        {/* <Input type="time"/> */}

      </form>
    </Card>
    </>
  );
}
