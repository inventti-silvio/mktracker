function Cursor(el) {
    this.el = el;    
    this.counter = 0;
    this.index = 0;
    this.tick = 25;
}

Cursor.prototype.track = function(coords) {
    setInterval(function() {
        var coord = coords[this.index];
        this.el.style.left = coord.x + 'px'; 
        this.el.style.top = coord.y + 'px'; 
        this.counter++;
        this.index = this.counter % coords.length;
    }.bind(this), this.tick);
}

function Mouse(el) {
	this.el = el;
    this.recording = false;
    this.playing = false;
    this.events = [];
    this.tick = 25;
    this.ok = true;
    setInterval(function() {
       this.ok = true; 
    }.bind(this), this.tick);
}

Mouse.prototype.record = function(event) {
    this.el.addEventListener(event, function(e) {
        if(this.ok) {
            this.events.push(e);
            this.ok = false;
        }
    }.bind(this))
};

Mouse.prototype.recordWheel = function() {
    this.el
}

Mouse.prototype.play = function() {
    
    setInterval(function() {
        
    }, 1000);
};

Mouse.prototype.stop = function() {
    this.recording = false;
    this.playing = false;
};

Mouse.prototype.coords = function() {
    return this.events.map(function(e) {
        return {x:e.x, y:e.y}
    });
};

Mouse.prototype.createHeatmap = function(heat) {
    this.coords().forEach(function(coord) {
        coord.value = 0.1;
        heat.addData(coord);
    });
}