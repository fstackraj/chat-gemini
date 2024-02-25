import { chatAction } from "@/server/chat-action";
import ChatSection from "@/components/home/chat-section";
import ChatForm from "@/components/home/chat-form";

export default async function Home() {
  const chatData = await chatAction();
  const handleSubmit = async (chatInput: any) => {
    "use server";
    await chatAction(chatInput);
  };

  return (
    <main className="flex flex-col h-screen py-10 space-y-4">
      <ChatSection chat={chatData} />
      <ChatForm onSubmit={handleSubmit} />
    </main>
  );
}
