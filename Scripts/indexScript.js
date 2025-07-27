console.log('IndexScript.js loaded');
FetchRepos();
document.onload = OnPageLoad;

function OnPageLoad() {
    console.log('Page loaded successfully');
    FetchRepos();
}

async function FetchRepos() {
    try {
        let response = await fetch('https://api.github.com/users/Noah-Chisholm/repos');
        let repos = await response.json();
        repos = repos.filter(repo => !repo.fork); // Filter out forked repositories
        repos = repos.map(repo => ({
            name: repo.name,
            url: repo.html_url,
            description: repo.description || 'No description available'
        }));
        let repoList = document.getElementById('GitHubProjectList');
        repoList.innerHTML = ''; // Clear existing list
        repos.forEach(repo => {
            let listItem = document.createElement('li');
            listItem.innerHTML = `<a href="${repo.url}" target="_blank">${repo.name}</a>: ${repo.description}`;
            repoList.appendChild(listItem);
        });
        console.log('Repositories:', repos);
    } catch (error) {
        console.error('Error fetching repositories:', error);
    }
}