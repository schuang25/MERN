import react, {useState} from 'react';
import './App.css';

import Tabs from './components/Tabs';
import TabContent from './components/TabContent';

function App() {
  const defaultTabs = ["Tab 1 content", "Tab 2 content", "Tab 3 content"];

  const [tabs, setTabs] = useState(defaultTabs);
  const [activeTab, setActiveTab] = useState(0);

  const changeActive = (newActive) => {
    setActiveTab(newActive);
  }

  return (
    <div className="App">
      <Tabs tabs={tabs} activeTab={activeTab} onActiveChange={changeActive} />
      <TabContent content={tabs[activeTab]} />
    </div>
  );
}

export default App;
