interface CreateMessageReactionRequest {
  roomId: string;
  messageId: string;
}

export async function createMessageReaction({
  messageId,
  roomId,
}: CreateMessageReactionRequest) {
  const apiUrl = import.meta.env.VITE_APP_API_URL;
  await fetch(`${apiUrl}/rooms/${roomId}/messages/${messageId}/react`, {
    method: 'PATCH',
  });
}
