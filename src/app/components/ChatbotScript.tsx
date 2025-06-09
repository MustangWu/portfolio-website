"use client";

import React from 'react';

export default function ChatbotScript() {
  return (
    <>
      <div
        dangerouslySetInnerHTML={{
          __html: `
            <script>
              window.difyChatbotConfig = {
                token: 'h4Gj2bH9KRsFkoyU',
                systemVariables: {},
              }
            </script>
            <script
              src="https://udify.app/embed.min.js"
              id="h4Gj2bH9KRsFkoyU"
              defer>
            </script>
            <style>
              #dify-chatbot-bubble-button {
                background-color: #E0BBE4 !important;
              }
              #dify-chatbot-bubble-window {
                width: 24rem !important;
                height: 40rem !important;
              }
            </style>
          `,
        }}
      />
    </>
  );
} 