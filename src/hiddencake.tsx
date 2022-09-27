import {
    CommandHandler,
    useDescription,
    Message,
    Embed,
    Field,
    createElement
  } from "slshx";
  
  // `Env` contains bindings and is declared in types/env.d.ts
  export function hiddencake(): CommandHandler<Env> {
    useDescription("replies with HIDDEN CAKE");
      return async () => {
    
        // With JSX
        return (
          <Message>
            <Embed
              // All these properties are optional
              title="You found the hidden cake!"
              color={0x0092b0}
              image={{url: "https://cdn.discordapp.com/attachments/740797420744474734/747365229737934928/cake.png"}} // or image={{ url: "...", width: ..., height: ... }}
            >
              nice. but its not a real cake so dont eat it!
            </Embed>
            {/* Can include up to 10 embeds here */}
          </Message>
        );
    }
  }