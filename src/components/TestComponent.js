import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Svg, { Polyline, Path } from "react-native-svg";

const w = Dimensions.get("window").width;

const TestComponent = () => {
  // console.log("test:", prices);
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.title}>INFECTED VS RECOVERED</Text>
        <View style={styles.containerDot}>
          <View style={styles.dot} />
          <Text style={styles.male}>New Case</Text>
        </View>

        <View style={styles.containerDot}>
          <View style={[styles.dot, { backgroundColor: "#8CB746" }]} />
          <Text style={styles.male}>New Recovereds</Text>
        </View>
        <View style={styles.chartContainer}>
          <View style={styles.chart}>
            <View style={styles.line1}>
              <Svg width="580" height="400">
                <Path
                  strokeWidth="2"
                  stroke="#F1BD6A"
                  fill="none"
                  d="M0,0L512,512"
                />
              </Svg>
            </View>
            {/* <View style={styles.line2}>
              <Svg width="580" height="400">
                <Path
                  strokeWidth="2"
                  stroke="#8CB746"
                  fill="none"
                  d="m41.5,278.453125c2,0 1.907787,0.496216 6,1c2.977524,0.366547 3.937962,0.498291 10,1c2.989777,0.247437 11,0 16,0c11,0 17.965988,-0.499481 29,-1c3.995888,-0.181244 11,-1 12,-1c4,0 4.907784,-0.496216 9,-1c1.985016,-0.244354 2.907784,-1.496216 7,-2c3.970032,-0.488739 7,-1 11,-1c3,0 6.878555,-1.493469 10,-2c3.948349,-0.640717 5.884964,-0.274323 8,-1c4.823029,-1.654816 7,-2 11,-3c0,0 4,1 5,1c6,0 8,0 12,0c2,0 3.026749,-0.229767 4,0c2.176254,0.513733 4,1 8,1c1,0 3.026749,0.770233 4,1c4.352509,1.027496 5.06456,1.199097 10,2c3.121445,0.506531 9,1 12,1c7,0 11.069,-0.585358 22,1c5.046219,0.731873 9.953308,1.499023 18,2c4.990326,0.310699 14.878571,0.493469 18,1c9.87088,1.601837 15.968811,1.499573 28,2c5.994812,0.249359 13,0 15,0c1,0 2,-1 3,-2c1,-1 1.173096,-1.852722 2,-3c2.614899,-3.627991 2.076111,-4.61731 3,-5c1.306549,-0.541199 1,-1 1,-1c1,1 1.917603,0.386871 3,3c0.38269,0.923889 1,3 1,3c1,2 2,3 2,3c1,1 1.053497,1.459503 3,1c2.176239,-0.513733 6.006805,-1.835052 8,-2c6.062042,-0.501709 11.747467,-2.787323 20,-5c5.875244,-1.575287 16.037476,-2.389069 21,-3c8.184418,-1.007538 9.152252,-2.765381 11,-2c1.306549,0.541199 4.21167,3.714111 7,6c3.281006,2.689789 3,3 3,3c1,1 0.770233,0.973236 1,0c0.513733,-2.176239 3.898529,-8.078156 7,-12c4.844666,-6.126099 6.647491,-8.972519 11,-10c0.973236,-0.229752 1,0 1,0c2,2 5.372009,3.385101 9,6c2.294525,1.653809 5.693451,5.458801 7,6c0.923889,0.38269 2,0 2,0c1,-1 3.486816,-4.62146 7,-7c6.306366,-4.269623 10.946106,-5.676804 16,-5c2.216278,0.296799 6,1 8,2c2,1 4.025818,1.320374 6,1c3.121429,-0.506531 6.303589,-1.372559 13,-5c3.170288,-1.717346 9.012909,-4.839813 10,-5c3.12146,-0.506546 4,-1 5,-1c1,0 3.007507,-0.122177 4,0c4.092224,0.503769 8.294983,2.151215 18,6c2.078552,0.82431 4,1 5,1c0,0 1.82373,1.486252 4,2c1.946472,0.459503 3,0 4,0c0,0 1,0 1,0c1,0 1,-1 1,-1c0,0 0,0 0,0l0,0l0,0l1,0"
                />
              </Svg>
            </View> */}
          </View>

          <Svg height="100" width="100">
            <Polyline points={prices} stroke="red" strokeWidth="3" />
          </Svg>
        </View>
      </View>
    </View>
  );
};

export default TestComponent;

const styles = StyleSheet.create({
  line1: {
    position: "absolute",
    width: w,
    top: -50,
    left: -200,
    height: 150,
  },
  line2: {
    position: "absolute",
    width: w,
    top: -90,
    left: -200,
    height: 200,
  },
  chartContainer: {
    position: "absolute",
    top: -80,
    width: w - 100,
    height: 200,
    alignSelf: "center",
    overflow: "hidden",
    // backgroundColor: 'gray',
    left: 12,
    right: 30,
    padding: 10,
    // overflow:
  },
  chart: {
    marginHorizontal: 20,
  },
  container: {
    backgroundColor: "#fff",
    marginTop: 20,
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    borderRadius: 10,
    padding: 20,
    // overflow: 'hidden',
    height: 170,
  },
  male: {
    color: "gray",
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
  },
  dot: {
    width: 12,
    height: 12,
    backgroundColor: "#F1BD6A",
    borderRadius: 12,
    marginRight: 6,
  },
  containerDot: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
});
