interface CreateRoomRequest {
  theme: string;
}

export async function createRoom({ theme }: CreateRoomRequest) {
  const apiUrl = import.meta.env.VITE_APP_API_URL;
  const response = await fetch(`${apiUrl}/rooms`, {
    method: 'POST',
    body: JSON.stringify({
      theme,
    }),
  });
  const data: { id: string } = await response.json();
  return {
    roomId: data.id,
  };
}
