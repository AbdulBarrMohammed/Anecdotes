import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4:0, 5:0, 6:0, 7:0, 8:0});
  const [most, setMost] = useState(0);


  function randSelect() {
    const rand =  Math.floor(Math.random() * anecdotes.length);
    console.log('random num selected -> ' + rand);
    setSelected(rand);

    const copy = { ...points }
    // increment the property 2 value by one
    copy[rand] += 1

    setPoints(copy)

    console.log(points);
    const most = maxVote(points);
    setMost(most)
    console.log(maxVote(points));


    return rand;
  }

  function maxVote(points) {
      let largest = 0;
      let largestAnecdote = points[0];
      const len = Object.keys(points).length;
      for (let i = 0; i < len; i++) {
        if(points[i] > largest) {
          largest = points[i];
          largestAnecdote = i;
        }
      }

      console.log('larget anecdote')
      return largestAnecdote;
  }



  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]} has {points[selected]} votes;
      <button onClick={randSelect}>next anecdote</button>

      <h1>Anecdote with the most votes</h1>
      <p>{anecdotes[most]}</p>

    </div>
  )
}

export default App
