import { Button, Spinner, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

type Personagem = {
  id: number;
  name: string;
};

export function ListaRQ() {
  const navigate = useNavigate();

  const {
    data: personagens,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["personagens"],
    queryFn: getPersonagens,
  });

  async function getPersonagens() {
    const response = await fetch(
      "https://rickandmortyapi.com/api/character/1,2,3,4,183"
    );
    if (response.status !== 200)
      throw new Error("Falha ao obter personagens do Rick and Morty");
    const data = (await response.json()) as Personagem[];
    return data;
  }

  if (isLoading) return <Spinner color="red.500" />;
  if (error)
    return (
      <Text fontSize="12px" color="tomato">
        ACONTECEU UM ERRO: {error.message}
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
