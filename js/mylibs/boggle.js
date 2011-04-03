
var boggle_tiles = [["n","u","s","l"],["r","x","n","i"],["m","u","a","i"],["a","s","m","g"]];
var boggle_paths = [[[1,0],[0,0],[0,1],[1,2],[2,1]],[[1,0],[0,1],[1,2],[1,3]],[[1,0],[2,1],[2,2],[2,3],[3,2]],[[1,0],[2,1],[2,2],[1,2]],[[1,0],[2,1],[1,2],[0,1],[0,0]],[[2,0],[2,1],[2,2],[3,3]],[[2,0],[2,1],[2,2],[3,1],[3,0]],[[2,0],[2,1],[1,2],[0,2]],[[2,0],[2,1],[1,2],[2,3]],[[2,0],[2,1],[1,2],[0,1]],[[2,0],[2,1],[3,2],[3,3]],[[2,0],[2,1],[1,0],[0,1]],[[2,0],[1,0],[0,1],[0,2],[0,3]],[[2,0],[3,1],[2,1],[2,2]],[[2,0],[3,1],[2,1],[1,2],[1,3]],[[2,0],[3,1],[2,2],[2,3]],[[3,0],[3,1],[3,2],[2,1]],[[3,0],[3,1],[2,1],[2,2]],[[3,0],[3,1],[2,1],[1,2],[1,3]],[[3,0],[3,1],[2,1],[1,2],[0,2]],[[3,0],[3,1],[2,1],[1,2],[2,3]],[[3,0],[3,1],[2,1],[1,0],[2,0]],[[3,0],[3,1],[2,2],[1,3]],[[0,1],[1,2],[1,3],[2,3],[2,2]],[[0,1],[1,2],[1,3],[0,3]],[[0,1],[1,2],[1,3],[0,2],[0,3]],[[0,1],[1,2],[1,3],[2,2]],[[0,1],[1,2],[2,3],[2,2],[2,1]],[[0,1],[1,0],[2,0],[3,1],[2,1]],[[1,1],[0,2],[0,3],[1,3]],[[2,1],[3,1],[2,2],[1,3]],[[2,1],[2,2],[3,2],[3,3]],[[2,1],[2,2],[1,3],[1,2],[0,3]],[[2,1],[2,2],[3,1],[3,0]],[[2,1],[2,2],[3,1],[2,0]],[[2,1],[1,2],[0,2],[0,3]],[[2,1],[1,2],[2,3],[2,2]],[[2,1],[3,2],[2,2],[1,3]],[[3,1],[2,1],[1,2],[0,1],[0,0]],[[3,1],[2,1],[3,2],[2,2]],[[3,1],[2,1],[1,0],[0,1],[0,0]],[[3,1],[2,2],[2,1],[1,2],[1,3]],[[3,1],[2,2],[2,1],[1,0],[2,0]],[[3,1],[2,0],[1,0],[0,1],[1,2],[1,3]],[[0,2],[1,2],[1,3],[0,3]],[[0,2],[1,2],[1,3],[2,2]],[[0,2],[1,2],[2,1],[3,1],[2,2]],[[0,2],[1,2],[2,1],[3,2],[2,2]],[[0,2],[0,3],[1,3],[1,2]],[[0,2],[0,3],[1,3],[2,2]],[[0,2],[0,3],[1,3],[2,2],[3,2]],[[0,2],[0,3],[1,3],[2,2],[3,1]],[[0,2],[0,3],[1,2],[1,1]],[[0,2],[0,3],[1,2],[2,1]],[[1,2],[0,1],[1,0],[2,0]],[[1,2],[2,1],[2,2],[2,3],[3,2]],[[1,2],[2,1],[2,0],[1,0],[0,0]],[[1,2],[2,1],[1,0],[0,1],[0,0]],[[2,2],[3,2],[2,1],[1,2]],[[2,2],[3,2],[2,1],[1,0]],[[2,2],[2,3],[3,2],[2,1]],[[2,2],[2,3],[3,2],[2,1],[3,1]],[[2,2],[2,1],[3,1],[3,0]],[[2,2],[2,1],[3,1],[2,0]],[[2,2],[2,1],[2,0],[1,0]],[[2,2],[2,1],[1,2],[1,3]],[[2,2],[2,1],[3,2],[2,3],[1,2],[1,3]],[[2,2],[2,1],[1,0],[2,0]],[[2,2],[3,1],[2,1],[1,2]],[[2,2],[3,1],[2,1],[1,0]],[[3,2],[2,2],[2,1],[1,2],[1,3]],[[3,2],[2,2],[2,1],[1,0],[2,0]],[[3,2],[2,1],[3,1],[2,2]],[[3,2],[2,1],[1,2],[0,1],[0,0]],[[3,2],[2,1],[1,0],[0,1],[0,0]],[[0,3],[0,2],[1,2],[2,1],[2,2],[2,3]],[[0,3],[1,2],[2,3],[2,2],[3,1],[3,0]],[[1,3],[2,3],[1,2],[0,1]],[[1,3],[0,3],[1,2],[0,2]],[[1,3],[0,3],[1,2],[2,3]],[[1,3],[0,3],[1,2],[0,1]],[[1,3],[0,3],[1,2],[2,1],[2,2]],[[1,3],[1,2],[0,1],[0,2],[0,3]],[[1,3],[0,2],[1,2],[0,1]],[[1,3],[2,2],[3,2],[2,3]],[[1,3],[2,2],[3,2],[2,1]],[[1,3],[2,2],[1,2],[0,2]],[[1,3],[2,2],[1,2],[2,3]],[[1,3],[2,2],[1,2],[0,1]],[[1,3],[2,2],[2,1],[2,0]],[[1,3],[2,2],[2,1],[2,0],[3,1]],[[1,3],[2,2],[3,1],[2,1]],[[1,3],[2,2],[3,1],[3,0]],[[2,3],[2,2],[3,2],[2,1]],[[2,3],[2,2],[3,2],[2,1],[2,0]],[[2,3],[2,2],[1,2],[1,1]],[[2,3],[2,2],[1,2],[2,1]],[[2,3],[2,2],[2,1],[3,1]],[[2,3],[2,2],[2,1],[3,1],[2,0]],[[2,3],[2,2],[2,1],[1,1]],[[2,3],[2,2],[2,1],[2,0]],[[2,3],[2,2],[2,1],[1,2],[1,3]],[[2,3],[2,2],[2,1],[1,2],[0,2],[0,3]],[[2,3],[2,2],[2,1],[3,2]],[[2,3],[2,2],[2,1],[1,0],[2,0]],[[2,3],[2,2],[1,3],[0,3]],[[2,3],[2,2],[1,3],[1,2]],[[2,3],[2,2],[3,3],[3,2]],[[2,3],[2,2],[3,1],[2,1]],[[2,3],[2,2],[3,1],[2,1],[2,0]],[[2,3],[2,2],[3,1],[3,0]],[[2,3],[1,2],[1,3],[0,3]],[[2,3],[1,2],[1,3],[2,2]],[[2,3],[1,2],[2,1],[3,1],[2,2]],[[2,3],[1,2],[2,1],[3,2],[2,2]],[[2,3],[3,2],[2,2],[2,1]],[[2,3],[3,2],[2,2],[1,3]],[[2,3],[3,2],[2,2],[1,3],[0,2]],[[2,3],[3,2],[2,2],[1,3],[0,2],[0,3]],[[2,3],[3,2],[2,1],[2,2]],[[2,3],[3,2],[2,1],[1,1]],[[2,3],[3,2],[2,1],[1,2],[1,3]],[[2,3],[3,2],[2,1],[1,0],[2,0]],[[3,3],[2,2],[3,2],[2,1]],[[3,3],[2,2],[3,2],[2,1],[2,0]],[[3,3],[2,2],[2,3],[3,2],[2,1]],[[3,3],[2,2],[1,2],[1,3]],[[3,3],[2,2],[1,2],[0,2]],[[3,3],[2,2],[1,2],[2,3]],[[3,3],[2,2],[1,2],[0,1]],[[3,3],[2,2],[1,2],[2,1]],[[3,3],[2,2],[3,1],[2,1]],[[3,3],[2,2],[3,1],[2,1],[2,0]],[[3,3],[2,2],[3,1],[3,0]]];

