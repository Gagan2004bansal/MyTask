import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';

const MyHeatmap = () => {
  const data = [
    { date: '2024-10-14', count: 1 },
    { date: '2024-10-13', count: 2 },
    // More data...
  ];

  return (
    <CalendarHeatmap
      startDate={new Date('2024-01-01')}
      endDate={new Date('2024-12-31')}
      values={data}
      classForValue={(value) => {
        if (!value) {
          return 'color-empty';
        }
        return `color-scale-${value.count}`;
      }}
      tooltipDataAttrs={(value) => {
        return value
          ? { 'data-tip': `${value.date}: ${value.count}` }
          : { 'data-tip': `No data` };
      }}
    />
  );
};

export default MyHeatmap;
