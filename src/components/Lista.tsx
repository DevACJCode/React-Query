import { Button, Spinner, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Personagem = {
  id: number;
  name: string;
};

export function Lista() {
  const navigate = useNavigate();

  const [personagens, setPersonagens] = useState<Personagem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function getPersonagens() {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://rickandmortyapi.com/api/character/1,2,3,4,183"
      );
      if (response.status !== 200)
        throw new Error("Falha ao obter personagens do Rick and Morty");
      const data = (await response.json()) as Personagem[];
      setPersonagens(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getPersonagens();
  }, []);

  if (isLoading) return <Spinner color="red.500" />;
  if (!!error)
    return (
      <Text fontSize="12px" color="tomato">
        ACONTECEU UM ERRO: {error}
      </Text>
    );

  return (
    <div>
      <ul>
        {personagens?.map((personagem) => (
          <li key={personagem.id}>{personagem.name}</li>
        ))}
      </ul>
      <Button colorScheme="blue" onClick={() => navigate("sobre")}>
        IR PARA SOBRE
      </Button>
    </div>
  );
}
