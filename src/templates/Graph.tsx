import {Line} from 'react-chartjs-2';

type IGraphProps = {
  data: any,
};

const Graph = (props: IGraphProps) => (
  <div>
      <h2 className="text-lg text-left font-semibold">{props.data.graphTitle}</h2>
      <span>{props.data.graphDescription}</span>
      <Line
        data={props.data}
        options={props.data.options}
        width={400}
        height={400}
      />
    </div>
);

export { Graph };
