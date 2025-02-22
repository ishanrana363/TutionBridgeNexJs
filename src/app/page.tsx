import React from 'react';
import { Button } from "antd";
const Home = () => {
  return (
    <div>
      <Button variant='primary'  >Submit</Button>
      <Button color="default" variant="solid">
        Solid
      </Button>
      <Button color="primary" variant="outlined">
        Outlined
      </Button>
    </div>
  );
};

export default Home;