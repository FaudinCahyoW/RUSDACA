// import * as React from 'react'
// import {Carousel} from "react-native-reanimated-carousel"

// const carouselComp = () => {
//     const [data, setData] = useState([
//         {
//           title: "Title 1",
//           image: "https://via.placeholder.com/100x100",
//         },
//         {
//           title: "Title 2",
//           image: "https://via.placeholder.com/100x100",
//         },
//         {
//           title: "Title 3",
//           image: "https://via.placeholder.com/100x100",
//         },
//       ]);

//       return (
//         <Carousel
//           data={data}
//           onPageChanged={() => console.log("Page changed")}
//           onSwiped={() => console.log("Swiped")}
//         >
//           {data.map((item, index) => (
//             <View key={index} style={styles.item}>
//               <Image source={item.image} style={styles.image} />
//               <Text style={styles.title}>{item.title}</Text>
//             </View>
//           ))}
//         </Carousel>
//       );
//     };
    
//     const styles = {
//       item: {
//         width: 200,
//         height: 200,
//         margin: 10,
//       },
//       image: {
//         width: 200,
//         height: 200,
//       },
//       title: {
//         textAlign: "center",
//         fontSize: 18,
//       },
//     };
// export default carouselComp    
