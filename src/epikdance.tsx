import {
  CommandHandler,
  useDescription,
  Message,
  Embed,
  Field,
  createElement
} from "slshx";

// `Env` contains bindings and is declared in types/env.d.ts
export function epikdance(): CommandHandler<Env> {
  useDescription("dancing ass bitch");
    return async () => {
  
      // With JSX
      return (
        <Message>
          <Embed
            // All these properties are optional
            title="Here is 2Epik4u Dancing!"
            color={0x1653C1}
            image={{url: "https://cdn.discordapp.com/attachments/740797420744474734/746628859784331304/epikdance.gif"}} // or image={{ url: "...", width: ..., height: ... }}
          >
          </Embed>
          {/* Can include up to 10 embeds here */}
        </Message>
      );
  }
}