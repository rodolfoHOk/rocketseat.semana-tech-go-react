interface RemoveMessageReactionRequest {
  roomId: string;
  messageId: string;
}

export async function removeMessageReaction({
  messageId,
  roomId,
}: RemoveMessageReactionRequest) {
  const apiUrl = import.meta.env.VITE_APP_API_URL;
  await fetch(`${apiUrl}/rooms/${roomId}/messages/${messageId}/react`, {
    method: 'DELETE',
  });
}
