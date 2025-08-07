import type { JSX } from 'react';

// We manually define FlexDirection here so that it can be used in the
// PanelProps interface as a prop type, but the values are limited to only
// 'column' and 'row' because those will be the only possible values for our
// Panel component's direction prop.
// See https://stackoverflow.com/q/62432985.
export type FlexDirection = 'column' | 'row';

export interface PanelProps {
  items: JSX.Element[];
  direction?: FlexDirection;
}
