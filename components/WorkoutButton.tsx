import { useState } from 'react'
import styled from 'styled-components'

const Button = styled.button`
  border: 1px solid black;
  background: white;
`;

const WorkoutButton = () => {
  const [complete, setComplete] = useState(false);
  return (
    <Button onClick={() => setComplete(!complete)}>
      {complete ? 'Completed' : 'Pending'}
    </Button>
  )
}

export default WorkoutButton;
