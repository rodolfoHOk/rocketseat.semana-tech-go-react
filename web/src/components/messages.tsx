import { useParams } from 'react-router-dom';
import { Message } from './message';
import { getRoomMessages } from '../http/get-room-messages';
import { useSuspenseQuery } from '@tanstack/react-query';
// import { use } from 'react'; // example react 19+

export function Messages() {
  const { roomId } = useParams();
  if (!roomId) {
    throw new Error('Messages components must be used within room page');
  }
  // const { messages } = use(getRoomMessages({ roomId })); // example react 19+
  const { data } = useSuspenseQuery({
    queryKey: ['messages', roomId],
    queryFn: () => getRoomMessages({ roomId }),
  });

  return (
    <ol className="list-decimal list-outside px-3 space-y-8">
      {data.messages.map((message) => (
        <Message
          key={message.id}
          text={message.text}
          amountOfReactions={message.amountOfReactions}
          answered={message.answered}
        />
      ))}
    </ol>
  );
}
