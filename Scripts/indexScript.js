document.onload = OnPageLoad;

function OnPageLoad() {
    console.log('Page loaded successfully');
    FetchRepos();
}

async function FetchRepos() {
    try {
        let response = await fetch('https://api.github.com/users/Noah-Chisholm-Weber/repos');
        let repos = await response.json();
        console.log('Repositories:', repos);
    } catch (error) {
        console.error('Error fetching repositories:', error);
    }
}