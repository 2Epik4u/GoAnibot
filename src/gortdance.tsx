import {
    CommandHandler,
    useDescription,
    Message,
    Embed,
    Field,
    createElement
  } from "slshx";
  
  // `Env` contains bindings and is declared in types/env.d.ts
  export function gortdance(): CommandHandler<Env> {
    useDescription("Gort Tastic Dancing!");
      return async () => {
    
        // With JSX
        return (
          <Message>
            <Embed
              // All these properties are optional
              title="Here is Gort Dancing! (Very Gort Tastic!)"
              color={0xFF0000}
              image={{url: "https://cdn.discordapp.com/attachments/740797420744474734/747367509509799946/gotest.gif"}} // or image={{ url: "...", width: ..., height: ... }}
            >
            </Embed>
            {/* Can include up to 10 embeds here */}
          </Message>
        );
    }
  }