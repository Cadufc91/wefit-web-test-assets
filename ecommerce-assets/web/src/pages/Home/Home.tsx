import React from 'react'
import Content from '../../components/Content/Content'

interface HomeProps {
  setTotalItems: React.Dispatch<React.SetStateAction<number>>;
}

const Home: React.FC<HomeProps> = ({ setTotalItems }) => {
  return (
    <div>
        <Content setTotalItems={setTotalItems} />
    </div>
  )
}

export default Home