var tree
function setup() {
	noCanvas()
	tree = new Tree()
	for (var i = 0; i < 1000; i++){
		tree.addNode(floor(random(0, 1000)))
	}
	

	tree.search(61)
}