function logLater(msg, delay) {
  setTimeout(function() {console.log(msg)}, delay);
}

function BoggleVisualizer(boggle_tiles, boggle_paths) {
  this.boggle_tiles = boggle_tiles;
  this.boggle_paths = boggle_paths;
  this.rows         = boggle_tiles.length;
  this.cols         = boggle_tiles[0].length;
  
  this.canvas = document.getElementById('canvas_layer1');
  this.ctx    = this.canvas.getContext('2d');
  
  this.drawing_paths    = false;
  this.current_path_idx = 0;
  this.word_delay       = 50;
  this.letter_delay     = 20;
  this.dirs             = {};
  
  this.makeGrid = function() {
    for (var r = 0; r < this.rows; r++) {
      $('#grid').append("<div class='row'></div>");
      for (var c = 0; c < this.cols; c++) {
        var letter = this.boggle_tiles[r][c];
        var cur_row = $(".row").last();
        var inner_div = "<div id='" + r + "_" + c + "_inner' class='inner'></div>";
        cur_row.append("<div class='letter' id='" + r + "_" + c + "'>" + letter.toUpperCase() + inner_div + "</div>");
        $("#" + r + "_" + c).mouseover(function() {
          var id = $(this).attr("id");
          $("#" + id + "_inner").show();
        }).mouseout(function() {
          var id = $(this).attr("id");
          $("#" + id + "_inner").hide();
        });
      }
    }
  }
  
  this.drawPathsHelper = function() {
    var that = this;
    return function() {
      that.drawPaths();
    }
  }
  
  this.drawPaths = function() {
    if (this.drawing_paths) {
      setTimeout(this.drawPathsHelper(), 50);
      return;
    }
    if (this.boggle_paths[this.current_path_idx]) {
      this.drawPath(this.boggle_paths[this.current_path_idx]);
      this.current_path_idx++;
      setTimeout(this.drawPathsHelper(), 50);
    }
  }
  
  this.drawPath = function(path, delay) {
    this.newWord();
    this.drawing_paths = true;
    delay = delay || 0;
    var row_height = 100;
    var col_width  = 100;
    var last_point = null;

    this.ctx.strokeStyle = "rgba(255,0,0,0.1)";

    var next_point, prev_point;
    for (var i = 0; i < path.length; i++) {
      var current_point = path[i];
      var next_point    = path[i+1];

      if (i > 0) {
        var prev_point = path[i-1];
        var x1 = (prev_point[0] * col_width)  + (col_width  / 2);
        var y1 = (prev_point[1] * row_height) + (row_height / 2);

        var x2 = (current_point[0] * col_width) + (col_width / 2);
        var y2 = (current_point[1] * row_height) + (row_height / 2);

        var new_delay = this.letter_delay*i + delay;

        setTimeout(this.drawLine(x1,y1,x2,y2), new_delay);
      }

      setTimeout(this.addLetterToWord(current_point, next_point), new_delay);
      setTimeout(this.highlightLetterPosition(current_point[0], current_point[1]), new_delay);
      prev_point = current_point;
    }
  }  
  
  this.finishedWord = function() {
    $(".word.current").removeClass("current");
    $(".letter.current_word").removeClass("current_word");
    $(".letter.current").removeClass("current");
    this.drawing_paths = false;
  }
  
  this.newWord = function() {
    $("#words").append("<div class='word current'></div>");
  }
  
  this.drawLine = function(x1,y1,x2,y2) {
    var ctx = this.ctx;
    return function() {
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(x1,y1);
      ctx.lineTo(x2,y2);
      ctx.stroke();
    }
  }
  
  this.addLetterToWord = function(current_point, next_point) {
    var that = this;
    return function() {
      var letter = that.boggle_tiles[current_point[1]][current_point[0]];
      $(".word.current").append( letter );
      if ( !next_point ) {
        setTimeout(function() {that.finishedWord();}, that.word_delay);
      } else {
        that.updateLetterData(current_point, next_point);
      }
    }
  }
  
  this.tile_id = function(point) {
    return point[1] + "_" + point[0];
  }
  
  this.updateLetterData = function(current_point, next_point) {
    var dir_data = this.getDirectionsForTilePair(current_point, next_point, this.dirs);
    this.dirs[this.tile_id(current_point)] = dir_data;
    this.updateDirections(current_point, dir_data);
    this.updateLetterBG(current_point, dir_data);
    this.highlightLetterPosition(current_point);
  }
  
  this.highlightLetterPosition = function(current_point) {
    $(".letter.current").removeClass("current").addClass("current_word");
    $("#" + this.tile_id(current_point)).addClass("current");
  }
  
  this.updateLetterBG = function(point, dir_data) {
    var letter = $("#" + this.tile_id(point));
    
    var scale = 1.0 / this.letter_trav_max;
    var bg_alpha = dir_data['max'] * scale;
    letter.css("background-color", "rgba(255,0,0," + bg_alpha + ")");
  }
  
  this.getDirectionsForTilePair = function(pointA, pointB, dir_collection) {
    var tile_id  = this.tile_id(pointA);
    var dir;
    if (typeof(dir_collection[tile_id]) == 'undefined') {
      dir = {n: 0, s: 0, e: 0, w: 0, se: 0, sw: 0, ne: 0, nw: 0, total: 0, max: 0};
    } else {
      dir = dir_collection[tile_id];
    }
    if (typeof(pointB) !== 'undefined') {
      var next_dir = this.getDir( pointA, pointB);
      dir[next_dir] += 1;
      dir['total']  += 1;
      dir['max']    = Math.max(dir['max'], dir[next_dir]);
    }
    
    return dir;
  }
  
  this.deriveDirections = function() {
    var dirs = {};

    for (var i = 0; i < this.boggle_paths.length; i++) {
      var cur_path = this.boggle_paths[i];
      for (var j = 0; j < cur_path.length; j++) {
        dirs[this.tile_id(cur_path[j])] = 
          this.getDirectionsForTilePair( cur_path[j], cur_path[j+1], dirs );
      }
    }

    return dirs;
  }

  this.getMaxFromDirs = function(dirs) {
    var max = 0;
    for (var r = 0; r < this.rows; r++) {
      for (var c = 0; c < this.cols; c++) {
        // row first, col second
        var dir = dirs[r + "_" + c];
        max = Math.max(max, dir['max']);
      }
    }
    return max;
  }
  
  this.getMaxLetterTraversal = function(dirs) {
    var max = 0;
    for (var r = 0; r < this.rows; r++) {
      for (var c = 0; c < this.cols; c++) {
        // row first, col second
        var dir = dirs[r + "_" + c];
        max = Math.max(max, dir['total']);
      }
    }
    return max;
  }
  
  this.htmlForDirections = function(single_dir_set) {
    var html = "";
    var dir_names = ['n','e','s','w','ne','se','nw','sw']
    for (var i = 0; i < dir_names.length; i++) {
      html = html + "<div class='" + dir_names[i] + "'>" + single_dir_set[dir_names[i]] + "</div>";
    }
    return html;
  }
  
  this.updateDirections = function(tile, dir) {
    var div_inner_id = this.tile_id(tile) + "_inner";
    var div_inner = $("#" + div_inner_id);
    div_inner.html(this.htmlForDirections(dir));
  }
  
  this.setUpDirectionsDivs = function(dirs) {
    for (var c = 0; c < this.cols; c++) {
      for (var r = 0; r < this.rows; r++) {
        var div_id = r + "_" + c;
        this.updateDirections([r,c], dirs[div_id]);
      }
    }
  }
  
  this.getDir = function(pointA, pointB) {
    var diff_x = pointB[0] - pointA[0];
    var diff_y = pointB[1] - pointA[1];

    switch(diff_y)
    {
    case 1:
      // S
      switch(diff_x) {
      case 1:
        return "se";
      case 0:
        return "s";
      case -1:
        return "sw";
      }
    case -1:
      // N
      switch(diff_x) {
      case 1:
        return "ne";
      case 0:
        return "n";
      case -1:
        return "nw";
      }
    case 0:
      switch(diff_x) {
      case 1:
        return "e";
      case -1:
        return "w";
      }
    }
  }
  
  this.derived_dirs      = this.deriveDirections(this.boggle_tiles);
  this.dir_max          = this.getMaxFromDirs(this.derived_dirs);
  this.letter_trav_max  = this.getMaxLetterTraversal(this.derived_dirs);
}

var bg = new BoggleVisualizer(boggle_tiles, boggle_paths);
bg.makeGrid();
bg.setUpDirectionsDivs(bg.deriveDirections());
