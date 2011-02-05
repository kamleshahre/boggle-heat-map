var canvas2 = document.getElementById('canvas_layer2');
var canvas1 = document.getElementById('canvas_layer1');
var context2 = canvas2.getContext('2d');
var context1 = canvas1.getContext('2d');

var boggle_tiles = [["b","a","r"],["h","t","k"],["c","d","e"]];
var paths = [[[0, 0], [1, 0], [2, 0], [2, 1]], [[0, 0], [1, 0], [2, 0], [2, 1], [2, 2]], [[0, 0], [1, 0], [2, 0], [2, 1], [2, 2], [1, 2]], [[0, 0], [1, 0], [2, 0], [2, 1], [2, 2], [1, 1]], [[0, 0], [1, 0], [2, 0], [2, 1], [1, 1]], [[0, 0], [1, 0], [2, 0], [2, 1], [1, 2]], [[0, 0], [1, 0], [2, 0], [1, 1]], [[0, 0], [1, 0], [2, 0], [1, 1], [2, 1]], [[0, 0], [1, 0], [2, 0], [1, 1], [1, 2]], [[0, 0], [1, 0], [2, 0], [1, 1], [0, 1]], [[0, 0], [1, 0], [2, 0], [1, 1], [0, 1], [0, 2]], [[0, 0], [1, 0], [2, 0], [1, 1], [0, 1], [1, 2]], [[0, 0], [1, 0], [2, 0], [1, 1], [0, 2]], [[0, 0], [1, 0], [2, 0], [1, 1], [2, 2]], [[0, 0], [1, 0], [2, 0], [1, 1], [2, 2], [1, 2]], [[0, 0], [1, 0], [2, 0], [1, 1], [2, 2], [2, 1]], [[0, 0], [1, 0], [1, 1], [2, 1]], [[0, 0], [1, 0], [1, 1], [1, 2]], [[0, 0], [1, 0], [1, 1], [0, 1]], [[0, 0], [1, 0], [1, 1], [0, 1], [0, 2]], [[0, 0], [1, 0], [1, 1], [0, 1], [1, 2]], [[0, 0], [1, 0], [1, 1], [0, 2]], [[0, 0], [1, 0], [1, 1], [0, 2], [1, 2]], [[0, 0], [1, 0], [1, 1], [0, 2], [0, 1]], [[0, 0], [1, 0], [1, 1], [0, 2], [0, 1], [1, 2]], [[0, 0], [1, 0], [1, 1], [2, 2]], [[0, 0], [1, 0], [1, 1], [2, 2], [1, 2]], [[0, 0], [1, 0], [1, 1], [2, 2], [1, 2], [0, 2]], [[0, 0], [1, 0], [1, 1], [2, 2], [1, 2], [0, 1]], [[0, 0], [1, 0], [1, 1], [2, 2], [1, 2], [2, 1]], [[0, 0], [1, 0], [1, 1], [2, 2], [2, 1]], [[0, 0], [1, 0], [1, 1], [2, 2], [2, 1], [2, 0]], [[0, 0], [1, 0], [1, 1], [2, 2], [2, 1], [1, 2]], [[0, 0], [1, 0], [1, 1], [2, 0]], [[0, 0], [1, 0], [1, 1], [2, 0], [2, 1]], [[0, 0], [1, 0], [0, 1], [1, 1]], [[0, 0], [1, 0], [0, 1], [1, 1], [2, 1]], [[0, 0], [1, 0], [0, 1], [1, 1], [1, 2]], [[0, 0], [1, 0], [0, 1], [1, 1], [0, 2]], [[0, 0], [1, 0], [0, 1], [1, 1], [2, 2]], [[0, 0], [1, 0], [0, 1], [1, 1], [2, 0]], [[0, 0], [1, 0], [0, 1], [0, 2]], [[0, 0], [1, 0], [0, 1], [1, 2]], [[0, 0], [1, 0], [2, 1], [2, 2]], [[0, 0], [1, 0], [2, 1], [2, 2], [1, 2]], [[0, 0], [1, 0], [2, 1], [2, 2], [1, 2], [0, 2]], [[0, 0], [1, 0], [2, 1], [2, 2], [1, 2], [1, 1]], [[0, 0], [1, 0], [2, 1], [2, 2], [1, 2], [0, 1]], [[0, 0], [1, 0], [2, 1], [2, 2], [1, 1]], [[0, 0], [1, 0], [2, 1], [1, 1]], [[0, 0], [1, 0], [2, 1], [1, 1], [1, 2]], [[0, 0], [1, 0], [2, 1], [1, 1], [0, 1]], [[0, 0], [1, 0], [2, 1], [1, 1], [0, 2]], [[0, 0], [1, 0], [2, 1], [1, 1], [2, 2]], [[0, 0], [1, 0], [2, 1], [1, 1], [2, 0]], [[0, 0], [1, 0], [2, 1], [2, 0]], [[0, 0], [1, 0], [2, 1], [1, 2]], [[0, 0], [0, 1], [1, 0], [2, 0]], [[0, 0], [0, 1], [1, 0], [2, 0], [2, 1]], [[0, 0], [0, 1], [1, 0], [2, 0], [1, 1]], [[0, 0], [0, 1], [1, 0], [1, 1]], [[0, 0], [0, 1], [1, 0], [1, 1], [2, 1]], [[0, 0], [0, 1], [1, 0], [1, 1], [1, 2]], [[0, 0], [0, 1], [1, 0], [1, 1], [0, 2]], [[0, 0], [0, 1], [1, 0], [1, 1], [2, 2]], [[0, 0], [0, 1], [1, 0], [1, 1], [2, 0]], [[0, 0], [0, 1], [1, 0], [2, 1]], [[0, 0], [0, 1], [1, 0], [2, 1], [2, 2]], [[0, 0], [0, 1], [1, 0], [2, 1], [1, 1]], [[0, 0], [0, 1], [1, 0], [2, 1], [1, 1], [1, 2]], [[0, 0], [0, 1], [1, 0], [2, 1], [1, 1], [0, 2]], [[0, 0], [0, 1], [1, 0], [2, 1], [1, 1], [2, 2]], [[0, 0], [0, 1], [1, 0], [2, 1], [1, 1], [2, 0]], [[0, 0], [0, 1], [1, 0], [2, 1], [2, 0]], [[0, 0], [0, 1], [1, 0], [2, 1], [1, 2]], [[1, 0], [2, 0], [2, 1], [2, 2]], [[1, 0], [2, 0], [2, 1], [1, 1]], [[1, 0], [2, 0], [2, 1], [1, 2]], [[1, 0], [2, 0], [1, 1], [2, 1]], [[1, 0], [2, 0], [1, 1], [1, 2]], [[1, 0], [2, 0], [1, 1], [0, 1]], [[1, 0], [2, 0], [1, 1], [0, 1], [0, 2]], [[1, 0], [2, 0], [1, 1], [0, 1], [0, 0]], [[1, 0], [2, 0], [1, 1], [0, 1], [1, 2]], [[1, 0], [2, 0], [1, 1], [0, 2]], [[1, 0], [2, 0], [1, 1], [0, 2], [1, 2]], [[1, 0], [2, 0], [1, 1], [0, 2], [0, 1]], [[1, 0], [2, 0], [1, 1], [2, 2]], [[1, 0], [2, 0], [1, 1], [2, 2], [1, 2]], [[1, 0], [2, 0], [1, 1], [2, 2], [2, 1]], [[1, 0], [2, 0], [1, 1], [0, 0]], [[1, 0], [1, 1], [2, 1], [2, 2]], [[1, 0], [1, 1], [2, 1], [2, 0]], [[1, 0], [1, 1], [2, 1], [1, 2]], [[1, 0], [1, 1], [0, 1], [0, 2]], [[1, 0], [1, 1], [0, 1], [0, 0]], [[1, 0], [1, 1], [0, 1], [1, 2]], [[1, 0], [1, 1], [0, 2], [1, 2]], [[1, 0], [1, 1], [0, 2], [0, 1]], [[1, 0], [1, 1], [0, 2], [0, 1], [0, 0]], [[1, 0], [1, 1], [0, 2], [0, 1], [1, 2]], [[1, 0], [1, 1], [2, 2], [1, 2]], [[1, 0], [1, 1], [2, 2], [2, 1]], [[1, 0], [1, 1], [0, 0], [0, 1]], [[1, 0], [1, 1], [2, 0], [2, 1]], [[1, 0], [0, 0], [0, 1], [1, 1]], [[1, 0], [0, 0], [0, 1], [0, 2]], [[1, 0], [0, 0], [0, 1], [1, 2]], [[1, 0], [0, 0], [1, 1], [2, 1]], [[1, 0], [0, 0], [1, 1], [1, 2]], [[1, 0], [0, 0], [1, 1], [0, 1]], [[1, 0], [0, 0], [1, 1], [0, 1], [0, 2]], [[1, 0], [0, 0], [1, 1], [0, 1], [1, 2]], [[1, 0], [0, 0], [1, 1], [0, 2]], [[1, 0], [0, 0], [1, 1], [2, 2]], [[1, 0], [0, 0], [1, 1], [2, 2], [1, 2]], [[1, 0], [0, 0], [1, 1], [2, 2], [2, 1]], [[1, 0], [0, 0], [1, 1], [2, 0]], [[1, 0], [0, 1], [1, 1], [2, 1]], [[1, 0], [0, 1], [1, 1], [1, 2]], [[1, 0], [0, 1], [1, 1], [0, 2]], [[1, 0], [0, 1], [1, 1], [2, 2]], [[1, 0], [0, 1], [1, 1], [0, 0]], [[1, 0], [0, 1], [1, 1], [2, 0]], [[1, 0], [2, 1], [2, 2], [1, 2]], [[1, 0], [2, 1], [2, 2], [1, 1]], [[1, 0], [2, 1], [1, 1], [1, 2]], [[1, 0], [2, 1], [1, 1], [0, 1]], [[1, 0], [2, 1], [1, 1], [0, 2]], [[1, 0], [2, 1], [1, 1], [2, 2]], [[1, 0], [2, 1], [1, 1], [0, 0]], [[1, 0], [2, 1], [1, 1], [2, 0]], [[1, 0], [2, 1], [2, 0], [1, 1]], [[2, 0], [1, 0], [1, 1], [2, 1]], [[2, 0], [1, 0], [1, 1], [1, 2]], [[2, 0], [1, 0], [1, 1], [0, 1]], [[2, 0], [1, 0], [1, 1], [0, 1], [0, 2]], [[2, 0], [1, 0], [1, 1], [0, 1], [0, 0]], [[2, 0], [1, 0], [1, 1], [0, 1], [1, 2]], [[2, 0], [1, 0], [1, 1], [0, 2]], [[2, 0], [1, 0], [1, 1], [0, 2], [1, 2]], [[2, 0], [1, 0], [1, 1], [0, 2], [0, 1]], [[2, 0], [1, 0], [1, 1], [0, 2], [0, 1], [0, 0]], [[2, 0], [1, 0], [1, 1], [0, 2], [0, 1], [1, 2]], [[2, 0], [1, 0], [1, 1], [2, 2]], [[2, 0], [1, 0], [1, 1], [2, 2], [1, 2]], [[2, 0], [1, 0], [1, 1], [2, 2], [1, 2], [0, 2]], [[2, 0], [1, 0], [1, 1], [2, 2], [1, 2], [0, 1]], [[2, 0], [1, 0], [1, 1], [2, 2], [1, 2], [2, 1]], [[2, 0], [1, 0], [1, 1], [2, 2], [2, 1]], [[2, 0], [1, 0], [1, 1], [0, 0]], [[2, 0], [1, 0], [1, 1], [0, 0], [0, 1]], [[2, 0], [1, 0], [0, 0], [0, 1]], [[2, 0], [1, 0], [0, 0], [1, 1]], [[2, 0], [1, 0], [0, 1], [1, 1]], [[2, 0], [1, 0], [0, 1], [0, 2]], [[2, 0], [1, 0], [0, 1], [0, 0]], [[2, 0], [1, 0], [0, 1], [1, 2]], [[2, 0], [1, 0], [0, 1], [1, 2], [2, 2]], [[2, 0], [1, 0], [0, 1], [1, 2], [0, 2]], [[2, 0], [1, 0], [0, 1], [1, 2], [1, 1]], [[2, 0], [1, 0], [0, 1], [1, 2], [2, 1]], [[2, 0], [1, 0], [2, 1], [2, 2]], [[2, 0], [1, 0], [2, 1], [2, 2], [1, 2]], [[2, 0], [1, 0], [2, 1], [2, 2], [1, 1]], [[2, 0], [1, 0], [2, 1], [1, 1]], [[2, 0], [1, 0], [2, 1], [1, 2]], [[0, 1], [1, 0], [2, 0], [2, 1]], [[0, 1], [1, 0], [2, 0], [2, 1], [2, 2]], [[0, 1], [1, 0], [2, 0], [2, 1], [1, 1]], [[0, 1], [1, 0], [2, 0], [2, 1], [1, 2]], [[0, 1], [1, 0], [2, 0], [1, 1]], [[0, 1], [1, 0], [2, 0], [1, 1], [2, 1]], [[0, 1], [1, 0], [2, 0], [1, 1], [1, 2]], [[0, 1], [1, 0], [2, 0], [1, 1], [0, 2]], [[0, 1], [1, 0], [2, 0], [1, 1], [2, 2]], [[0, 1], [1, 0], [2, 0], [1, 1], [2, 2], [1, 2]], [[0, 1], [1, 0], [2, 0], [1, 1], [2, 2], [2, 1]], [[0, 1], [1, 0], [2, 0], [1, 1], [0, 0]], [[0, 1], [1, 0], [1, 1], [2, 1]], [[0, 1], [1, 0], [1, 1], [1, 2]], [[0, 1], [1, 0], [1, 1], [0, 2]], [[0, 1], [1, 0], [1, 1], [0, 2], [1, 2]], [[0, 1], [1, 0], [1, 1], [2, 2]], [[0, 1], [1, 0], [1, 1], [2, 2], [1, 2]], [[0, 1], [1, 0], [1, 1], [2, 2], [2, 1]], [[0, 1], [1, 0], [1, 1], [0, 0]], [[0, 1], [1, 0], [1, 1], [2, 0]], [[0, 1], [1, 0], [1, 1], [2, 0], [2, 1]], [[0, 1], [1, 0], [0, 0], [1, 1]], [[0, 1], [1, 0], [2, 1], [2, 2]], [[0, 1], [1, 0], [2, 1], [2, 2], [1, 2]], [[0, 1], [1, 0], [2, 1], [2, 2], [1, 1]], [[0, 1], [1, 0], [2, 1], [1, 1]], [[0, 1], [1, 0], [2, 1], [2, 0]], [[0, 1], [1, 0], [2, 1], [1, 2]], [[0, 1], [1, 0], [2, 1], [1, 2], [2, 2]], [[0, 1], [1, 0], [2, 1], [1, 2], [0, 2]], [[0, 1], [1, 0], [2, 1], [1, 2], [1, 1]], [[1, 1], [0, 1], [1, 0], [2, 0]], [[1, 1], [0, 1], [1, 0], [2, 0], [2, 1]], [[1, 1], [0, 1], [1, 0], [0, 0]], [[1, 1], [0, 1], [1, 0], [2, 1]], [[1, 1], [0, 1], [1, 0], [2, 1], [2, 2]], [[1, 1], [0, 1], [1, 0], [2, 1], [2, 0]], [[1, 1], [0, 1], [1, 0], [2, 1], [1, 2]], [[1, 1], [1, 0], [2, 0], [2, 1]], [[1, 1], [1, 0], [2, 0], [2, 1], [2, 2]], [[1, 1], [1, 0], [2, 0], [2, 1], [2, 2], [1, 2]], [[1, 1], [1, 0], [2, 0], [2, 1], [1, 2]], [[1, 1], [1, 0], [0, 0], [0, 1]], [[1, 1], [1, 0], [0, 1], [0, 2]], [[1, 1], [1, 0], [0, 1], [0, 0]], [[1, 1], [1, 0], [0, 1], [1, 2]], [[1, 1], [1, 0], [2, 1], [2, 2]], [[1, 1], [1, 0], [2, 1], [2, 2], [1, 2]], [[1, 1], [1, 0], [2, 1], [2, 2], [1, 2], [0, 2]], [[1, 1], [1, 0], [2, 1], [2, 2], [1, 2], [0, 1]], [[1, 1], [1, 0], [2, 1], [2, 0]], [[1, 1], [1, 0], [2, 1], [1, 2]], [[1, 1], [0, 2], [0, 1], [0, 0]], [[1, 1], [0, 2], [0, 1], [1, 2]], [[1, 1], [0, 2], [0, 1], [1, 0]], [[1, 1], [0, 2], [0, 1], [1, 0], [2, 0]], [[1, 1], [0, 2], [0, 1], [1, 0], [2, 0], [2, 1]], [[1, 1], [0, 2], [0, 1], [1, 0], [0, 0]], [[1, 1], [0, 2], [0, 1], [1, 0], [2, 1]], [[1, 1], [2, 2], [1, 2], [0, 2]], [[1, 1], [2, 2], [1, 2], [0, 1]], [[1, 1], [2, 2], [1, 2], [2, 1]], [[1, 1], [2, 2], [2, 1], [2, 0]], [[1, 1], [2, 2], [2, 1], [1, 2]], [[1, 1], [2, 2], [2, 1], [1, 0]], [[1, 1], [2, 0], [1, 0], [0, 0]], [[1, 1], [2, 0], [1, 0], [0, 0], [0, 1]], [[1, 1], [2, 0], [1, 0], [0, 1]], [[1, 1], [2, 0], [1, 0], [0, 1], [0, 2]], [[1, 1], [2, 0], [1, 0], [0, 1], [0, 0]], [[1, 1], [2, 0], [1, 0], [0, 1], [1, 2]], [[1, 1], [2, 0], [1, 0], [2, 1]], [[2, 1], [2, 2], [1, 2], [0, 2]], [[2, 1], [2, 2], [1, 2], [1, 1]], [[2, 1], [2, 2], [1, 2], [0, 1]], [[2, 1], [2, 2], [1, 1], [1, 2]], [[2, 1], [2, 2], [1, 1], [0, 1]], [[2, 1], [2, 2], [1, 1], [1, 0]], [[2, 1], [2, 2], [1, 1], [1, 0], [2, 0]], [[2, 1], [2, 2], [1, 1], [1, 0], [0, 0]], [[2, 1], [2, 2], [1, 1], [1, 0], [0, 1]], [[2, 1], [2, 2], [1, 1], [0, 2]], [[2, 1], [2, 2], [1, 1], [0, 2], [1, 2]], [[2, 1], [2, 2], [1, 1], [0, 2], [0, 1]], [[2, 1], [2, 2], [1, 1], [0, 2], [0, 1], [0, 0]], [[2, 1], [2, 2], [1, 1], [0, 2], [0, 1], [1, 2]], [[2, 1], [2, 2], [1, 1], [0, 2], [0, 1], [1, 0]], [[2, 1], [2, 2], [1, 1], [0, 0]], [[2, 1], [2, 2], [1, 1], [2, 0]], [[2, 1], [2, 0], [1, 0], [1, 1]], [[2, 1], [2, 0], [1, 0], [1, 1], [1, 2]], [[2, 1], [2, 0], [1, 0], [1, 1], [0, 1]], [[2, 1], [2, 0], [1, 0], [1, 1], [0, 2]], [[2, 1], [2, 0], [1, 0], [1, 1], [2, 2]], [[2, 1], [2, 0], [1, 0], [1, 1], [0, 0]], [[2, 1], [2, 0], [1, 0], [0, 0]], [[2, 1], [2, 0], [1, 0], [0, 1]], [[2, 1], [1, 0], [2, 0], [1, 1]], [[2, 1], [1, 0], [2, 0], [1, 1], [1, 2]], [[2, 1], [1, 0], [2, 0], [1, 1], [0, 1]], [[2, 1], [1, 0], [2, 0], [1, 1], [0, 1], [0, 2]], [[2, 1], [1, 0], [2, 0], [1, 1], [0, 1], [0, 0]], [[2, 1], [1, 0], [2, 0], [1, 1], [0, 1], [1, 2]], [[2, 1], [1, 0], [2, 0], [1, 1], [0, 2]], [[2, 1], [1, 0], [2, 0], [1, 1], [2, 2]], [[2, 1], [1, 0], [2, 0], [1, 1], [2, 2], [1, 2]], [[2, 1], [1, 0], [2, 0], [1, 1], [0, 0]], [[2, 1], [1, 0], [1, 1], [1, 2]], [[2, 1], [1, 0], [1, 1], [0, 1]], [[2, 1], [1, 0], [1, 1], [0, 1], [0, 2]], [[2, 1], [1, 0], [1, 1], [0, 1], [0, 0]], [[2, 1], [1, 0], [1, 1], [0, 1], [1, 2]], [[2, 1], [1, 0], [1, 1], [0, 2]], [[2, 1], [1, 0], [1, 1], [0, 2], [1, 2]], [[2, 1], [1, 0], [1, 1], [0, 2], [0, 1]], [[2, 1], [1, 0], [1, 1], [0, 2], [0, 1], [0, 0]], [[2, 1], [1, 0], [1, 1], [0, 2], [0, 1], [1, 2]], [[2, 1], [1, 0], [1, 1], [2, 2]], [[2, 1], [1, 0], [1, 1], [2, 2], [1, 2]], [[2, 1], [1, 0], [1, 1], [0, 0]], [[2, 1], [1, 0], [1, 1], [2, 0]], [[2, 1], [1, 0], [0, 0], [0, 1]], [[2, 1], [1, 0], [0, 0], [1, 1]], [[2, 1], [1, 0], [0, 1], [1, 1]], [[2, 1], [1, 0], [0, 1], [0, 2]], [[2, 1], [1, 0], [0, 1], [0, 0]], [[2, 1], [1, 0], [0, 1], [1, 2]], [[0, 2], [0, 1], [1, 1], [2, 1]], [[0, 2], [0, 1], [1, 1], [1, 2]], [[0, 2], [0, 1], [1, 1], [1, 0]], [[0, 2], [0, 1], [1, 1], [2, 2]], [[0, 2], [0, 1], [1, 1], [0, 0]], [[0, 2], [0, 1], [1, 1], [2, 0]], [[0, 2], [0, 1], [1, 0], [2, 0]], [[0, 2], [0, 1], [1, 0], [2, 0], [2, 1]], [[0, 2], [0, 1], [1, 0], [2, 0], [2, 1], [2, 2]], [[0, 2], [0, 1], [1, 0], [2, 0], [2, 1], [1, 1]], [[0, 2], [0, 1], [1, 0], [2, 0], [2, 1], [1, 2]], [[0, 2], [0, 1], [1, 0], [2, 0], [1, 1]], [[0, 2], [0, 1], [1, 0], [2, 0], [1, 1], [2, 1]], [[0, 2], [0, 1], [1, 0], [2, 0], [1, 1], [1, 2]], [[0, 2], [0, 1], [1, 0], [2, 0], [1, 1], [2, 2]], [[0, 2], [0, 1], [1, 0], [2, 0], [1, 1], [2, 2], [1, 2]], [[0, 2], [0, 1], [1, 0], [2, 0], [1, 1], [2, 2], [2, 1]], [[0, 2], [0, 1], [1, 0], [2, 0], [1, 1], [0, 0]], [[0, 2], [0, 1], [1, 0], [1, 1]], [[0, 2], [0, 1], [1, 0], [1, 1], [2, 1]], [[0, 2], [0, 1], [1, 0], [1, 1], [1, 2]], [[0, 2], [0, 1], [1, 0], [1, 1], [2, 2]], [[0, 2], [0, 1], [1, 0], [1, 1], [2, 2], [1, 2]], [[0, 2], [0, 1], [1, 0], [1, 1], [2, 2], [2, 1]], [[0, 2], [0, 1], [1, 0], [1, 1], [0, 0]], [[0, 2], [0, 1], [1, 0], [1, 1], [2, 0]], [[0, 2], [0, 1], [1, 0], [0, 0]], [[0, 2], [0, 1], [1, 0], [0, 0], [1, 1]], [[0, 2], [0, 1], [1, 0], [2, 1]], [[0, 2], [0, 1], [1, 0], [2, 1], [2, 2]], [[0, 2], [0, 1], [1, 0], [2, 1], [1, 1]], [[0, 2], [0, 1], [1, 0], [2, 1], [2, 0]], [[0, 2], [0, 1], [1, 0], [2, 1], [2, 0], [1, 1]], [[0, 2], [0, 1], [1, 0], [2, 1], [1, 2]], [[0, 2], [0, 1], [1, 0], [2, 1], [1, 2], [2, 2]], [[0, 2], [0, 1], [1, 0], [2, 1], [1, 2], [1, 1]], [[0, 2], [1, 1], [2, 2], [1, 2]], [[0, 2], [1, 1], [2, 2], [2, 1]], [[1, 2], [2, 2], [2, 1], [1, 1]], [[1, 2], [2, 2], [2, 1], [2, 0]], [[1, 2], [2, 2], [2, 1], [1, 0]], [[1, 2], [2, 2], [2, 1], [1, 0], [2, 0]], [[1, 2], [2, 2], [2, 1], [1, 0], [1, 1]], [[1, 2], [2, 2], [2, 1], [1, 0], [0, 0]], [[1, 2], [2, 2], [2, 1], [1, 0], [0, 0], [0, 1]], [[1, 2], [2, 2], [2, 1], [1, 0], [0, 0], [1, 1]], [[1, 2], [2, 2], [2, 1], [1, 0], [0, 1]], [[1, 2], [2, 2], [1, 1], [2, 1]], [[1, 2], [2, 2], [1, 1], [0, 1]], [[1, 2], [2, 2], [1, 1], [0, 1], [0, 2]], [[1, 2], [2, 2], [1, 1], [0, 1], [0, 0]], [[1, 2], [2, 2], [1, 1], [0, 1], [1, 0]], [[1, 2], [2, 2], [1, 1], [1, 0]], [[1, 2], [2, 2], [1, 1], [1, 0], [2, 0]], [[1, 2], [2, 2], [1, 1], [1, 0], [2, 0], [2, 1]], [[1, 2], [2, 2], [1, 1], [1, 0], [0, 0]], [[1, 2], [2, 2], [1, 1], [1, 0], [0, 1]], [[1, 2], [2, 2], [1, 1], [1, 0], [2, 1]], [[1, 2], [2, 2], [1, 1], [0, 2]], [[1, 2], [2, 2], [1, 1], [0, 0]], [[1, 2], [2, 2], [1, 1], [2, 0]], [[1, 2], [2, 2], [1, 1], [2, 0], [2, 1]], [[1, 2], [2, 2], [1, 1], [2, 0], [1, 0]], [[1, 2], [2, 2], [1, 1], [2, 0], [1, 0], [0, 0]], [[1, 2], [2, 2], [1, 1], [2, 0], [1, 0], [0, 1]], [[1, 2], [2, 2], [1, 1], [2, 0], [1, 0], [2, 1]], [[1, 2], [0, 1], [1, 0], [2, 0]], [[1, 2], [0, 1], [1, 0], [2, 0], [2, 1]], [[1, 2], [0, 1], [1, 0], [2, 0], [1, 1]], [[1, 2], [0, 1], [1, 0], [1, 1]], [[1, 2], [0, 1], [1, 0], [0, 0]], [[1, 2], [0, 1], [1, 0], [0, 0], [1, 1]], [[1, 2], [0, 1], [1, 0], [2, 1]], [[1, 2], [0, 1], [1, 0], [2, 1], [2, 2]], [[1, 2], [0, 1], [1, 0], [2, 1], [1, 1]], [[1, 2], [0, 1], [1, 0], [2, 1], [2, 0]], [[2, 2], [1, 2], [0, 1], [1, 1]], [[2, 2], [1, 2], [0, 1], [0, 2]], [[2, 2], [1, 2], [0, 1], [0, 0]], [[2, 2], [1, 2], [0, 1], [1, 0]], [[2, 2], [2, 1], [1, 1], [1, 2]], [[2, 2], [2, 1], [1, 1], [0, 1]], [[2, 2], [2, 1], [1, 1], [1, 0]], [[2, 2], [2, 1], [1, 1], [0, 2]], [[2, 2], [2, 1], [1, 1], [0, 0]], [[2, 2], [2, 1], [1, 1], [2, 0]], [[2, 2], [2, 1], [2, 0], [1, 0]], [[2, 2], [2, 1], [2, 0], [1, 1]], [[2, 2], [2, 1], [1, 0], [2, 0]], [[2, 2], [2, 1], [1, 0], [1, 1]], [[2, 2], [2, 1], [1, 0], [1, 1], [1, 2]], [[2, 2], [2, 1], [1, 0], [1, 1], [0, 1]], [[2, 2], [2, 1], [1, 0], [1, 1], [0, 2]], [[2, 2], [2, 1], [1, 0], [1, 1], [0, 0]], [[2, 2], [2, 1], [1, 0], [1, 1], [2, 0]], [[2, 2], [2, 1], [1, 0], [0, 0]], [[2, 2], [2, 1], [1, 0], [0, 0], [0, 1]], [[2, 2], [2, 1], [1, 0], [0, 0], [1, 1]], [[2, 2], [2, 1], [1, 0], [0, 1]], [[2, 2], [2, 1], [1, 0], [0, 1], [1, 1]], [[2, 2], [2, 1], [1, 0], [0, 1], [0, 2]], [[2, 2], [2, 1], [1, 0], [0, 1], [0, 0]], [[2, 2], [2, 1], [1, 0], [0, 1], [1, 2]], [[2, 2], [1, 1], [0, 1], [0, 2]], [[2, 2], [1, 1], [0, 1], [0, 0]], [[2, 2], [1, 1], [0, 1], [1, 2]], [[2, 2], [1, 1], [0, 1], [1, 0]], [[2, 2], [1, 1], [0, 1], [1, 0], [2, 0]], [[2, 2], [1, 1], [0, 1], [1, 0], [0, 0]], [[2, 2], [1, 1], [0, 1], [1, 0], [2, 1]], [[2, 2], [1, 1], [1, 0], [2, 0]], [[2, 2], [1, 1], [1, 0], [0, 0]], [[2, 2], [1, 1], [1, 0], [0, 0], [0, 1]], [[2, 2], [1, 1], [1, 0], [0, 1]], [[2, 2], [1, 1], [1, 0], [2, 1]], [[2, 2], [1, 1], [0, 2], [1, 2]], [[2, 2], [1, 1], [0, 2], [0, 1]], [[2, 2], [1, 1], [0, 2], [0, 1], [0, 0]], [[2, 2], [1, 1], [0, 2], [0, 1], [1, 2]], [[2, 2], [1, 1], [0, 2], [0, 1], [1, 0]], [[2, 2], [1, 1], [0, 2], [0, 1], [1, 0], [2, 0]], [[2, 2], [1, 1], [0, 2], [0, 1], [1, 0], [2, 0], [2, 1]], [[2, 2], [1, 1], [0, 2], [0, 1], [1, 0], [0, 0]], [[2, 2], [1, 1], [0, 2], [0, 1], [1, 0], [2, 1]], [[2, 2], [1, 1], [2, 0], [2, 1]], [[2, 2], [1, 1], [2, 0], [1, 0]]];
var boggle_heats =  [[0.122448979591837, 0.497959183673469, 0.0], [1.0, 0.877551020408163, 0.13469387755102], [0.228571428571429, 0.440816326530612, 0.257142857142857]];

