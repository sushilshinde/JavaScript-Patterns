$(document).ready(function() {

	var Book = (function() {
		var _private = {
				chapterCounter : 0,				
				pages:10,
				containerID:'#c',
				url : 'data.jsp',
				
				init : function(config){
					this.pages = config.pages || this.pages;
					this.containerID = config.containerID || this.containerID;
					this.url = config.url || this.url;					
				},
				
				start : function(){					
					var p = this.load();					
					for ( var i = this.chapterCounter; i <= this.pages; i++) {
						p = p.then(this.appendContent.bind(this));
					}
				},
				
				load: function() {
					var chapter = ++this.chapterCounter;
					var _this = this;
					return new Promise(function(append, cry) {
						$.get(_this.url + "?chapter=" + chapter, append);
					});
				},
				appendContent : function(r) {
					var div = $(this.containerID);// $('#c');
					div.css("height", div.height());
					div.children().append(r).append("<br>");
					div.animate({
						height : div.children().height()
					}, 500);
					return this.load();
				}
			};
		
		function _Book(config) {
			_private.init(config)
		}
		
		_Book.prototype = {
			load : function() {
				_private.start();
			}
		};

		return _Book;
	})();
	
	var b = new Book({
		pages: 15
	});
	b.load();
});