function Tree(){
	this.root = null
}

Tree.prototype.traverse = function(){
    
}

Tree.prototype.search = function(val){
    this.root.search(val)
}

Tree.prototype.addNode = function(x){
	var n = new Node(x)
	if(this.root == null){
		this.root = n;
	}else{
		this.root.addNode(n)
	}
}