function drawHeatRects(ctx, boggle_heats) {
  var x, y, text_x, text_y;

  var rows = boggle_heats.length;
  var cols = boggle_heats[0].length;
  var row_height = ctx.canvas.height / rows;
  var col_width  = ctx.canvas.width  / cols;
  
  var drawHeatRect = function(col,row) {
    return function() {
      var x = col * col_width;
      var y = row * row_height;
      ctx.fillStyle = "rgba(255,0,0," + boggle_heats[col][row] + ")";
      ctx.fillRect(x,y, col_width, row_height);
    }
  }
  
  var i = 0;
  for (var col = 0; col < cols; col++) {
    i++;
    for (var row = 0; row < rows; row++) {
      i++;
       setTimeout(drawHeatRect(col,row), 100*i);
    }
  }
}

function drawPath(ctx, path) {
  ctx.clearRect(0,0, 400, 400);
  var rows = 3;
  var cols = 3;
  var row_height = ctx.canvas.height / rows;
  var col_width  = ctx.canvas.width  / cols;
  var last_point = null;
  
  ctx.strokeStyle = "rgb(0,255,0)";
  
  var drawLine = function(x1,y1,x2,y2) {
    return function() {
      ctx.lineWidth = 2;
      ctx.moveTo(x1,y1);
      ctx.lineTo(x2,y2);
      ctx.stroke();
    }
  }
  
  for (var i = 0; i < path.length; i++) {
    if (last_point) {
      var x1 = last_point[0] * col_width + (col_width / 2);
      var y1 = last_point[1] * row_height + (row_height / 2);
      
      var x2 = path[i][0] * col_width + (col_width / 2);
      var y2 = path[i][1] * row_height + (row_height / 2);
      
      console.log(x1 + ", " + y1 + ". " + x2 + ", " + y2);
      
      setTimeout(drawLine(x1,y1,x2,y2), 250*i);
    }
    last_point = path[i];
  }
}

