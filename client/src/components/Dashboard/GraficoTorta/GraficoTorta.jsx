import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PieChart, Pie, Tooltip, Legend, Cell } from 'recharts';
import { getCategories } from '../../../redux/actions/actions';
// const data = [
//   { name: 'Manzanas', value: 400 },
//   { name: 'Naranjas', value: 300 },
//   { name: 'Bananas', value: 200 },
//   { name: 'Papayas', value: 100 },
// ];

const COLORS = ['#87CEFA', '#77B5E5', '#679CCE', '#5783B7', '#476AA0', '#375187', '#273A70', '#172257', '#071B3E', '#001326', '#BFEFFF', '#AED6F1', '#9CC0E4', '#8BAAD7'];


const GraficoTorta = ({pedidos}) => {
    const [data, setData] = useState([])
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getCategories())
    },[])

    useEffect(()=>{
        const ventasPorCategoria = [];
        const ventasPorCategoriaAux = {};
        for (let i = 0; i < pedidos?.length; i++) {
          for (let j = 0; j < pedidos[i].items.length; j++) {
            const categoria = pedidos[i].items[j].category;
            if (!ventasPorCategoriaAux[categoria]) {
              ventasPorCategoriaAux[categoria] = 0;
            }
            ventasPorCategoriaAux[categoria]++;
          }
        }
        for (const categoria in ventasPorCategoriaAux) {
          ventasPorCategoria.push({ name: categoria, value: ventasPorCategoriaAux[categoria] });
        }
        console.log(ventasPorCategoria);
        setData(ventasPorCategoria)
    },[pedidos])
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "400px", width: "100%", margin: "0 300px 0 0" }}>
    <PieChart width={600} height={400}>
        {/* <div className={style.container}> */}
            
      <Pie
        data={data}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={130}
        fill="#8884d8"
        dataKey="value"
        >
        {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
      </Pie>
      {/* <Tooltip /> */}
      <Legend style={{ display: "inline", marginRight: "300px" }} />
            {/* </div> */}
    </PieChart>
    </div>
  );
};

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
  const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));
  return (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default GraficoTorta;
