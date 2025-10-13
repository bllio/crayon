import Panel from '../Panel/Panel';

import { useAppStore } from '../../stores/useAppStore';

import type { Tool } from './Toolbar.types';

import { tools } from './tools';

import styles from './Toolbar.module.css';

interface ToolButtonProps {
  tool: Tool;
}

function ToolButton({ tool }: Readonly<ToolButtonProps>) {
  // Assigning the icon to a variable and using that in its place prevents
  // errors when trying to render the icon in JSX.
  // See https://stackoverflow.com/a/74270098.
  const Icon = tool.icon;
  const activeTool = useAppStore((state) => state.activeTool);
  const updateActiveTool = useAppStore((state) => state.updateActiveTool);

  return (
    <li key={tool.id}>
      <button
        className={`${styles['icon-btn']} ${tool.id === activeTool ? styles['icon-btn__active'] : ''}`}
        name={tool.name}
        onClick={() => updateActiveTool(tool.id)}
      >
        <Icon />
      </button>
    </li>
  );
}

export default function Toolbar() {
  const toolButtons = tools.map((tool) => (
    <ToolButton key={tool.id} tool={tool} />
  ));

  return <Panel items={toolButtons} direction="column" spacing="medium" />;
}
