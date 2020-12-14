import React from 'react';
import './couner.scss';

// function component
const AnimatedCard = ({ animation, digit }) => {
  return (
    <div className={`flipCard ${animation}`}>
      <span>{digit}</span>
    </div>
  );
};

// function component
const StaticCard = ({ position, digit }) => {
  return (
    <div className={position}>
      <span>{digit}</span>
    </div>
  );
};

// function component
const FlipUnitContainer = ({ digit, shuffle, unit }) => {
  // assign digit values
  let currentDigit = digit;
  let previousDigit = digit - 1;

  // to prevent a negative value
  if (unit !== 'hours') {
    previousDigit = previousDigit === -1 ? 59 : previousDigit;
  } else {
    previousDigit = previousDigit === -1 ? 23 : previousDigit;
  }

  // add zero
  if (currentDigit < 10) {
    currentDigit = `0${currentDigit}`;
  }
  if (previousDigit < 10) {
    previousDigit = `0${previousDigit}`;
  }

  // shuffle digits
  const digit1 = shuffle ? previousDigit : currentDigit;
  const digit2 = !shuffle ? previousDigit : currentDigit;

  // shuffle animations
  const animation1 = shuffle ? 'fold' : 'unfold';
  const animation2 = !shuffle ? 'fold' : 'unfold';

  return (
    <div className={'flipUnitContainer'}>
      <StaticCard position={'upperCard'} digit={currentDigit} />
      <StaticCard position={'lowerCard'} digit={previousDigit} />
      <AnimatedCard digit={digit1} animation={animation1} />
      <AnimatedCard digit={digit2} animation={animation2} />
    </div>
  );
};

// class component
class FlipClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      secondsShuffle: true,
      test: 0,
      testShuffle: true,
    };
  }

  componentDidMount() {
    // this.timerID = setInterval(() => this.updateTime(), 50);
    this.timerID = setInterval(() => {
      if (this.state.test < 10) {
        const testShuffle = !this.state.testShuffle;
        this.setState({
          test: this.state.test + 0,
          testShuffle,
        });
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  updateTime() {
    // get new date
    const time = new Date();
    // set time units
    const seconds = time.getSeconds();

    // on second chanage, update seconds and shuffle state
    if (seconds !== this.state.seconds) {
      const secondsShuffle = !this.state.secondsShuffle;
      this.setState({
        seconds,
        secondsShuffle,
      });
    }

    if (test > 10) {
      const testShuffle = !this.state.testShuffle;
      this.setState({
        test,
        testShuffle,
      });
    }
  }

  render() {
    // state object destructuring
    const { seconds, secondsShuffle, test, testShuffle } = this.state;

    return (
      // <div className={'flipClock'}>
      //   <FlipUnitContainer
      //     unit={'seconds'}
      //     digit={seconds}
      //     shuffle={secondsShuffle}
      //   />
      // </div>
      <div className={'flipClock'}>
        <FlipUnitContainer unit={'test'} digit={test} shuffle={testShuffle} />
      </div>
    );
  }
}

// function component

// function component
const Counter = () => {
  return (
    <div className='test'>
      <FlipClock />
    </div>
  );
};

export default Counter;

// https://codepen.io/liborgabrhel/pen/JyJzjb
