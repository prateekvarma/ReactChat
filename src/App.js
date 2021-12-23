import { ChatEngine } from "react-chat-engine";
import "./App.css";

function App() {
  const projectID = process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID;
  const userSecret = process.env.REACT_APP_USER_PWD;
  return (
    <ChatEngine
      height="100hv"
      projectID={projectID}
      userName="johndoe"
      userSecret={userSecret}
      renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
