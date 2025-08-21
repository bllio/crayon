import Panel from '../Panel/Panel';

import { tools } from './Toolbar.constants';

import styles from './Toolbar.module.css';

const toolButtons = tools.map((tool) => {
  // Assigning the icon to a variable and using that in its place prevents
  // errors when trying to render the icon in JSX.
  // See https://stackoverflow.com/a/74270098.
  const Icon = tool.icon;
  return (
    <li key={tool.id}>
      <button className={styles['icon-btn']} name={tool.name}>
        <Icon />
      </button>
    </li>
  );
});

export default function Toolbar() {
  return <Panel items={toolButtons} direction="column" spacing="medium" />;
}
