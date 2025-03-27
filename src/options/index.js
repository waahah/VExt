import '../utils/emoji-log';
import './index.scss';

console.emoji('🦄', 'Hello World from options main file!');

const input = document.getElementById('username');
const button = document.querySelector('input[name="logging"]');
button.onclick = () => {
    const value = input.value;
    console.emoji('🐱', value);
};