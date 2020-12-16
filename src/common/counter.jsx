// import React from 'react';
// import './couner.scss';

// // function component
// const AnimatedCard = ({ animation, digit }) => {
//   return (
//     <div className={`flipCard ${animation}`}>
//       <span>{digit}</span>
//     </div>
//   );
// };

// // function component
// const StaticCard = ({ position, digit }) => {
//   return (
//     <div className={position}>
//       <span>{digit}</span>
//     </div>
//   );
// };

// // function component
// const FlipUnitContainer = ({ digit, shuffle, unit }) => {
//   // assign digit values
//   let currentDigit = digit;
//   let previousDigit = digit - 1;

//   const digit1 = shuffle ? previousDigit : currentDigit;
//   const digit2 = !shuffle ? previousDigit : currentDigit;

//   // shuffle animations
//   const animation1 = shuffle ? 'fold' : 'unfold';
//   const animation2 = !shuffle ? 'fold' : 'unfold';

//   return (
//     <div className={'flipUnitContainer'}>
//       <StaticCard position={'upperCard'} digit={currentDigit} />
//       <StaticCard position={'lowerCard'} digit={previousDigit} />
//       <AnimatedCard digit={digit1} animation={animation1} />
//       <AnimatedCard digit={digit2} animation={animation2} />
//     </div>
//   );
// };

// class FlipClock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       test: 1,
//       testShuffle: true,
//     };
//   }

//   componentDidMount() {
//     this.timerID = setInterval(() => {
//       if (this.state.test <= 8) {
//         const testShuffle = !this.state.testShuffle;
//         this.setState({
//           test: this.state.test + 1,
//           testShuffle,
//         });
//       }
//     }, 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   render() {
//     const { test, testShuffle } = this.state;
//     return (
//       <div className={'flipClock'}>
//         <FlipUnitContainer unit={'test'} digit={test} shuffle={testShuffle} />
//       </div>
//     );
//   }
// }
// const Counter = () => {
//   return (
//     <div className='test'>
//       <FlipClock />
//     </div>
//   );
// };

// export default Counter;

// // https://codepen.io/liborgabrhel/pen/JyJzjb
