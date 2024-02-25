"use client";

import { useEffect, useRef } from "react";
import ChatItem from "./chat-item";

export default function ChatSection({ chat }: any) {
  const endOfChatRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    endOfChatRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  return (
    <div className="overflow-y-auto flex-grow">
      {chat.map((item: any) => (
        <ChatItem key={item.id} data={item} />
      ))}
      <div ref={endOfChatRef} />
    </div>
  );
}
