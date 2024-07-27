'use client'
import { useChat } from "ai/react";
import Messages from "../components/Messages";
import InputForm from "../components/InputForm";
import Topbar from '../components/Topbar'

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, stop } =
  useChat({
    api: "api/genai",
  });

  return (
    <main>
      <Topbar />
      <section className=''>
        <InputForm input={input}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
        stop={stop}/>
        <Messages messages={messages} isLoading={isLoading} />
      </section>
    </main>
  )
}
