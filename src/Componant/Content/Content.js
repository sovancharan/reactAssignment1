import React from 'react';
import Part1 from './Part/Part1';
import Part2 from './Part/Part2';
import Part3 from './Part/Part3';

const Content = ({ part1, part2, part3 }) => {
    return (
        <div>
            <Part1 part1={part1} />
            <Part2 part2={part2} />
            <Part3 part3={part3}/>
        </div>
    );
};

export default Content;
