import { select, arc } from 'd3';

const svg = select('svg');
svg.style('background-color', 'red');

//creating and editting circle
const g = svg.append('g')
    .attr('transform', 'translate(250,200)');

const circle = g.append('circle');
circle
    .attr('r', 200)
    .attr('cx', 0)
    .attr('cy', 0)
    .attr('fill', 'yellow')
    .attr('stroke', 'black')

const left_eye = g.append('circle');
left_eye
    .attr('r', 30)
    .attr('cx', -80)
    .attr('cy', -100)
    .attr('fill', 'black')
    .attr('stroke', 'black')

const right_eye = g.append('circle');
right_eye
    .attr('r', 30)
    .attr('cx', 80)
    .attr('cy', -100)
    .attr('fill', 'black')
    .attr('stroke', 'black')


const mouth = g.append('path')
    .attr('d', arc()({
        innerRadius: 80,
        outerRadius:100,
        startAngle: Math.PI/2,
        endAngle: Math.PI*(3/2)
    }));