function drawPathHelper(ctx, path) {
  return function() {
    drawPath(ctx, path);
  }
}

function drawPaths(ctx, paths) {
  for (var i = 0; i < paths.length; i++) {
    setTimeout(drawPathHelper(ctx, paths[i]), 5000*i);
  }
}

function drawGrid(ctx, boggle_tiles) {
  var x, y, text_x, text_y;

  var rows = boggle_tiles.length;
  var cols = boggle_tiles[0].length;
  var row_height = ctx.canvas.height / rows;
  var col_width  = ctx.canvas.width  / cols;
  
  ctx.lineWidth = 1;
  ctx.strokeStyle = "rgb(0,0,0)";
  ctx.fillStyle = "rgb(0,0,0)";
  ctx.font = "normal 48px sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  for (var col = 0; col < cols; col++) {
    for (var row = 0; row < rows; row++) {
       x = col * col_width;
       y = row * row_height;
       ctx.strokeRect(x,y, col_width, row_height);
       text_x = col * col_width + (col_width / 2);
       text_y = row * row_height + (row_height / 2);
       ctx.fillText(boggle_tiles[row][col], text_x, text_y);
    }
  }
}

// drawHeatRects(context1, boggle_heats);
drawGrid(context2, boggle_tiles);
drawPaths(context1, paths);