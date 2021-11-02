import className from 'classnames';
import { useRouter } from 'next/router';
import { Graph } from '../templates/Graph';

type IVerticalFeatureRowProps = {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  reverse?: boolean;
  graph?: any;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    'mt-20',
    'flex',
    'flex-wrap',
    'lg:no-wrap',
    'items-center',
    'justify-between',
    {
      'flex-row-reverse': props.reverse,
    }
  );
  
  const router = useRouter();

  return (
    <div className={verticalFeatureClass}>
      <div className={`w-full md:w-1/2 px-6 $props.reverse ? md:pr-12 : md:pl-12`}>
        <h3 className="text-3xl text-center text-gray-900 font-semibold">{props.title}</h3>
        <div className="mt-6 text-xl leading-9 text-justify">{props.description}</div>
      </div>
      
      {typeof props.image !== 'undefined' ? 
      <div className={`w-full p-6 md:w-1/2 md:mt-20 px-6 $props.reverse ? md:pl-12 : md:pr-12`}>
        <img src={`${router.basePath}${props.image}`} alt={props.imageAlt} />
      </div> : null }

      {typeof props.graph !== 'undefined' ?
      <div className="w-full md:w-1/2 mt-10 md:mt-0 px-6 $props.reverse ? md:pl-12 : md:pr-12">
        <Graph data={props.graph} />
      </div>
      : null }
    </div>
  );
};

export { VerticalFeatureRow };
