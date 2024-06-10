function dijkstra(graph, start) {
    // Initialize distances with "Infinity", except for the start node
    const distances = {};
    for (let vertex in graph) {
        distances[vertex] = Infinity;
    }
    distances[start] = 0;

    // Priority queue (min-heap)
    const pq = new PriorityQueue();
    pq.enqueue(start, 0);

    // Set of visited nodes
    const visited = new Set();

    while (!pq.isEmpty()) {
        const { vertex: currentVertex, priority: currentDistance } = pq.dequeue();

        // If the vertex has been visited, skip it
        if (visited.has(currentVertex)) continue;

        // Mark the current node as visited
        visited.add(currentVertex);

        // Update the distances to the neighboring nodes
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

// Priority Queue implementation
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

// Example usage:
const graph = {
    'A': { 'B': 4, 'C': 2 },
    'B': { 'A': 4, 'C': 5, 'D': 10 },
    'C': { 'A': 2, 'B': 5, 'D': 3 },
    'D': { 'B': 10, 'C': 3 }
};

const result = dijkstra(graph, 'A');
console.log(result);  // { A: 0, B: 4, C: 2, D: 5 }