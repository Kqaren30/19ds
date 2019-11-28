class Graph {
    constructor() {
        this.edges = {};
        this.vertex = [];
        this.count = 0;
        this.count2 = 0;
        this.mult=false;
        this.conjuntos=new Array;
    }

    addVertex(vertice) {
        this.vertex.push(vertice);
        this.edges[vertice] = [];
        this.count2++;
    }

    addEdge(v1, v2) {
        this.edges[v1].push({
            vertice: v2
        });
        this.edges[v2].push({
            vertice: v1
        });
        //extra  
        if(!this.conjuntos[this.count]){this.conjuntos[this.count]=[];
            this.conjuntos[this.count][0]=v1;
            this.conjuntos[this.count][1]=v2;}
        this.count++;
        if(v1===v2){
            this.mult=true;
        }

    }


    printGraph() {
        let graph = "";
        this.vertex.forEach(vertice => {
            graph += vertice + " -> " + this.edges[vertice].map(n => n.vertice).join("-") + "\n";
        });
        console.log(graph);
    }

    isComplete() {
        let result = false;
        let aux = (this.count2 * (this.count2 - 1)) / 2;
        if (this.count === aux) {
            result = true;
        } else result = false

        return result;

    }

    isMultigraph() {

        return this.mult;

    }

    nombres(g){
        let result=false;
        for(let i=0;i<this.vertex.length;i++){
        if(this.vertex[i]==g.vertex[i]){
            result=true;
        }else {result=false;}
        }

        return result;
    }

    pares(g){
        let result=false;
        for(let i=0;i<this.count;i++){
            for(let k=0;k<2;k++){
            if(this.conjuntos[i][k]===g.conjuntos[i][k]){
                result=true;
            }else {result=false;
}
            }}
        
                return result;

    }
    isSubgraph(g) {
        let result=false;
        if(this.pares(g)===this.nombres(g)){
            result=true
        }
        return result;
    }

}

//test


var g = new Graph(6);
var vertices = ['1', '2', '3', '4', '5', '6'];
for (var i = 0; i < vertices.length; i++) {
    g.addVertex(vertices[i]);
}

g.addEdge('1', '2');
g.addEdge('2', '3');
g.addEdge('3', '4');
g.addEdge('4', '1');
g.addEdge('1', '3');
g.addEdge('4', '2');
g.addEdge('3', '6');
g.addEdge('5', '6');

g.printGraph();
console.log(g.isComplete());
console.log(g.isMultigraph());
/*
Resultado:
1 -> 2-4-3
2 -> 1-3-4
3 -> 2-4-1-6
4 -> 3-1-2
5 -> 6
6 -> 3-5
false
false
*/

var g2 = new Graph(3);
var vertices2 = ['1', '2', '3', '4'];
for (var i = 0; i < vertices2.length; i++) {
    g2.addVertex(vertices2[i]);
}
g2.addEdge('1', '2');
g2.addEdge('2', '3');
g2.addEdge('3', '4');
g2.addEdge('4', '1');
g2.addEdge('1', '3');
g2.addEdge('4', '2');

g2.printGraph();
console.log(g2.isComplete());
console.log(g2.isMultigraph());
console.log(g2.isSubgraph(g));
/*
Resultado:
1 -> 2-4-3
2 -> 1-3-4
3 -> 2-4-1
4 -> 3-1-2
true
false
true
*/


var g3 = new Graph(2);
var vertices3 = ['1', '2'];
for (var i = 0; i < vertices3.length; i++) {
    g3.addVertex(vertices3[i]);
}
g3.addEdge('1', '1');
g3.addEdge('1', '2');

g3.printGraph();
console.log(g3.isComplete());
console.log(g3.isMultigraph());
console.log(g3.isSubgraph(g));
/*
1 -> 1-1-2
2 -> 1
false
true
false
*/