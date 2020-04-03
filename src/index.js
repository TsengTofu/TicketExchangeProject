import _ from 'lodash';
import './style.css';
import Street from './street.jpg';

function component() {
    const element = document.createElement('div');
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack', 'Test'], ' ');
    // 加上 className
    element.classList.add('hello');

    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Street;

    element.appendChild(myIcon);

    return element;
}

// 也就是說 只要我更改內容 就要重新 build 一次
document.body.appendChild(component());