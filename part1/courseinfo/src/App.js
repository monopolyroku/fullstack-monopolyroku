
const Header = (text) => {
  return (
    <div>
      <h1>{text.course}</h1>
    </div>
  )
}

const Content = ({
  part1,
  part2,
  part3,
  exercises1,
  exercises2,
  exercises3,
}) => {
  return (
    <div>
      <Part part = {part1} exercises = {exercises1} />
      <Part part = {part2} exercises = {exercises2} />
      <Part part = {part3} exercises = {exercises3} />
    </div>
  )
}

const Total = ({ex1, ex2, ex3}) => {
  return (
    <div>
      <p>No. of exercises: {ex1 + ex2 + ex3}</p>
    </div>
  )
}

const Part = ({part, exercises}) => {
  return (
    <div>
      <p> {part} {exercises} </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
     <Header course = {course} />
     <Content 
      part1 = {part1} 
      part2 = {part2} 
      part3 = {part3}
      exercises1 = {exercises1}
      exercises2 = {exercises2}
      exercises3 = {exercises3} 
     />
     <Total 
     ex1 = {exercises1} 
     ex2 = {exercises2} 
     ex3 = {exercises3} 
     />
    </div>
  )
}


export default App;
