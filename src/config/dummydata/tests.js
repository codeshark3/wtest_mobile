export const tests = [
  {
    id: 1,
    name: "Paul Adom Otchere",
    age: 4810,
    location: "Accra",
    sex: "Female",
    O: "Positive",
    S: "Negative",
    Lf: "Negative",
    H: "Negative",
  },
  {
    id: 2,

    name: "Giannis Antetokoumpo",
    age: 4810,
    location: "Nkantanang 1",
    sex: "Male",
    O: "Positive",
    S: "Positive",
    Lf: "Positive",
    H: "Negative",
  },
  {
    id: 3,
    name: "Tom",
    age: 4810,
    location: "Doboro",
    sex: "Female",
    O: "Positive",
    S: "Negative",
    Lf: "Negative",
    H: "Negative",
  },
  {
    id: 4,
    name: "Po",
    age: 6810,
    location: "Kumasi",
    sex: "Male",
    O: "Positive",
    S: "Postive",
    Lf: "Negative",
    H: "Negative",
  },
];

// import React, { useState, useEffect, useRef } from 'react';
// import { View, Text, PanResponder } from 'react-native';
// import { VictoryChart, VictoryLine, VictoryScatter } from 'victory-native';
// import axios from 'axios';

// const ChartWithGesture = () => {
//   const [priceData, setPriceData] = useState([]); // Price data from the API
//   const [price, setPrice] = useState(0); // Current price value
//   const panResponderRef = useRef(null);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(
//         'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7'
//       );
//       const data = response.data.prices;
//       setPriceData(data);
//       setPrice(data[0][1]); // Set the initial price value to the first data point
//     } catch (error) {
//       console.log('Error fetching data:', error);
//     }
//   };

//   const handlePanResponderMove = (_, gestureState) => {
//     const { dx } = gestureState;
//     const chartWidth = 300; // Adjust the width of the chart container
//     const dataLength = priceData.length;

//     const index = Math.floor((dx / chartWidth) * dataLength);
//     const newIndex = Math.max(0, Math.min(index, dataLength - 1));
//     setPrice(priceData[newIndex][1]);
//   };

//   const panResponder = PanResponder.create({
//     onStartShouldSetPanResponder: () => true,
//     onMoveShouldSetPanResponder: () => true,
//     onPanResponderMove: handlePanResponderMove,
//   });

//   return (
//     <View style={{ flex: 1 }}>
//       <View
//         style={{ flex: 1 }}
//         {...panResponder.panHandlers}
//         ref={panResponderRef}
//       >
//         <VictoryChart>
//           <VictoryLine data={priceData} x={0} y={1} />
//           <VictoryScatter
//             data={[{ x: priceData.length - 1, y: price }]}
//             size={6}
//             style={{ data: { fill: 'red' } }}
//           />
//         </VictoryChart>
//       </View>
//       <Text>Price: {price}</Text>
//       <Text>Swipe left/right on the chart to change the price</Text>
//     </View>
//   );
// };

// export default ChartWithGesture;
