"use client";

import Script from 'next/script';

export default function ChatbotInline() {
  return (
    <>
      <Script id="dify-config" strategy="afterInteractive">
        {`
          window.difyChatbotConfig = {
            token: 'h4Gj2bH9KRsFkoyU',
            systemVariables: {},
            // 自定义配置
            configs: {
              // 自定义文本
              text: {
                placeholder: "How can I help you?", // 输入框占位符
                buttonText: "Chat with me", // 按钮文本
                welcomeText: "Hello! I'm Mustang's AI assistant. How can I help you today?", // 欢迎文本
              },
              // 其他配置
              features: {
                showMarkdown: true,
                enableSpeech: false,
                speechToText: false,
                textToSpeech: false,
              }
            }
          }
        `}
      </Script>
      <Script 
        src="https://udify.app/embed.min.js"
        id="h4Gj2bH9KRsFkoyU"
        strategy="afterInteractive"
      />
      <style jsx global>{`
        #dify-chatbot-bubble-button {
          background-color: #1C64F2 !important;
        }
        #dify-chatbot-bubble-window {
          width: 24rem !important;
          height: 40rem !important;
        }
      `}</style>
    </>
  );
} 