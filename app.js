function dijkstra(graph, start) {

    const distances = {};
    for (let vertex in graph) {
        distances[vertex] = Infinity;
    }
    distances[start] = 0;


    const pq = new PriorityQueue();
    pq.enqueue(start, 0);


    const visited = new Set();

    while (!pq.isEmpty()) {
        const { vertex: currentVertex, priority: currentDistance } = pq.dequeue();


        if (visited.has(currentVertex)) continue;


        visited.add(currentVertex);


        for (let neighbor in graph[currentVertex]) {
            const distance = graph[currentVertex][neighbor];
            const newDistance = currentDistance + distance;

            // Only consider this new path if it's better
            if (newDistance < distances[neighbor]) {
                distances[neighbor] = newDistance;
                pq.enqueue(neighbor, newDistance);
            }
        }
    }

    return distances;
}

class PriorityQueue {
    constructor() {
        this.collection = [];
    }

    enqueue(vertex, priority) {
        this.collection.push({ vertex, priority });
        this.collection.sort((a, b) => a.priority - b.priority);
    }

    dequeue() {
        return this.collection.shift();
    }

    isEmpty() {
        return this.collection.length === 0;
    }
}


const graph = {
    'A': { 'B': 4, 'C': 2 },
    'B': { 'A': 4, 'C': 5, 'D': 10 },
    'C': { 'A': 2, 'B': 5, 'D': 3 },
    'D': { 'B': 10, 'C': 3 }
};

const result = dijkstra(graph, 'A');
console.log(result);  