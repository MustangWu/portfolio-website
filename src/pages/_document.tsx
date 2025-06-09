import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <style dangerouslySetInnerHTML={{ __html: `
          #dify-chatbot-bubble-button {
            background-color: #1C64F2 !important;
          }
          #dify-chatbot-bubble-window {
            width: 24rem !important;
            height: 40rem !important;
          }
        `}} />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.difyChatbotConfig = {
                token: 'h4Gj2bH9KRsFkoyU',
                systemVariables: {},
              }
            `,
          }}
        />
        <script
          src="https://udify.app/embed.min.js"
          id="h4Gj2bH9KRsFkoyU"
          defer
        />
      </body>
    </Html>
  )
} 