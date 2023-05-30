

const GraficoLinea = () => {
  const data = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
    datasets: [
      {
        label: 'Ventas',
        data: [12, 19, 3, 5, 2],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };

  return (
    <div>
      <h2>Gráfico de línea</h2>
  
    </div>
  );
};

export default GraficoLinea;
