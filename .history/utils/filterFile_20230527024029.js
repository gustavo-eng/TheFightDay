
function extractTechnologies(data) {
    const regex = /\d+\.\s+(.+):\s(.+)/g;
    const technologies = [];

    let match;
    while ((match = regex.exec(data)) !== null) {
      const technology = {
        name: match[1],
        description: match[2]
      };
      technologies.push(technology);
    }

    return technologies;
}


module.exports = extractTechnologies;