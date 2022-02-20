import React from 'react'
import {sankey} from 'd3-sankey';
import * as d3 from 'd3';

const MySankey = ({ data }) => {
  const layout = sankey();
  console.log(layout);
  return (
    <div>

    </div>
  )
}

export default MySankey
