import {
    CommandHandler,
    useDescription,
    Message,
    Embed,
    Field,
    createElement,
    useString,
    useUser
  } from "slshx";
  
  // `Env` contains bindings and is declared in types/env.d.ts
  export function ground(): CommandHandler<Env> {
    useDescription("ground STUPID PEOPLE......");
    const get = useUser("user", "Description", {required: true});
    const reason = useString("reason", "Enter a reason to ground someone", { required: false });

      return async () => {
    
        // With JSX
        return (
          <Message>
            {}
          </Message>
        );
    }
  }