import {Line} from 'react-chartjs-2';

type IGraphProps = {
  data: any,
};

const Graph = (props: IGraphProps) => (
  <div className="text-justify">
      <h2 className="text-lg font-semibold">{props.data.graphTitle}</h2>
      <span>{props.data.graphDescription}</span>
      <Line
        data={props.data}
        options={props.data.options}
        width={400}
        height={400}
        className="mt-5 mb-1"
      />
      <div className='text-sm text-left'>
        <span>{props.data.source}</span>
      </div>
    </div>
);

export { Graph };
