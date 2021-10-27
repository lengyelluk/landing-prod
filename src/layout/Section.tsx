import { ReactNode } from 'react';

type ISectionProps = {
  title?: string;
  description?: string;
  yPadding?: string;
  children?: ReactNode;
};

const Section = (props: ISectionProps) => (
  <div
    className={`max-w-screen-xl mx-auto px-3 ${
      props.yPadding ? props.yPadding : 'py-16'
    }`}
  >
    {(props.title || props.description) && (
      <div className="text-center">
        {props.title && (
          <h2 className="text-4xl pb-4 text-gray-900 font-bold">{props.title}</h2>
        )}
        {props.description && (
          <div className="text-justify mt-4 text-xl px-6">{props.description}</div>
        )}
      </div>
    )}

  {props.children}
  </div>
);

export { Section };